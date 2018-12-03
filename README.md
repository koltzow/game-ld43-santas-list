## Santa's List

This is a game for Ludum Dare 43

[link to game page on ldjam](https://ldjam.com/events/ludum-dare/43/santas-list)


## Installation

If you've never used Node or npm before, you'll need to install Node. If you
use homebrew, just run:

```
brew install node
```

Otherwise, you can download and install from [here](http://nodejs.org/download/).

### Install dependencies

```
npm install
```

This runs through all dependencies listed in `package.json` and installs them
locally within the project.

### Running dev server

```
npm start
```

This will compile your assets and serve them through an [express](https://expressjs.com//) server with
[webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) and
[webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware).

### Building for production

```
npm run build
```

This will minify and hash all assets etc. to the docs folder
