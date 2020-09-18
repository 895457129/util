#!/usr/bin/env bash
rm -rf ./libs/
mkdir libs
tsc --jsx react-native --module esnext --moduleResolution node --lib es2017 --declaration true --declarationMap false --allowSyntheticDefaultImports true --esModuleInterop true --forceConsistentCasingInFileNames true  --noFallthroughCasesInSwitch true --noImplicitReturns true --pretty true --skipLibCheck true --strict true --outDir libs/ src/*.ts
