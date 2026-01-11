#!/bin/bash

# path to your uploads folder
TARGET_DIR="assets/wp-content/uploads"

find "$TARGET_DIR" -type f | while read -r FILEPATH; do
    FILENAME=$(basename "$FILEPATH")
    DIRNAME=$(dirname "$FILEPATH")
    PARENT_DIR_NAME=$(basename "$DIRNAME")

    # Check if the parent directory name matches the filename exactly
    if [[ "$FILENAME" == "$PARENT_DIR_NAME" ]]; then
        GRANDPARENT_DIR=$(dirname "$DIRNAME")
        TEMP_FILE="$GRANDPARENT_DIR/${FILENAME}_temp"
        FINAL_FILE="$GRANDPARENT_DIR/$FILENAME"

        echo "Fixing: $FILENAME"

        # 1. Move file to grandparent dir with a temporary suffix
        mv "$FILEPATH" "$TEMP_FILE"

        # 2. Remove the now-empty directory (which has the conflicting name)
        rmdir "$DIRNAME"

        # 3. Rename the temp file to the correct final name
        mv "$TEMP_FILE" "$FINAL_FILE"
    fi
done