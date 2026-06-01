#!/bin/bash
# Batch PHASH matcher: find visually similar images despite web compression
# Usage: ./match_images.sh <query_image> <search_directory>
# Returns top 10 matches sorted by similarity (lower score = more similar)

QUERY="$1"
SEARCH_DIR="$2"
TOPN="${3:-10}"

if [[ -z "$QUERY" || -z "$SEARCH_DIR" ]]; then
  echo "Usage: $0 <query_image> <search_directory> [top_n]"
  exit 1
fi
if [[ ! -f "$QUERY" ]]; then
  echo "Query file not found: $QUERY"
  exit 1
fi
if [[ ! -d "$SEARCH_DIR" ]]; then
  echo "Search directory not found: $SEARCH_DIR"
  exit 1
fi

echo "Matching: $QUERY"
echo "Searching: $SEARCH_DIR"
echo "---"

find "$SEARCH_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -print0 \
  | xargs -0 -P"$(nproc)" -I{} sh -c '
    score=$(compare -metric PHASH "$1" "{}" null: 2>&1)
    echo "$score  {}"
  ' -- "$QUERY" \
  | sort -n \
  | head -"$TOPN"
