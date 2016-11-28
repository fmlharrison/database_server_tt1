# Tech Test Week - Database Server

##The brief

You receive a message from a prospective employer:

"Before your interview, write a program that runs a server that is accessible on http://localhost:4000/. When your server receives a request on http://localhost:4000/set?somekey=somevalue it should store the passed key and value in memory. When it receives a request on http://localhost:4000/get?key=somekey it should return the value stored at somekey."

##How I approached the Test
This was the first time I had ever built anything in Node.js so it was an experiment as much as a test for me.  
I created a node app using express and jasmine to test.  
The challenge asked me to sort data in memory so I decided to store it in a global variable in my app.
I used TDD to test drive my app as I built it, asserting status codes and response body text to various HTTP requests. This was tough but I learnt a lot from doing this.  

###How to use
To run the server:  
```
git clone https://github.com/fmlharrison/database_server_tt1.git
cd database_server_tt1
npm install
node database_server.js
```

To run the tests (once cloned):  
```
npm test
```
