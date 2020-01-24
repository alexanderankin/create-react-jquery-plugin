# <%= project.spacedName %>

This project was created with [Create React JQuery Plugin Starter Kit][1].

<% if (pm === 'npm') { %>
* To show a development preview or run the example, run `npm run dev` or `npm run example`.
* To monitor for changes and recompile them into the `dist folder`: `npm run watch`.
* To monitor the repository for tests, please wait until a future release. :)
<% } else { %>
* To show a development preview or run the example, run `yarn dev` or `yarn example`.
* To monitor for changes and recompile them into the `dist folder`: `yarn watch`.
* To monitor the repository for tests, please wait until a future release. :)
<% } %>

This project a JavaScript file that can be added after JQuery in the script
order to add a JQuery plugin which allows to render the React Component to a
an element.

Example:
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <title>Page Title</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script></body>
    <script src="/<%= project.camelName %>.js"></script>
    <script>$(() => { $('#componentDiv').<%= project.camelName %>({ value: 5 }); });</script>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <div id="component"></div>
  </body>
</html>
```

[1]: https://github.com/alexanderankin/create-react-jquery-plugin
