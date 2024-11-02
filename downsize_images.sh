for file in ./photos/*; do
  convert $file -resize 200x150 "photos_resized/`basename ${file%.*}`.jpg"
done
