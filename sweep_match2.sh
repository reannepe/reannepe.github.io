#!/bin/bash
# Sweep v2: pre-compute 4x4 grayscale grid for all cloud images, then match all gallery images.

set -e

CACHE_FILE="/tmp/cloud_grid_fp.txt"
QUERY_DIR="/home/devj/local-arch/code/reannepe.github.io/images/selected"
CLOUD_DIR="/mnt/cloud-storage/Reanne/Design Projects/Needs Organization"

echo "=== Step 1: Pre-compute 4x4 grayscale grids for all cloud images ==="

if [[ ! -f "$CACHE_FILE" ]]; then
  find "$CLOUD_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -print0 \
    | xargs -0 -P"$(nproc)" -I{} sh -c '
      grid=$(convert "{}" -resize 4x4! -colorspace gray -depth 8 txt:- 2>/dev/null \
        | grep -v "^#" | awk "{print \$NF}" | paste -sd,)
      echo "$grid  {}"
    ' \
    > "$CACHE_FILE"
  echo "Cached $(wc -l < "$CACHE_FILE") grids"
else
  echo "Using cached $CACHE_FILE ($(wc -l < "$CACHE_FILE") entries)"
fi

echo ""
echo "=== Step 2: Match each gallery image ==="

score_diff() {
  local q="$1" c="$2"
  # Compute sum of squared differences between two comma-separated grayscale lists
  # Gray values are like "gray(128)" - extract the number
  python3 -c "
q=[int(s.split('(')[1].rstrip(')')) for s in '$q'.split(',')]
c=[int(s.split('(')[1].rstrip(')')) for s in '$c'.split(',')]
print(sum((a-b)**2 for a,b in zip(q,c)))
"
}

for query in "$QUERY_DIR"/*.jpg; do
  [[ -f "$query" ]] || continue
  base=$(basename "$query")
  qgrid=$(convert "$query" -resize 4x4! -colorspace gray -depth 8 txt:- 2>/dev/null \
    | grep -v "^#" | awk '{print $NF}' | paste -sd,)

  echo "--- $base ---"
  while IFS='  ' read -r cgrid cpath; do
    diff=$(score_diff "$qgrid" "$cgrid")
    echo "$diff  $cpath"
  done < "$CACHE_FILE" | sort -n | head -5
done
