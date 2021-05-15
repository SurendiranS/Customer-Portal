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
    // uname = req.body.username.toUpperCase();
    // pass = req.body.password.toUpperCase();
    //    const uname = '0000007005';
    //    const pass = '1234567890';
    console.log("sending request");
    const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
        <soapenv:Header/>
        <soapenv:Body>
        <urn:ZROY_UN_PASS_FM>
            <!--You may enter the following 2 items in any order-->
            <UNAME>1</UNAME>
            <PASS>011</PASS>
        </urn:ZROY_UN_PASS_FM>
        </soapenv:Body>
    </soapenv:Envelope>`;
    var options = {
        url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_ROY_PORTAL&receiverParty=&receiverService=&interface=SI_ROY_PORTAL_UN_PASS&interfaceNamespace=http://royportal.com',
        headers: {
            'Content-Type': 'application/xml',
            'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
        },
        body: postData
    }
    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
            result1 = JSON.parse(result1);
            var resp = result1['SOAP:Envelope']['SOAP:Body']['ns0:ZROY_UN_PASS_FM.Response']['SUCCESS'];
            res.send(resp);
            // res.send(result1);
        }
    })
});

// --------------------------------------------------------------------------------------------------

app.post('/profile', (req, res) => {
    //    uname = req.body.username.toUpperCase();
    // pass = req.body.password.toUpperCase();
    //   const uname = '0000007006';
    // const pass = '1234567890';
    const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:prof="http://profile.royportal.com">
  <soapenv:Header/>
  <soapenv:Body>
     <prof:MT_PROFILE_REQ>
        <!--Optional:-->
        <I_CUSID>${uname}</I_CUSID>
     </prof:MT_PROFILE_REQ>
  </soapenv:Body>
</soapenv:Envelope>`;
    var options = {
        url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_ROY_PORTAL&receiverParty=&receiverService=&interface=SI_PROFILE&interfaceNamespace=http://profile.royportal.com',
        headers: {
            'Content-Type': 'application/xml',
            'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
        },
        body: postData
    }
    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var result2 = parser.xml2json(body, { compact: true, spaces: 4 });
            result2 = JSON.parse(result2);
            var resp = result2['SOAP:Envelope']['SOAP:Body']['rfc:ZPROFILE_ROY_FM.Response']['E_CUSDETAILS'];
            res.send(resp);
            // res.send(result2);
        }
    })
});

// --------------------------------------------------------------------------------------------------

app.post('/updprofile', (req, res) => {
    //    uname = req.body.username.toUpperCase();
    // pass = req.body.password.toUpperCase();
    //   const uname = '0000007006';
    // const pass = '1234567890';
    city = req.body.City;
    country = req.body.Country;
    district = req.body.District;
    name1 = req.body.Name1;
    name2 = req.body.Name2;
    pincode = req.body.Pcode;
    state = req.body.State;
    street = req.body.Street;
    telephone = req.body.Phone_number;


    const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
      <soapenv:Header/>
      <soapenv:Body>
         <urn:ZUPDPROFILE_ROY_FM>
            <!--You may enter the following 10 items in any order-->
            <I_CITY>${city}</I_CITY>
            <I_COUNTRY>${country}</I_COUNTRY>
            <I_DISTRICT>${district}</I_DISTRICT>
            <I_KUNNR>${uname}</I_KUNNR>
            <I_NAME_1>${name1}</I_NAME_1>
            <I_NAME_2>${name2}</I_NAME_2>
            <I_PS_CODE>${pincode}</I_PS_CODE>
            <I_STATE>${state}</I_STATE>
            <I_STREET>${street}</I_STREET>
            <I_TELENUM>${telephone}</I_TELENUM>
         </urn:ZUPDPROFILE_ROY_FM>
      </soapenv:Body>
   </soapenv:Envelope>`;
    var options = {
        url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_ROY_PORTAL&receiverParty=&receiverService=&interface=SI_UPDPROFILE_2&interfaceNamespace=http://up2dprofile.royportal.com',
        headers: {
            'Content-Type': 'application/xml',
            'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
        },
        body: postData
    }
    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var result3 = parser.xml2json(body, { compact: true, spaces: 4 });
            result3 = JSON.parse(result3);
            var resp = result3['SOAP:Envelope']['SOAP:Body']['ns0:ZUPDPROFILE_ROY_FM.Response']['E_CUSDETAILS_2'];
            res.send(resp);
            // res.send(result2);
        }
    })
});

// --------------------------------------------------------------------------------------------------

app.post('/salesorder', (req, res) => {
    //    uname = req.body.username.toUpperCase();
    // pass = req.body.password.toUpperCase();
    //   const uname = '0000007006';
    // const pass = '1234567890';

    const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:ZSD_SALESORDER_DETAILS_ROY_FM>
         <!--You may enter the following 8 items in any order-->
         <I_CUSID>${uname}</I_CUSID>
         <!--Optional:-->
         <I_DOCDATE_FROM></I_DOCDATE_FROM>
         <!--Optional:-->
         <I_DOCDATE_TO></I_DOCDATE_TO>
         <!--Optional:-->
         <I_EXMATNR>
            <!--Optional:-->
            <MATERIAL_EXT></MATERIAL_EXT>
            <!--Optional:-->
            <MATERIAL_VERS></MATERIAL_VERS>
            <!--Optional:-->
            <MATERIAL_GUID></MATERIAL_GUID>
         </I_EXMATNR>
         <!--Optional:-->
         <I_MATNR></I_MATNR>
         <!--Optional:-->
         <I_PURORDER></I_PURORDER>
         <!--Optional:-->
         <I_PURORDER_NUM></I_PURORDER_NUM>
         <I_SALESORG></I_SALESORG>
      </urn:ZSD_SALESORDER_DETAILS_ROY_FM>
   </soapenv:Body>
</soapenv:Envelope>`;
    var options = {
        url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_ROY_PORTAL&receiverParty=&receiverService=&interface=SI_SALESORDER&interfaceNamespace=http://salesorder.royportal.com',
        headers: {
            'Content-Type': 'application/xml',
            'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
        },
        body: postData
    }
    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var result4 = parser.xml2json(body, { compact: true, spaces: 4 });
            result4 = JSON.parse(result4);
            var resp = result4['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_SALESORDER_DETAILS_ROY_FM.Response']['E_SALESORDER'];
            res.send(resp);
            // res.send(result2);
        }
    })
});

// --------------------------------------------------------------------------------------------------

app.post('/delivery', (req, res) => {

    const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
      <soapenv:Header/>
      <soapenv:Body>
         <urn:ZSD_DELIVERY_ROY_FM>
            <!--You may enter the following 2 items in any order-->
            <I_CUSID>${uname}</I_CUSID>
            <!--Optional:-->
            <IT_DELIVERY>
               <!--Zero or more repetitions:-->
               <item>
                  <!--Optional:-->
                  <KUNNR></KUNNR>
                  <!--Optional:-->
                  <KUNAG></KUNAG>
                  <!--Optional:-->
                  <VBELN></VBELN>
                  <!--Optional:-->
                  <ERZET></ERZET>
                  <!--Optional:-->
                  <ERDAT></ERDAT>
                  <!--Optional:-->
                  <VKORG></VKORG>
                  <!--Optional:-->
                  <LFART></LFART>
                  <!--Optional:-->
                  <LFDAT_V></LFDAT_V>
                  <!--Optional:-->
                  <INCO2></INCO2>
                  <!--Optional:-->
                  <LFUHR></LFUHR>
                  <!--Optional:-->
                  <MATNR></MATNR>
               </item>
            </IT_DELIVERY>
         </urn:ZSD_DELIVERY_ROY_FM>
      </soapenv:Body>
   </soapenv:Envelope>`;
    var options = {
        url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_ROY_PORTAL&receiverParty=&receiverService=&interface=SI_DELIVERY&interfaceNamespace=http://delivery.royportal.com',
        headers: {
            'Content-Type': 'application/xml',
            'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
        },
        body: postData
    }
    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var result5 = parser.xml2json(body, { compact: true, spaces: 4 });
            result5 = JSON.parse(result5);
            var resp = result5['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_DELIVERY_ROY_FM.Response']['IT_DELIVERY'];
            res.send(resp);
            // res.send(result2);
        }
    })
});

// --------------------------------------------------------------------------------------------------

app.post('/payment', (req, res) => {

    //  comcode= req.body.comcode;

    const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZFI_PAYMENT_AGING_ROY_FM>
          <!--You may enter the following 4 items in any order-->
          <I_COMCODE>SA01</I_COMCODE>
          <I_CUSID>${uname}</I_CUSID>
          <!--Optional:-->
          <I_DOCDATE></I_DOCDATE>
          <IT_DET>
             <!--Zero or more repetitions:-->
             <item>
                <!--Optional:-->
                <COMP_CODE></COMP_CODE>
                <!--Optional:-->
                <CUSTOMER></CUSTOMER>
                <!--Optional:-->
                <SP_GL_IND></SP_GL_IND>
                <!--Optional:-->
                <CLEAR_DATE></CLEAR_DATE>
                <!--Optional:-->
                <CLR_DOC_NO></CLR_DOC_NO>
                <!--Optional:-->
                <ALLOC_NMBR></ALLOC_NMBR>
                <!--Optional:-->
                <FISC_YEAR></FISC_YEAR>
                <!--Optional:-->
                <DOC_NO></DOC_NO>
                <!--Optional:-->
                <ITEM_NUM></ITEM_NUM>
                <!--Optional:-->
                <PSTNG_DATE></PSTNG_DATE>
                <!--Optional:-->
                <DOC_DATE></DOC_DATE>
                <!--Optional:-->
                <ENTRY_DATE></ENTRY_DATE>
                <!--Optional:-->
                <CURRENCY></CURRENCY>
                <!--Optional:-->
                <LOC_CURRCY></LOC_CURRCY>
                <!--Optional:-->
                <REF_DOC_NO></REF_DOC_NO>
                <!--Optional:-->
                <DOC_TYPE></DOC_TYPE>
                <!--Optional:-->
                <FIS_PERIOD></FIS_PERIOD>
                <!--Optional:-->
                <POST_KEY></POST_KEY>
                <!--Optional:-->
                <DB_CR_IND></DB_CR_IND>
                <!--Optional:-->
                <BUS_AREA></BUS_AREA>
                <!--Optional:-->
                <TAX_CODE></TAX_CODE>
                <!--Optional:-->
                <LC_AMOUNT></LC_AMOUNT>
                <!--Optional:-->
                <AMT_DOCCUR></AMT_DOCCUR>
                <!--Optional:-->
                <LC_TAX></LC_TAX>
                <!--Optional:-->
                <TX_DOC_CUR></TX_DOC_CUR>
                <!--Optional:-->
                <ITEM_TEXT></ITEM_TEXT>
                <!--Optional:-->
                <BRANCH></BRANCH>
                <!--Optional:-->
                <BLINE_DATE></BLINE_DATE>
                <!--Optional:-->
                <PMNTTRMS></PMNTTRMS>
                <!--Optional:-->
                <DSCT_DAYS1></DSCT_DAYS1>
                <!--Optional:-->
                <DSCT_DAYS2></DSCT_DAYS2>
                <!--Optional:-->
                <NETTERMS></NETTERMS>
                <!--Optional:-->
                <DSCT_PCT1></DSCT_PCT1>
                <!--Optional:-->
                <DSCT_PCT2></DSCT_PCT2>
                <!--Optional:-->
                <DISC_BASE></DISC_BASE>
                <!--Optional:-->
                <DSC_AMT_LC></DSC_AMT_LC>
                <!--Optional:-->
                <DSC_AMT_DC></DSC_AMT_DC>
                <!--Optional:-->
                <PYMT_METH></PYMT_METH>
                <!--Optional:-->
                <PMNT_BLOCK></PMNT_BLOCK>
                <!--Optional:-->
                <FIXEDTERMS></FIXEDTERMS>
                <!--Optional:-->
                <INV_REF></INV_REF>
                <!--Optional:-->
                <INV_YEAR></INV_YEAR>
                <!--Optional:-->
                <INV_ITEM></INV_ITEM>
                <!--Optional:-->
                <DUNN_BLOCK></DUNN_BLOCK>
                <!--Optional:-->
                <DUNN_KEY></DUNN_KEY>
                <!--Optional:-->
                <LAST_DUNN></LAST_DUNN>
                <!--Optional:-->
                <DUNN_LEVEL></DUNN_LEVEL>
                <!--Optional:-->
                <DUNN_AREA></DUNN_AREA>
                <!--Optional:-->
                <DOC_STATUS></DOC_STATUS>
                <!--Optional:-->
                <NXT_DOCTYP></NXT_DOCTYP>
                <!--Optional:-->
                <VAT_REG_NO></VAT_REG_NO>
                <!--Optional:-->
                <REASON_CDE></REASON_CDE>
                <!--Optional:-->
                <PMTMTHSUPL></PMTMTHSUPL>
                <!--Optional:-->
                <REF_KEY_1></REF_KEY_1>
                <!--Optional:-->
                <REF_KEY_2></REF_KEY_2>
                <!--Optional:-->
                <T_CURRENCY></T_CURRENCY>
                <!--Optional:-->
                <AMOUNT></AMOUNT>
                <!--Optional:-->
                <NET_AMOUNT></NET_AMOUNT>
                <!--Optional:-->
                <NAME></NAME>
                <!--Optional:-->
                <NAME_2></NAME_2>
                <!--Optional:-->
                <NAME_3></NAME_3>
                <!--Optional:-->
                <NAME_4></NAME_4>
                <!--Optional:-->
                <POSTL_CODE></POSTL_CODE>
                <!--Optional:-->
                <CITY></CITY>
                <!--Optional:-->
                <COUNTRY></COUNTRY>
                <!--Optional:-->
                <STREET></STREET>
                <!--Optional:-->
                <PO_BOX></PO_BOX>
                <!--Optional:-->
                <POBX_PCD></POBX_PCD>
                <!--Optional:-->
                <POBK_CURAC></POBK_CURAC>
                <!--Optional:-->
                <BANK_ACCT></BANK_ACCT>
                <!--Optional:-->
                <BANK_KEY></BANK_KEY>
                <!--Optional:-->
                <BANK_CTRY></BANK_CTRY>
                <!--Optional:-->
                <TAX_NO_1></TAX_NO_1>
                <!--Optional:-->
                <TAX_NO_2></TAX_NO_2>
                <!--Optional:-->
                <TAX></TAX>
                <!--Optional:-->
                <EQUAL_TAX></EQUAL_TAX>
                <!--Optional:-->
                <REGION></REGION>
                <!--Optional:-->
                <CTRL_KEY></CTRL_KEY>
                <!--Optional:-->
                <INSTR_KEY></INSTR_KEY>
                <!--Optional:-->
                <PAYEE_CODE></PAYEE_CODE>
                <!--Optional:-->
                <LANGU></LANGU>
                <!--Optional:-->
                <BILL_LIFE></BILL_LIFE>
                <!--Optional:-->
                <BE_TAXCODE></BE_TAXCODE>
                <!--Optional:-->
                <BILLTAX_LC></BILLTAX_LC>
                <!--Optional:-->
                <BILLTAX_FC></BILLTAX_FC>
                <!--Optional:-->
                <LC_COL_CHG></LC_COL_CHG>
                <!--Optional:-->
                <COLL_CHARG></COLL_CHARG>
                <!--Optional:-->
                <CHGS_TX_CD></CHGS_TX_CD>
                <!--Optional:-->
                <ISSUE_DATE></ISSUE_DATE>
                <!--Optional:-->
                <USAGEDATE></USAGEDATE>
                <!--Optional:-->
                <BILL_USAGE></BILL_USAGE>
                <!--Optional:-->
                <DOMICILE></DOMICILE>
                <!--Optional:-->
                <DRAWER></DRAWER>
                <!--Optional:-->
                <CTRBNK_LOC></CTRBNK_LOC>
                <!--Optional:-->
                <DRAW_CITY1></DRAW_CITY1>
                <!--Optional:-->
                <DRAWEE></DRAWEE>
                <!--Optional:-->
                <DRAW_CITY2></DRAW_CITY2>
                <!--Optional:-->
                <DISCT_DAYS></DISCT_DAYS>
                <!--Optional:-->
                <DISCT_RATE></DISCT_RATE>
                <!--Optional:-->
                <ACCEPTED></ACCEPTED>
                <!--Optional:-->
                <BILLSTATUS></BILLSTATUS>
                <!--Optional:-->
                <PRTEST_IND></PRTEST_IND>
                <!--Optional:-->
                <BE_DEMAND></BE_DEMAND>
                <!--Optional:-->
                <OBJ_TYPE></OBJ_TYPE>
                <!--Optional:-->
                <REF_DOC></REF_DOC>
                <!--Optional:-->
                <REF_ORG_UN></REF_ORG_UN>
                <!--Optional:-->
                <REVERSAL_DOC></REVERSAL_DOC>
                <!--Optional:-->
                <SP_GL_TYPE></SP_GL_TYPE>
                <!--Optional:-->
                <NEG_POSTNG></NEG_POSTNG>
                <!--Optional:-->
                <REF_DOC_NO_LONG></REF_DOC_NO_LONG>
                <!--Optional:-->
                <BILL_DOC></BILL_DOC>
             </item>
          </IT_DET>
       </urn:ZFI_PAYMENT_AGING_ROY_FM>
    </soapenv:Body>
 </soapenv:Envelope>`;
    var options = {
        url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_ROY_PORTAL&receiverParty=&receiverService=&interface=SI_PAYMENT_AGING&interfaceNamespace=http://paymentageing.royportal.com',
        headers: {
            'Content-Type': 'application/xml',
            'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
        },
        body: postData
    }
    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var result6 = parser.xml2json(body, { compact: true, spaces: 4 });
            result6 = JSON.parse(result6);
            var resp = result6['SOAP:Envelope']['SOAP:Body']['ns0:ZFI_PAYMENT_AGING_ROY_FM.Response']['IT_DET'];
            res.send(resp);
            // res.send(result2);
        }
    })
});

//   --------------------------------------------------------------------------------------

app.post('/credit', (req, res) => {

    const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZFI_CREDIT_DEBIT_ROY_FM>
          <!--You may enter the following 3 items in any order-->
          <I_CUSID>${uname}</I_CUSID>
          <IT_CRE>
             <!--Zero or more repetitions:-->
             <item>
                <!--Optional:-->
                <GJAHR></GJAHR>
                <!--Optional:-->
                <AUGDT></AUGDT>
                <!--Optional:-->
                <AUGBL></AUGBL>
                <!--Optional:-->
                <PSWBT></PSWBT>
                <!--Optonal:-->
                <PSWSL></PSWSL>
             </item>
          </IT_CRE>
          <IT_DEB>
             <!--Zero or more repetitions:-->
             <item>
                <!--Optional:-->
                <GJAHR></GJAHR>
                <!--Optional:-->
                <AUGDT></AUGDT>
                <!--Optional:-->
                <AUGBL></AUGBL>
                <!--Optional:-->
                <PSWBT></PSWBT>
                <!--Optional:-->
                <PSWSL></PSWSL>
             </item>
          </IT_DEB>
       </urn:ZFI_CREDIT_DEBIT_ROY_FM>
    </soapenv:Body>
 </soapenv:Envelope>`;
    var options = {
        url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_ROY_PORTAL&receiverParty=&receiverService=&interface=SI_CREDIT_DEBIT&interfaceNamespace=http://creditdebit.royportal.com',
        headers: {
            'Content-Type': 'application/xml',
            'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
        },
        body: postData
    }
    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var result7 = parser.xml2json(body, { compact: true, spaces: 4 });
            result7 = JSON.parse(result7);
            var resp = result7['SOAP:Envelope']['SOAP:Body']['ns0:ZFI_CREDIT_DEBIT_ROY_FM.Response']['IT_CRE'];
            res.send(resp);
            // res.send(result2);
        }
    })
});

//   --------------------------------------------------------------------------------------

app.post('/debit', (req, res) => {

    const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZFI_CREDIT_DEBIT_ROY_FM>
          <!--You may enter the following 3 items in any order-->
          <I_CUSID>${uname}</I_CUSID>
          <IT_CRE>
             <!--Zero or more repetitions:-->
             <item>
                <!--Optional:-->
                <GJAHR></GJAHR>
                <!--Optional:-->
                <AUGDT></AUGDT>
                <!--Optional:-->
                <AUGBL></AUGBL>
                <!--Optional:-->
                <PSWBT></PSWBT>
                <!--Optonal:-->
                <PSWSL></PSWSL>
             </item>
          </IT_CRE>
          <IT_DEB>
             <!--Zero or more repetitions:-->
             <item>
                <!--Optional:-->
                <GJAHR></GJAHR>
                <!--Optional:-->
                <AUGDT></AUGDT>
                <!--Optional:-->
                <AUGBL></AUGBL>
                <!--Optional:-->
                <PSWBT></PSWBT>
                <!--Optional:-->
                <PSWSL></PSWSL>
             </item>
          </IT_DEB>
       </urn:ZFI_CREDIT_DEBIT_ROY_FM>
    </soapenv:Body>
 </soapenv:Envelope>`;
    var options = {
        url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_ROY_PORTAL&receiverParty=&receiverService=&interface=SI_CREDIT_DEBIT&interfaceNamespace=http://creditdebit.royportal.com',
        headers: {
            'Content-Type': 'application/xml',
            'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
        },
        body: postData
    }
    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var result8 = parser.xml2json(body, { compact: true, spaces: 4 });
            result8 = JSON.parse(result8);
            var resp = result8['SOAP:Envelope']['SOAP:Body']['ns0:ZFI_CREDIT_DEBIT_ROY_FM.Response']['IT_DEB'];
            res.send(resp);
            // res.send(result2);
        }
    })
});


app.listen(3000, () => {
    console.log("server is running on port 3000");
})


