# Create React JQuery Plugin

Easily set up a project to produce a jQuery plugin implemented with the React
framework. The goal is to create a component, which can be distributed
separately from an app or web page, but rather can be added to any page with
jQuery already installed.

## Usage:

```
yarn create react-jquery-plugin my-plugin
```

or one of:

```
npx create-react-jquery-plugin my-plugin
npm init react-jquery-plugin my-plugin
```

## Features

TBD

## How It Works

It guesses some things about the project and complains if the src folder or
any of the files to be added are already there. Then it guesses some things
about the git configuration (to update the package.json author and repository
fields), copies everything from the template, and adds a bunch of dependencies
to the package.json so you can install them with yarn install or npm install.

## Dependencies

The template was created with

```
yarn add -D dotenv webpack webpack-cli mini-css-extract-plugin @babel/cli \
  @babel/core @babel/plugin-proposal-class-properties @babel/preset-env \
  @babel/preset-react babel-loader css-loader react react-dom prop-types \
  webpack-dev-server
```

## Shoutouts

[@swizec](https://twitter.com/swizec) for the blog post which inspired this
tool: [React components as jQuery plugins](
https://swizec.com/blog/using-react-in-the-real-world/swizec/6710)

