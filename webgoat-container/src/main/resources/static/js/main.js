//main.js
/*
/js
js/main.js << main file for require.js
--/libs/(jquery,backbone,etc.) << base libs
--/goatApp/ << base dir for goat application, js-wise
--/goatApp/model
--/goatApp/view
--/goatApp/support
--/goatApp/controller
*/

require.config({
  baseUrl: "js/",
  paths: {
    // Updated to use jQuery 3.6.0 from WebJars to fix CVE-2016-10707
    jquery: '/webjars/jquery/3.6.0/jquery.min',
    jqueryui: 'libs/jquery-ui-1.10.4',
    underscore: 'libs/underscore-min',
    backbone: 'libs/backbone-min',
    text: 'libs/text',
    templates: 'goatApp/templates',
    polyglot: 'libs/polyglot.min'
  },

  map: {
    // Updated maps to use jQuery 3.6.0 from WebJars
    'libs/jquery-base' : {'jquery':'/webjars/jquery/3.6.0/jquery.min'},
    'libs/jquery-vuln' : {'jquery':'/webjars/jquery/3.6.0/jquery.min'}
  },

  shim: {
	"jqueryui": {
	  exports:"$",
	  deps: ['jquery']
	},
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});

// Use jQuery 3.6.0 instead of vulnerable versions to fix CVE-2016-10707
require(['jquery','jqueryui', 'underscore','backbone','goatApp/goatApp'], function($,jqueryui,_,Backbone,Goat){
    Goat.initApp();
});