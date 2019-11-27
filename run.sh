#!/bin/bash

rm -Rf dist
ng build --prod
npx http-server -p 8080 -c-1 dist/observables-workers/