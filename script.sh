#!/bin/bash

# Make sure you're at the root of the git repo
echo "Temporarily renaming files to force case-sensitive Git tracking..."

# Find all jsx files (you can also include .js or others if needed)
for file in $(git ls-files | grep -E '\.jsx$'); do
  dirname=$(dirname "$file")
  basename=$(basename "$file")
  lowercase="${basename,,}"  # lowercased version

  # Only rename if filename isn't already lowercase
  if [[ "$basename" != "$lowercase" ]]; then
    tempname="_TEMP_$basename"
    echo " - Renaming $file to $dirname/$tempname"
    mv "$file" "$dirname/$tempname"
    git add -A
    git commit -m "Temp rename $basename to $tempname to fix Git case issue"

    echo " - Renaming $dirname/$tempname to $dirname/$basename"
    mv "$dirname/$tempname" "$dirname/$basename"
    git add -A
    git commit -m "Final rename $tempname -> $basename"
  fi
done

echo "✅ All files processed. Now push your repo and rebuild on Vercel."
