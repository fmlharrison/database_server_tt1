var request = require("request");

var base_url = "http://localhost:4000/";

describe("Database Server", function () {

  describe("GET /", function () {

    it("return a status of 200", function () {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode.toBe(200));
        done(); //this is a jasmine node funtion that acts as a callback to synchronize the expec function.
      });
    });

    it("returns Database Server", function () {
      request.get(base_url, function(error, response, body) {
        expect(body).toBe("Database Server");
        done();
      });
    });

  });

});
