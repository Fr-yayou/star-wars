const Hapi = require("hapi");

const basicAuth = require("hapi-auth-basic");

const validate = async (request, username, password, h) => {
  if (username != "luke") {
    return { credentials: null, isValid: false };
  }
  if(password == "Dadsucks"){
    return { credentials: 1, isValid: true };
  }else{
    return { credentials: null, isValid: false };
  }
};

const main = async () => {
  const server = Hapi.server({ port: 4000 });

  // Register the plugin with hapi.
  await server.register(basicAuth);

  // Define strategy name and which method will use for validate the authorizatiion info.
  // "simple" is used as alias
  // "basic" the method for authorization is basic, it will ask user input username and password
  // "validate" the validation method it will be called when endpoint is called.
  server.auth.strategy("simple", "basic", { validate });

  // In case, we want all endpoints which need to be authorized, let enable below line.
  // Other wise, we need to set check authorization for each route manually.
  // server.auth.default("simple");

  // How to define a route without authorization.
  server.route({
    method: "GET",
    path: "/welcome",
    handler: function(request, h) {
      return "welcome";
    }
  });

  // How to define a route under authorization.

  await server.start();

  return server;
};



