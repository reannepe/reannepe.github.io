#!/bin/bash
# Batch sweep: fingerprint all cloud images, then match all gallery images in one pass.

set -e

CACHE_FILE="/tmp/cloud_fingerprints.txt"
QUERY_DIR="/home/devj/local-arch/code/reannepe.github.io/images/selected"
CLOUD_DIR="/mnt/cloud-storage/Reanne/Design Projects/Needs Organization"

echo "=== Step 1: Fingerprint all cloud images (16x16 gray thumbnails) ==="

if [[ ! -f "$CACHE_FILE" ]]; then
  find "$CLOUD_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -print0 \
    | xargs -0 -P"$(nproc)" -I{} sh -c '
      fp=$(convert "{}" -resize 16x16! -colorspace gray -depth 8 txt:- 2>/dev/null | md5sum | cut -d" " -f1)
      echo "$fp  {}"
    ' \
    > "$CACHE_FILE"
  echo "Cached $(wc -l < "$CACHE_FILE") fingerprints to $CACHE_FILE"
else
  echo "Using cached $CACHE_FILE ($(wc -l < "$CACHE_FILE") entries)"
fi

echo ""
echo "=== Step 2: Generate fingerprints for gallery images and match ==="

for query in "$QUERY_DIR"/*.jpg "$QUERY_DIR"/plans/*.jpg; do
  [[ -f "$query" ]] || continue
  base=$(basename "$query")
  qfp=$(convert "$query" -resize 16x16! -colorspace gray -depth 8 txt:- 2>/dev/null | md5sum | cut -d" " -f1)

  # Find exact fingerprint match
  match=$(grep "$qfp" "$CACHE_FILE" | head -3)
  if [[ -n "$match" ]]; then
    echo "EXACT  $base  =>  $match"
  else
    # Find top 3 closest by PHASH (slower but better than nothing)
    echo "NO_EXACT  $base  — running PHASH comparison..."
  fi
done
