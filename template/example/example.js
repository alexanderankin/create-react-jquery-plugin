/**
 * Example Initialization code
 * 
 * Put whatever is necessary to demonstrate the plugin in this file.
 */
(() => {
  $(async () => {
    var response = await fetch('/api/counter');
    var data = await response.json();
    $('#root').<%= project.camelName %>(data);
  });

  var server = new Pretender();
  server.get('/api/counter', () => [
    200, { 'Content-Type': 'application/json' }, JSON.stringify({ value: 5 })
  ]);
})();
