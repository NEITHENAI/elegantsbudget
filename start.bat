@echo off
title Uganda National Budget FY 2027/2028 (UGX 80.0T)
echo Starting Uganda National Budget 80T portal on http://localhost:5175 ...
start "" "http://localhost:5175"
call npm.cmd run dev -- --host --port 5175
pause
