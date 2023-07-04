var mysql = require('mysql');
const express = require("express");

const app = express();

var con = mysql.createConnection({
    host: "localhost",
    user:"root",
    password: "P@ssw0rd",
    database:'BankDetails'
});

app.get("/data",async(req,res) =>{
    var getTableData = `SELECT *  FROM userBankDetails`;
    con.query(getTableData, function(err, result){
        if(err) throw err;
        // alert("Data added successfully!")
        res.status(200).send(result);
    })
})

const handleFormData = async () => {
    const sent = await fetch('/registration', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
     })
}


app.post('/postRequest',(req,res)=>{
    var tableData = 'insert into userBankDetails'
    con.query(tableData,function(err,result){
        if(err) throw err;
        res. status(200).send(result);
    })
});

const port = 5000;
app.listen(5000, () => {
    console.log(`Server running on port ${port}`);
  }); 
app.on('listening', function() {
    console.log('Express server started on port %s at %s', app.address().port, app.address().address);
});



