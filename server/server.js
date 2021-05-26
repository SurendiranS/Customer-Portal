// const express = require('express')
// const app = express()
// app.listen(3000, ()=>{
//     console.log('Server Started')
// })



const express = require('express');
const parser = require('xml-js');
const request = require('request');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

// for angular sserver connection
app.use(function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const pwd = req.body.password;
    const postData = `<?xml version="1.0" encoding="UTF-8"?>
    <ns0:MT_RFC_REQ xmlns:ns0="http://pooja_custom_auth.com">
      <USERNAME>${username}</USERNAME>
       <PASSWORD>${pwd}</PASSWORD>
    </ns0:MT_RFC_REQ>`;
    var options = {
        url: 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/authentication',
        headers: {
            'Content-Type': 'application/xml',
            'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
        },
        body: postData
    }
    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let json = JSON.parse(response.body);
            res.send(json);
            console.log(json);
            var time = new Date();
            console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
        }
        else {
            console.log("error");
        }
    })
})

// --------------------------------------------------------------------------------------------------
//customer inquiry

app.post('/inquiry', (req, res) => {
    // const username=req.body.id;
    const username = 0000000018;
    //username=parseInt(id);
    //const pwd=req.body.password;
    const postData = `<?xml version="1.0" encoding="UTF-8"?>
    <ns0:MT_CUST_INQ_REQ xmlns:ns0="http://pooja_custom_inquirydetails.com">
      <CUSTOMER_ID>${username}</CUSTOMER_ID>
    </ns0:MT_CUST_INQ_REQ>`;
    var options = {
        url: 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/poo/inquiry',
        headers: {
            'Content-Type': 'application/xml',
            'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
        },
        body: postData
    }
    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let json = [];
            let json1 = JSON.parse(response.body);
            json1 = json1['IT_FINAL'];
            json.push(json1);
            res.send(json);
            console.log(json);
            var time = new Date();
            console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
        } else {
            console.log("error")
        }
    })
})

//customer debit
app.post('/debit', (req, res) => {
    const username = req.body.id;
    //const pwd=req.body.password;
    //console.log(req.body);
    const postData = `<?xml version="1.0" encoding="UTF-8"?>
    <ns0:MT_CUST_DEBITMEMO_REQ xmlns:ns0="http://pooja_custom_debitMemo.com">
      <CUSTOMER_ID>8</CUSTOMER_ID>
    </ns0:MT_CUST_DEBITMEMO_REQ>`;
    var options = {
        url: 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/debitmemo',
        headers: {
            'Content-Type': 'application/xml',
            'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
        },
        body: postData
    }
    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let json = JSON.parse(response.body);
            json = json['OUTPUT_TABLE'];
            res.send(json);
            console.log(json);
            var time = new Date();
            console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
        } else {
            console.log("error")
        }
    })
})
 
//customer Details

app.post('/getCustomerDetails', (req, res) => {
    const username=req.body.id;
    //const pwd=req.body.password;
    console.log(username);
    const postData = `<?xml version="1.0" encoding="UTF-8"?>
    <ns0:MT_CUST_DET_REQ xmlns:ns0="http://pooja_custom_details.com">
      <CUSTOMER_ID>0000000011</CUSTOMER_ID>
    </ns0:MT_CUST_DET_REQ>`;
    var options = {
      url: 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/customer/details',
      headers: {
        'Content-Type': 'application/xml',
        'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
      },
      body: postData
    }
    request.post(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        let json = JSON.parse(response.body);
        json = json['OUTPUT_USER_DETAILS_TABLE'];
        res.send(json);
        console.log(json);
        var time = new Date();
        console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());

      } else {
        console.log("error")
      }
    })
  })
  


app.listen(3000, () => {
    console.log("server is running on port 3000");
})


