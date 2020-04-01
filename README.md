# PO2020

## Installation

Requirements: [Node.js](https://nodejs.org) 12+

```bash
npm install -g parcel-bundler
npm i
```

## Deployment

Build the application:

```bash
npm run build
```

A static build of the application will be available in the `dist` directory.

## Limitation

Images are automagically compressed, but right now there aren't plugin to add multiple sizes (it might come soon: (https://github.com/parcel-bundler/parcel/issues/3737)[https://github.com/parcel-bundler/parcel/issues/3737]) to use in responsive website so sizing must be manually (xnconvert is recommended).
