#!/bin/bash
# Script to build the project for Vercel deployment

# Build with TypeScript errors ignored
npx ng build --configuration production --aot --no-progress 