@echo off
cd "c:\Users\vinod.tayde\Downloads\Ecom\Ecom"
echo Current directory:
cd
echo.
echo Git status:
git status
echo.
echo Adding all files:
git add .
echo.
echo Git status after add:
git status
echo.
echo Committing changes:
git commit -m "Add client folder and all React frontend files"
echo.
echo Pushing to repository:
git push origin master
echo.
echo Done!
pause
