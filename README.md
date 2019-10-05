# Currencies

## About

React Native application for tracking currencies, adding/removing them to favorites & seeing more specific info about each currency.
 
## Folder Structure  
 
```  
currencies/
├── README.md
├── node_modules/
├── package.json
├── .gitignore
├── app.json
├── babel.config.js
├── metro.config.js
├── index.js
├── android/
├── ios/
├── ___tests__/
├── src/
|   ├──assets/
|   ├──components/
|   ├──reducers/
|   ├──router/
|   ├──sagas/
|   ├──screens/
|   ├──services/
|   ├──shared/
|   ├──store/
|   ├──utils/
|   ├──App.js
|   └──config.js
└──
```  

## Installation

Clone Github repo (or download zip):
```
$ git clone https://github.com/NemanjaManot/currencies.git
```

Install packages:
```
$ cd currencies
$ npm install
```

## Running

To run application for Android:
```
$ npm run android
```

Make sure you have **Android Emulator** up & running.

Note: Application still not tested for iOS devices.

## Tech Stack

- React Native
- React
- Redux
- Redux-Saga
- Reselect
- Axios
- React Native Paper
- Async Storage for RN
- React Navigation
