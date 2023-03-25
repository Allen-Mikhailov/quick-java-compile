@echo off
SET mypath=%~dp0
node %mypath:~0,-1%/index.js %1 %2 %3