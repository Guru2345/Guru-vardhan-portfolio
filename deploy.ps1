# Deploy React app to GitHub Pages
Write-Host "Deploying React app to GitHub Pages..." -ForegroundColor Green

# Build the project
npm run build

# Remove existing files
Remove-Item -Path ".\favicon.ico" -ErrorAction SilentlyContinue
Remove-Item -Path ".\manifest.json" -ErrorAction SilentlyContinue
Remove-Item -Path ".\robots.txt" -ErrorAction SilentlyContinue
Remove-Item -Path ".\sitemap.xml" -ErrorAction SilentlyContinue
Remove-Item -Path ".\.nojekyll" -ErrorAction SilentlyContinue
Remove-Item -Path ".\_redirects" -ErrorAction SilentlyContinue
Remove-Item -Path ".\static" -Recurse -ErrorAction SilentlyContinue

# Copy build files to root
Copy-Item -Path ".\build\favicon.ico" -Destination "." -Force
Copy-Item -Path ".\build\manifest.json" -Destination "." -Force
Copy-Item -Path ".\build\robots.txt" -Destination "." -Force
Copy-Item -Path ".\build\sitemap.xml" -Destination "." -Force
Copy-Item -Path ".\build\.nojekyll" -Destination "." -Force
Copy-Item -Path ".\build\_redirects" -Destination "." -Force

# Copy static folder
Copy-Item -Path ".\build\static" -Destination ".\static" -Recurse -Force

# Add and commit changes
git add -A
git commit -m "Deploy React app to GitHub Pages"
git push origin main

Write-Host "Deployment complete!" -ForegroundColor Green