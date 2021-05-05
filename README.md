# TripFinder. - React Hotel Listing Template

It's a nice and clean template built with React, NextJS, Context API, & Styled-Components. Its very easy to use, comes with ready made beautiful components. Build your amazing react app with this template. Both Create React App and Next Js versions are available.

#### Demo Link:

https://tripfinder-redq.firebaseapp.com/

#### Support Link:

https://redqsupport.ticksy.com/

<br>

## Getting Started

After downloading the file from ThemeForest, You will find tripfinder.zip file. Unzip the tripfinder.zip and Follow the Installation guideline from below section.

<br>

## Installation

Make sure you have Node, Yarn already installed in your system. you can check if Node, Yarn available in your system by running below command,

```
node -v

yarn -v
```

If it's not installed in your system then please install them by checking official documentation of,

1. https://nodejs.org/en/
2. https://yarnpkg.com/lang/en/docs/install/

After that, Install Package dependency by running below command at the root directory of inst folder to get started with the project,

```
yarn
```

For starting development server run below command at the root directory

for hotel

```
yarn start:hotel
```

for hotel-next

```
yarn start:hotel-next
```

For starting production server run below command at the root directory

for hotel

```
yarn build:hotel
```

for hotel-next

```
yarn build:hotel-next
```

> ### NOTE: Before start the project add your config credentials in `next.config.js` file for hotel next and .env file for hotel

<br/>

## Configuration

Fill up the configuration with your information in the `.env` file for hotel.

```
REACT_APP_GOOGLE_MAP_API_KEY=https://maps.googleapis.com/maps/api/js?v=3.exp&key=YOUR_GOOGLE_API_KEY&libraries=geometry,drawing,places
```

Fill up the configuration with your information in the `next.config.js` file for hotel-next.

```
env: {
      GOOGLE_API_KEY: 'YOUR_GOOGLE_API_KEY',
    REACT_APP_GOOGLE_MAP_API_KEY:
      'https://maps.googleapis.com/maps/api/js?v=3.exp&key=YOUR_GOOGLE_API_KEY&libraries=geometry,drawing,places',
      SERVER_API: `http://localhost:3001`,
    },
```
