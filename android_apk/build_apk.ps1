$ErrorActionPreference = "Stop"
$sdk = "C:\Users\Owner\AppData\Local\Android\Sdk"
$buildTools = "$sdk\build-tools\35.0.0"
$platform = "$sdk\platforms\android-34\android.jar"
$work = "C:\Users\Owner\.gemini\antigravity\scratch\football-live-platform\android_apk"

Set-Location $work

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "  FutbolLive Pro - Android APK Builder" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

# Clean previous bins
if (Test-Path "$work\bin") {
    Remove-Item -Path "$work\bin\*" -Recurse -Force -ErrorAction SilentlyContinue
} else {
    New-Item -ItemType Directory -Path "$work\bin" -Force | Out-Null
}

if (-not (Test-Path "$work\gen")) {
    New-Item -ItemType Directory -Path "$work\gen" -Force | Out-Null
}

Write-Host "1. Generating R.java with AAPT..." -ForegroundColor Green
& "$buildTools\aapt.exe" package -f -m -J gen -M AndroidManifest.xml -S res -I $platform

Write-Host "2. Compiling Java classes with javac..." -ForegroundColor Green
& javac -d bin -cp $platform gen\com\futbollive\app\R.java src\com\futbollive\app\MainActivity.java

Write-Host "3. Creating classes.dex with D8..." -ForegroundColor Green
$classFiles = (Get-ChildItem -Path bin\com\futbollive\app\*.class).FullName
& "$buildTools\d8.bat" --lib $platform --output bin $classFiles

Write-Host "4. Packaging APK with AAPT..." -ForegroundColor Green
& "$buildTools\aapt.exe" package -f -M AndroidManifest.xml -S res -A assets -I $platform -F bin\unsigned.apk bin

Write-Host "5. Zipaligning APK..." -ForegroundColor Green
& "$buildTools\zipalign.exe" -f -p 4 bin\unsigned.apk bin\aligned.apk

Write-Host "6. Signing APK with apksigner..." -ForegroundColor Green
$keystore = "C:\Users\Owner\.gemini\antigravity\scratch\apk_build\debug.keystore"
if (-not (Test-Path $keystore)) {
    $keystore = "$work\debug.keystore"
    if (-not (Test-Path $keystore)) {
        & keytool -genkeypair -v -keystore $keystore -alias androiddebugkey -keypass android -storepass android -keyalg RSA -keysize 2048 -validity 10000 -dname "CN=Android Debug,O=Android,C=US"
    }
}

$outputDownloads = "C:\Users\Owner\Downloads\FutbolLive_Pro.apk"
$outputLocal = "C:\Users\Owner\.gemini\antigravity\scratch\football-live-platform\FutbolLive_Pro.apk"

& "$buildTools\apksigner.bat" sign --ks $keystore --ks-pass pass:android --ks-key-alias androiddebugkey --key-pass pass:android --out $outputDownloads bin\aligned.apk

Copy-Item $outputDownloads $outputLocal -Force

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host " SUCCESS! APK tayyor bo'ldi:" -ForegroundColor Green
Write-Host " 1. $outputDownloads" -ForegroundColor Yellow
Write-Host " 2. $outputLocal" -ForegroundColor Yellow
Write-Host "==========================================" -ForegroundColor Cyan

Get-Item $outputDownloads | Select-Object Name, Length, LastWriteTime
