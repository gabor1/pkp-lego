echo "### RUNNING DEPLOY SCRIPT..."
cd /home/git/pkp-lego-build
echo "### UPDATING GIT REPOSITORY..."
git pull origin master
echo "### BUILDING DOCUMENTATION HTML..."
make html
echo "### PUBLISHING THE NEW HTML TO THE DESTINATION..."
cp -r _build/html/* /var/www/html/pkp-lego/
echo "### FINISHED DEPLOY SCRIPT"
