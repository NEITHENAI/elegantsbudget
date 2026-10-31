@echo off
title Uganda National Budget FY 2027/2028 (UGX 80.0T)
echo ===================================================================
echo   UGANDA NATIONAL BUDGET FY 2027/2028 - 80T CONSULTATION PORTAL
echo   Members: Akot Joyce, Ainabiitira Mary Trinah, Kayiira Henry, Magoola Grace Stephen
echo ===================================================================
echo.
echo Launching local development server on http://localhost:5175 ...
echo.

start "" "http://localhost:5175"
call npm.cmd run dev -- --host --port 5175

pause
