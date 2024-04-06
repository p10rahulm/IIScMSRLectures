:: Type the command `synchronizeCloud.bat "commit message"`
:: Preliminary Checks:
:: 1. Ensure "gcloud auth login" is already done
:: 2. Ensure that you are on the IISc CISCO VPN

:: Check if a commit message is provided
if "%~1"=="" (
    set commit_message=updated content
) else (
    set commit_message=%~1
)

echo "commit message = %commit_message%"


gsutil -m rsync -r assets gs://www.cstheoryseminars.org/assets
echo "Assets Directory Synced"
gsutil -m  -D rsync -r content gs://www.cstheoryseminars.org/content
echo "Contents Directory Synced"
gsutil -m  -D rsync ./ gs://www.cstheoryseminars.org
:: gsutil cp index.html gs://www.cstheoryseminars.org
echo "Base Directory Synced"



:: Now Git changes
git add -A
git commit -m "%commit_message%"
git push


:: Now attempt to directly update website through SSH
ssh -t msrseminar@csacloud.iisc.ac.in -p 3232 "./sync.sh"
:: plink msrseminar@csacloud.iisc.ac.in -P 3232 -pw msr$em1nar
:: ./sync.sh
echo "Please check that the website https://www.csa.iisc.ac.in/theoryseminars/ is updated"

