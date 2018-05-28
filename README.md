# demo_angularjs
github_sumary

# About
> demo_angular is basic app angularjs with modern technologies.

Out of the box it comes with support for:
- angular 1.6
- angular material 1.6
- ui-router 1.6
- Webpack 2
- Ecmascript 6 via Babel-Loader
- Style languages (sass, scss)
- Style transformations via PostCSS
- Automatic code linting via esLint
- Ability to unit test components via karma + jasmine

## Changes since version 0.0.1
This example is written in ES2015. 
This means it is ___not compatible with node.js versions before 8.9.4___.

## Prerequisites
```bash
# Make sure both is installed globally
npm install -g yarn
npm install -g gulp-cli
```

## Setting up projects
```bash
# Clone the project
git clone https://github.com/jinvillaz/demo_angularjs.git

```

### Install dependencies

```
# cd into project
cd demo_angularjs

# install dependencies 
yarn
```


## Gulp development tasks
The following commands are available in your project:

  - **gulp build** to build an optimized version of your application in /dist
  - **gulp serve** to launch a browser sync server on your source files mode dev
  - **gulp serve:dist** to launch a server on your optimized application
  - **gulp test** to launch your unit tests with Karma
  - **gulp test:auto** to launch your unit tests with Karma in watch mode
  
## Start app mode dev

```
npm install

# start using gulp
gulp serve
```

## Contribute
Contributions are welcomed. When submitting a fix, write a test that exposes the bug and 
fails before applying your fix. Submit the test alongside the fix.


## License
[MIT license](http://opensource.org/licenses/mit-license.php)
  


