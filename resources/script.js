// Input your config 
var config = {};

function authenticate() {
  Playground.authenticate(config);
};

function main() {
  
  require.config({
    baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port: "") + config.prefix + "resources"
  });

  /**
   * Load the entry point for the Capabilities API family
   * See full documention: http://help.qlik.com/en-US/sense-developer/Subsystems/APIs/Content/MashupAPI/qlik-interface-interface.htm
   */

  require(['js/qlik'], function(qlik) {
    // We're now connected

    // Suppress Qlik error dialogs and handle errors how you like.
     qlik.setOnError( function ( error ) {
        console.log(error);
    });

    // Open a dataset on the server.  
    console.log("Connecting to appname: " + config.appname);
    var app = qlik.openApp(config.appname, config);
    console.log(app);
  });
};