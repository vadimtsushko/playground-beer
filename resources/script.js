var config={};
function authenticate(){
  Playground.authenticate(config);
}
function main(){
  require.config({
    baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port: "") + config.prefix + "resources",
  });

  require(['js/qlik'], function(qlik) {
    //we're now connected
     qlik.setOnError( function ( error ) {
        console.log(error);
    });
    console.log("Connecting to appname: " + config.appname);
    var app = qlik.openApp(config.appname, config);
    console.log(app);
  });
}