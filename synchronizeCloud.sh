:: Type the command "cmd < synchronizeCloud.sh"
:: Ensure "gcloud auth login" is already done
gsutil -m rsync -r assets gs://www.cstheoryseminars.org/assets
echo "Assets Directory Synced"
gsutil -m rsync -r content gs://www.cstheoryseminars.org/content
echo "Contents Directory Synced"
gsutil -m rsync ./ gs://www.cstheoryseminars.org
:: gsutil cp index.html gs://www.cstheoryseminars.org
echo "Base Directory Synced"

:: Now Git changes
git add -A
git commit -m "content changes"
git push
