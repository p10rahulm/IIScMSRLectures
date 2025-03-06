#!/bin/bash
# Type from bash/git bash on windows ` ./synchronizeWindows.sh "commit messsage"
# Preliminary Checks:
# 1. Ensure "gcloud auth login" is already done
# 2. Ensure that you are on the IISc CISCO VPN

# Check if an argument was provided
if [ -z "$1" ]; then
    commit_message="updated content"
else
    commit_message="$1"
fi

echo "Committing with message: $commit_message"

# Synchronize directories with Google Cloud Storage
# gsutil -m rsync -r assets gs://www.cstheoryseminars.org/assets
# echo "Assets Directory Synced"

# gsutil -m rsync -r content gs://www.cstheoryseminars.org/content
# echo "Contents Directory Synced"

# gsutil -m rsync ./ gs://www.cstheoryseminars.org
# echo "Base Directory Synced"

# Git changes
git add -A
git commit -m "$commit_message"
git push
echo "Git changes pushed"

# Attempt to directly update website through SSH
ssh -t msrseminar@csacloud.iisc.ac.in -p 3232 "./sync.sh"
echo "Please check that the website https://www.csa.iisc.ac.in/theoryseminars/ is updated"
