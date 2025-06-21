#!/bin/bash

echo "🔍 Scanning src/ for Git-tracked files with casing mismatches..."
echo "---------------------------------------------------------------"

# Only scan specific folders and extensions
FILES=$(git ls-files src | grep -Ei '\.(js|jsx|ts|tsx)$')

for file in $FILES; do
  # Skip if not a real file
  [[ ! -f "$file" ]] && continue

  # Get actual path from disk (case-sensitive match)
  actual=$(find "$(dirname "$file")" -maxdepth 1 -type f -iname "$(basename "$file")")

  if [[ "$actual" != "$file" ]]; then
    echo "⚠️  Mismatch: Git has '$file' but disk has '$actual'"

    dir=$(dirname "$file")
    base=$(basename "$actual")
    temp="_TEMP_$base"

    # Rename to temp
    mv "$actual" "$dir/$temp"
    git add -A
    git commit -m "Temp rename $base -> $temp to fix casing"

    # Rename back
    mv "$dir/$temp" "$dir/$base"
    git add -A
    git commit -m "Fix casing: $base"
  fi
done

echo "✅ All casing issues fixed (in src/ only). Push and redeploy!"
