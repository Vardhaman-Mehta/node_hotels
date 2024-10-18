/*
    //create a function
function add(a,b){
    return a + b;
} 

    //1st create a veriable then create a function
var add = function(a,b){
    return a + b
}

    //arrow function
var add = (a,b) => {return a + b};


//

var add = (a , b) => a+b;
var ans = add(789,10)

console.log("addition is : " + ans)

(function(){
    console.log('yash');
})();


    //callback function
function callback(){
    console.log('yash is calling a callback function');
}

const add = function(a,b, callback){
    var result = a + b;
    console.log('result is : '+ result); // main work is complete 
    callback(); //call callback function
}

add(3,4, callback)



const add = function(a,b, yash){
    var result = a + b;
    console.log('result is : '+ result); // main work is complete 
    yash(); //call callback function
}

add(2,3, function(){
    console.log('add complete ')
})

    //using arrow function
add(2,3, () => console.log('add complete '));



var fs = require('fs');
var os = require('os')

var user = os.userInfo();
console.log(user.username)
            //file path ,                     data ,             callback
fs.appendFile('greeting.txt','hi ' + user.username + '!\n', () =>{
    console.log('file is created');

});

console.log(fs);


const notes = require('./notes.js');
var _ = require('lodash');

var age = notes.age;
var result = notes.addnumber(age+18,10);
console.log(age)
console.log('result is now: ' + result)


var data = ["persion", "persion", 1,2,1,2,"name","age",'2'];
var filter = _.uniq(data)
console.log(filter)

console.log(_.isMatch(87));

    //To convert Json To Object
const jsonString = '{"name": "jeo", "age": 30, "city": "new york"}';
const jsonObject = JSON.parse(jsonString);

console.log("name: " + jsonObject.name);

const objectToConvert = {
    name: "alice",
    age : 25
};
const json = JSON.stringify(objectToConvert);

console.log(json);
*/




const express = require('express')
const app = express();
const db = require('./db');
app.use(express.json());
require('dotenv').config();


const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

 
const Person = require('./models/person');

//menu 
const menu = require('./models/menu')


app.get('/', function (req, res) {
  res.send('Welcome to hotel... how can i help you ?.. We have list of menus')
})



    //Get Method to get the person data/Information




// {  Day-6: Task To Create POST/menu and GET/menu 

            //Using GET/menu Method


            //Using POST/menu Method


// } 


//Import the router of person files
const personRoutes = require('./routes/personRoutes');

// use the person routers
app.use('/person', personRoutes);

//Import the router of menu files
const menuRoutes = require('./routes/menuRoutes');

// use the menu routers
app.use('/menu', menuRoutes);

    


//njuilhiuhuiogyuogig



// Use bodyParser to parse JSON


app.post('/menu', (req, res) => {
  // Log the body to ensure it's received correctly
  console.log(req.body);

  if (!req.body) {
    return res.status(400).send('No data received');
  }

  // Process your data (no need to manually parse JSON)
  res.status(200).send(req.body);
});



app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});
