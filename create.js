#!/usr/bin/env node
var sku = require('starter-kit-utils');
console.log('hello world');

sku.getAuthorInfo().then(console.log.bind(console));