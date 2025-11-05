@echo off

npm run build
git add .
git commit -m "Content update"
git push

echo.
echo ✅ Full site rebuilt and deployed!
pause
