#!/usr/bin/env node
var path = require('path');

var inquirer = require('inquirer');
var sku = require('starter-kit-utils');

function validateName(name) {
  return /[\w-_]+/.test(name);
}

function camelCasedName(name) {
  var parts = name.split(/[^\w\d]+/);
  for (var i = 1; i < parts.length; i++) {
    var p = parts[i]
    parts[i] = p.charAt(0).toUpperCase() + p.slice(1).toLowerCase();
  }

  return parts.join('');
}

function snakeCasedName(name) {
  return name
    .split(/[^\w\d]+/)
    .map(p => p.toLowerCase())
    .join('_');
}

function spacedName(name) {
  var parts = name.split(/[^\w\d]+/);
  for (var i = 0; i < parts.length; i++) {
    var p = parts[i]
    parts[i] = p.charAt(0).toUpperCase() + p.slice(1).toLowerCase();
  }

  return parts.join(' ');
}

async function getPmOpts() {
  var pms = await sku.checkManagers();
  var pmChoices = [];
  if (pms.npm) pmChoices.push('npm');
  if (pms.yarn) pmChoices.push('yarn');
  return {
    message: 'Package Manager',
    choices: pmChoices,
    default: pms.yarn ? 'yarn' : 'npm'
  };
}

function objectTrueValues(object) {
  var trueValues = {};
  Object.keys(object).forEach(key => {
    if (!!object[key])
      trueValues[key] = object[key];
  });

  return trueValues;
}

async function main(argv, cwd) {
  var directory = argv[2] || cwd;
  var dirname = directory.split(path.sep).pop();

  var author = await sku.getAuthorInfo();
  var authorInput = { name: 'author', default: author.author };
  var descriptionInput = {
    message: 'Description', default: 'Counter React JQuery Plugin'
  };
  var rd = author.url;

  var pmOpts = await getPmOpts();
  var inputs = await inquirer.prompt([
    { type: 'input', name: 'name', validate: validateName, default: dirname },
    { type: 'input', name: 'description', ...descriptionInput },
    { type: 'input', name: 'author', ...authorInput },
    { type: 'input', name: 'repo', message: 'Repository', default: rd },
    { type: 'input', name: 'license', message: 'License' },
    { type: 'list', name: 'pm', ...pmOpts }
  ]);

  var project = {
    camelName: camelCasedName(inputs.name),
    snakeName: snakeCasedName(inputs.name),
    spacedName: spacedName(inputs.name)
  };
  var locals = { project, ...inputs };
  console.log('Rendering with:', locals);

  var source = path.join(__dirname, 'template');
  await sku.renderFolder(source, dirname, locals);
  await sku.updateJSON(path.join(dirname, 'package.json'), objectTrueValues(inputs));
}

if (require.main === module) {
  main(process.argv, process.cwd());
}

module.exports = { main };
