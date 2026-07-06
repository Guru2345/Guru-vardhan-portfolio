@echo off
echo Deploying React app to GitHub Pages...

REM Build the project
call npm run build

REM Remove existing files first
del /q index.html 2>nul
del /q asset-manifest.json 2>nul
del /q favicon.ico 2>nul
del /q manifest.json 2>nul
del /q robots.txt 2>nul
del /q sitemap.xml 2>nul
del /q .nojekyll 2>nul
del /q _redirects 2>nul

REM Copy build files to root
copy build\index.html .
copy build\asset-manifest.json .
copy build\favicon.ico .
copy build\manifest.json .
copy build\robots.txt .
copy build\sitemap.xml .
copy build\.nojekyll .
copy build\_redirects .

REM Copy static folder
if exist static rmdir /s /q static
xcopy build\static static /s /e /y /i

REM Add and commit changes
git add -A
git commit -m "Deploy React app to GitHub Pages"
git push origin main

echo Deployment complete!
pause