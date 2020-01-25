// react
import React from 'react';
import ReactDOM from 'react-dom';

import getApp from './app.jsx';

// if jQuery is present
if (typeof jQuery !== 'undefined') {
  (function ($) {
    var pluginName = '<%= project.camelName %>';
    var defaults = {
      value: 0
    };

    // wrap Component in Plugin
    // (options is the argument passed to "$('#root').<%= project.camelName %>(options)")
    function Plugin(element, options) {
      this.element = element;
      this.settings = $.extend({}, defaults, options);
      this._defaults = defaults;
      this._name = pluginName;
      this.init();
    }

    Plugin.prototype.init = function() {
      this.component = ReactDOM.render(getApp(this.settings), this.element);
      return this;
    };
    
    // optional, add data and other hooks
    Plugin.prototype.val = function() {
      if (!arguments.length) {
        return this.component.state.counter;
      } else {
        this.settings.value = val;
        this.init();
      }
    };

    // add to jQuery
    $.fn[pluginName] = function (options) {
      return this.map(function () {
        var name = 'plugin_' + pluginName;
        if (!$.data(this, name))
          $.data(this, name, new Plugin(this, options));

        return $.data(this, name);
      });
    };
  })(jQuery);
}
