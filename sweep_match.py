#!/usr/bin/env python3
"""Sweep match: pre-compute 4x4 grayscale fingerprints for all cloud images,
then find the closest matches for all gallery images in one pass."""

import os
import sys
import glob
from PIL import Image

CACHE_FILE = "/tmp/cloud_fingerprints_cache.txt"
QUERY_DIR = "/home/devj/local-arch/code/reannepe.github.io/images/selected"
CLOUD_DIR = "/mnt/cloud-storage/Reanne/Design Projects/Needs Organization"
TOP_N = 5

def fingerprint(path):
    """Compute 4x4 grayscale fingerprint as tuple of 16 ints (0-255)."""
    img = Image.open(path).convert("L")  # grayscale
    thumb = img.resize((4, 4), Image.LANCZOS)
    return tuple(thumb.getdata())

def squared_diff(a, b):
    return sum((x - y) ** 2 for x, y in zip(a, b))

# Step 1: Pre-compute cloud fingerprints
if os.path.exists(CACHE_FILE):
    print(f"Loading cached fingerprints from {CACHE_FILE}")
    with open(CACHE_FILE) as f:
        lines = f.readlines()
    cloud_fps = []
    for line in lines:
        parts = line.strip().split("  ", 1)
        vals = tuple(int(v) for v in parts[0].split(","))
        cloud_fps.append((vals, parts[1]))
    print(f"Loaded {len(cloud_fps)} fingerprints")
else:
    print("Pre-computing fingerprints for cloud storage images...")
    cloud_fps = []
    exts = (".jpg", ".jpeg", ".png")
    for root, dirs, files in os.walk(CLOUD_DIR):
        for fname in files:
            if fname.lower().endswith(exts):
                path = os.path.join(root, fname)
                try:
                    fp = fingerprint(path)
                    cloud_fps.append((fp, path))
                except Exception as e:
                    print(f"  SKIP {path}: {e}", file=sys.stderr)
    print(f"Computed {len(cloud_fps)} fingerprints")
    with open(CACHE_FILE, "w") as f:
        for fp, path in cloud_fps:
            f.write(f"{','.join(str(v) for v in fp)}  {path}\n")

# Step 2: Match each gallery image
query_patterns = [
    os.path.join(QUERY_DIR, "*.jpg"),
    os.path.join(QUERY_DIR, "plans", "*.jpg"),
]
query_files = []
for pat in query_patterns:
    query_files.extend(glob.glob(pat))

print(f"\nMatching {len(query_files)} gallery images against {len(cloud_fps)} cloud images...\n")

for qpath in sorted(query_files):
    qbase = os.path.basename(qpath)
    qfp = fingerprint(qpath)
    
    # Score all
    scored = [(squared_diff(qfp, cfp), cpath) for cfp, cpath in cloud_fps]
    scored.sort(key=lambda x: x[0])
    
    print(f"--- {qbase} ---")
    for score, cpath in scored[:TOP_N]:
        print(f"  {score:6d}  {cpath}")
    print()
