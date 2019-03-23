'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: [
        'app'
      ]
    },

    nodeAssets: {
      'simple-css-reset': {
        import: ['reset.css']
      }
    }
  });
  return app.toTree();
};
