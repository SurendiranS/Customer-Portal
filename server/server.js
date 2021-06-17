// const express = require('express')
// const app = express()
// app.listen(3000, ()=>{
//     console.log('Server Started')
// })

// KC#01int%^&


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
            let json = JSON.parse(response.body);
            json = json['IT_FINAL'];
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
      <CUSTOMER_ID>18</CUSTOMER_ID>
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


//customer credit
app.post('/credit', (req, res) => {
    const username = req.body.id;
    //const pwd=req.body.password;
    //console.log(req.body);
    const postData = `<?xml version="1.0" encoding="UTF-8"?>
    <ns0:MT_CUST_CREDITMEMO_REQ xmlns:ns0="http://pooja_custom_creditMemo.com">
      <CUSTOMER_ID>18</CUSTOMER_ID>
    </ns0:MT_CUST_CREDITMEMO_REQ>`;
    var options = {
        url: 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/creditmemo',
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

// delivery
app.post('/delivery', (req, res) => {
    const username = req.body.id;
    //username=parseInt(id);
    //const pwd=req.body.password;
    console.log(username);
    const postData = `<?xml version="1.0" encoding="UTF-8"?>
    <ns0:MT_CUST_LIS_DEL_REQ xmlns:ns0="http://pooja_custom_lis_delivery">
       <CUSTOMER_ID>18</CUSTOMER_ID>
    </ns0:MT_CUST_LIS_DEL_REQ>`;
    var options = {
        url: 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/poo/listdelivery',
        headers: {
            'Content-Type': 'application/xml',
            'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
        },
        body: postData
    }
    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let json = JSON.parse(response.body)
            json = json['ITEM_TABLE'];
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
    const username = req.body.id;
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

//Customer Payment aging
app.post('/payment', (req, res) => {
    const postData = `<?xml version="1.0" encoding="UTF-8"?>
    <ns0:MT_CUST_PAYMENTAGING_REQ xmlns:ns0="http://pooja_custom_paymentAging.com">
      <CUSTOMER_ID>18</CUSTOMER_ID>
       <DATE></DATE>
    </ns0:MT_CUST_PAYMENTAGING_REQ>`;
    var options = {
        url: 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/paymentaging',
        headers: {
            'Content-Type': 'application/xml',
            'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
        },
        body: postData
    }
    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let json = JSON.parse(response.body);
            json = json['IT_TABLE'];
            res.send(json);
            console.log(json);
            var time = new Date();
            console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
        } else {
            console.log("error")
        }
    })
})

//customer detail update
app.post('/CustomerDetailsUpdate', (req, res) => {
    const username = req.body.data.KUNNR;
    const LAND1 = req.body.data.LAND1;
    const NAME1 = req.body.data.NAME1;
    const NAME2 = req.body.data.NAME2;
    const ORT01 = req.body.data.ORT01;
    const PSTLZ = req.body.data.PSTLZ;
    const REGIO = req.body.data.REGIO;
    const STRAS = req.body.data.STRAS;
    const TELF1 = req.body.data.TELF1;
    //const pwd=req.body.password;
    console.log(req.body);
    const postData = `<?xml version="1.0" encoding="UTF-8"?>
      <ns0:ZFM_POO_CUSTOMER_DETAIL_UPDATE xmlns:ns0="urn:sap-com:document:sap:rfc:functions">
         <KUNNR>${username}</KUNNR>
         <LAND1>${LAND1}</LAND1>
         <NAME1>${NAME1}</NAME1>
         <NAME2>${NAME2}</NAME2>
         <ORT01>${ORT01}</ORT01>
         <PSTLZ>${PSTLZ}</PSTLZ>
         <REGIO>${REGIO}</REGIO>
         <SORTL></SORTL>
         <STRAS>${STRAS}</STRAS>
         <TELF1>${TELF1}</TELF1>
         </ns0:ZFM_POO_CUSTOMER_DETAIL_UPDATE>`;
    var options = {
        url: 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/customer/updatedetails',
        headers: {
            'Content-Type': 'application/xml',
            'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
        },
        body: postData
    }
    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let json = JSON.parse(response.body)
            res.send(json);
            console.log(json);
            var time = new Date();
            console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
        } else {
            console.log("error")
        }
    })
})
// app.post('/masterdata', (req, res) => {​​​​​​​
// const postData = `<?xml version="1.0" encoding="UTF-8"?>
// <ns0:MT_CUST_MASTERDATA_REQ xmlns:ns0="http://pooja_custom_masterdata.com">
//   <FIRST_NAME>RAM</FIRST_NAME>
//    <LAST_NAME>KUMAR</LAST_NAME>
//    <TELEPHONE>9894021876</TELEPHONE>
//    <STREET>KK ROAD</STREET>
//    <POSTL_CODE>603404</POSTL_CODE>
//    <CITY>VILLUPURAM</CITY>
//    <COUNTRY>IN</COUNTRY>
//    <LANGU_P>EN</LANGU_P>
//    <CURRENCY>INR</CURRENCY>
//    <REF_COMPANY>SA01</REF_COMPANY>
//    <DISTRIBUTION_CHANNEL>S1</DISTRIBUTION_CHANNEL>
//    <DIVISION>S1</DIVISION>
//    <REF_CUSTOMER>0006000042</REF_CUSTOMER>
// </ns0:MT_CUST_MASTERDATA_REQ>`;
//   var options = {​​​​​​​
//     url: 'http://dxktpipo.kaarcloud.com:50000/RESTAdapter/masterdatarang',
//     headers: {​​​​​​​
//       'Content-Type': 'application/xml',
//       'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
//     }​​​​​​​,
//     body: postData
//   }​​​​​​​
//   request.post(options, function (error, response, body) {​​​​​​​
//     if (!error && response.statusCode == 200) {​​​​​​​
//       let json = JSON.parse(response.body)
//       res.send(json);
//       console.log(json);
//       console.log(json.CUTOMERNO);
//     }​​​​​​​ else {​​​​​​​
//       console.log("error")
//     }​​​​​​​
//   }​​​​​​​)
// }​​​​​​​)


app.listen(3000, () => {
    console.log("server is running on port 3000");
})
