var path = require('path');
console.log('config file started loading');
module.exports = {

  // This name will be used when attaching other nodes to this one.
  name: 'MasterNode',

  // Datalayer and network layer are the same thing.
  datalayer: {
    port: 50505,    // Listening port
    persist: false, // Persist data across restarts? (later)
    secure: false,  // Secure? (later)
  },

  modules: {
      //path: path.join(__dirname, 'node_modules', '@smc', 'fieldpop-plugin-salesforce'),
    'component_test': {
      path: path.join(__dirname, 'node_modules', 'component_test'),
      constructor: {
        type: 'sync',
        parameters: []
      }
    }
  },
  components: {
    'component_test': {
	moduleName: 'component_test',
      web: {
        routes: {
          static: 'html_pages'//webapp is the exposed folder which contains the defined webpages
        }
      }
    }
  }

}

