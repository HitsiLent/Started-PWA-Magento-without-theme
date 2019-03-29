#!/bin/bash


if ls node_modules | grep @magento;
then
  if ls node_modules/@magento/pwa-buildpack;
    then
  echo "Ya estan creados los accesos directos"
    else
  echo " la carpeta y se crean los accesos directos@magento"
  ln -sf ~/Documents/myCode/pwa-magento/pwa-studio/packages/pwa-buildpack node_modules/@magento/pwa-buildpack
  ln -sf ~/Documents/myCode/pwa-magento/pwa-studio/packages/upward-js node_modules/@magento/upward-js
  ln -sf ~/Documents/myCode/pwa-magento/pwa-studio/packages/peregrine node_modules/@magento/peregrine
  bash link-module-pwa-studio.sh
fi
else
  echo "se crea un @magento"
  mkdir node_modules/@magento/
  bash link-module-pwa-studio.sh
fi
