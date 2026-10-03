@echo off
echo ========================================================
echo   FutbolLive Pro - 10,000 Concurrency Platform
echo ========================================================
echo.
echo 1. Starting Fastify Backend on http://localhost:4000 ...
start "FutbolLive Backend" cmd /k "cd /d %~dp0backend && npm run dev"

echo 2. Starting Vite Frontend on http://localhost:3000 ...
start "FutbolLive Frontend" cmd /k "cd /d %~dp0frontend && npm run dev"

echo.
echo Hammasi ishga tushirildi!
echo Brauzerda oching: http://localhost:3000
echo Backend API: http://localhost:4000/api/matches/live
pause
