var request = require("request");
var server = require('../database_server');
var baseUrl = "http://localhost:4000";

describe("Database Server", function () {

  describe("GET /", function () {

    it("return a status of 200", function (done) {
      request.get(baseUrl, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done(); //this is a jasmine node funtion that acts as a callback to synchronize the expec function.
      });
    });

    it("returns with a body in the reponse", function (done) {
      request.get(baseUrl, function(error, response, body) {
        expect(body).toBe("Database Server");
        done();
      });
    });

  });

  describe("GET /set", function() {

    it("sets the data from the query string", function(done) {
      request.get("http://localhost:4000/set?name=felix", function(error, response, body) {
        expect(response.body).toBe("Your data has been stored");
        done(); //this is a jasmine node funtion that acts as a callback to synchronize the expec function.
      });
    });

  });

  describe("GET /get", function () {

    it("gets the data that was set", function(done) {
      request.get("http://localhost:4000/get?key=name", function(error, response, body) {
        expect(response.body).toBe('felix');
        server.closeServer();
        done(); //this is a jasmine node funtion that acts as a callback to synchronize the expec function.
      });

    });

  });

});
