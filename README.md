## Setup

### 1. Get the source code

Just clone the repo:
```sh
$ git clone -b master https://github.com/ColeMorton/improved-sniffle.git improved-sniffle
$ cd improved-sniffle
```

### 2. Install dependencies

```sh
$ yarn install
```

### 3. Open the app

```sh
$ yarn start
```
## Documentation

#### Why I chose to implement certain features and why I think it would help our customers?

This application is the product of rapid prototyping and contains the minimum set of features to provide a clean, intuitive UX and visually-appealing proof-of-concept.

#### Why did I choose these technologies?

Yarn was my package manager of choice due to it's convenience and ease in managing 3rd party libraries and the security that it's lock feature provides to ensure that the correct package versions are used.

I used Webpack to bundle the application as it's extremely easy to configure and set up.
It allows me to easily import the data.json and other dependencies with very little overhead.

Vue is a compact view library that can provide a fast, rich interactive UI with little setup required.

I decided to use Vuetify to provide a beautifully polished UI using Material Design.
