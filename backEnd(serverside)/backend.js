var mysql = require('mysql');
const express = require("express");
const app = express();

var con = mysql.createConnection({
    host: "localhost",
    user:"root",
    password: "P@ssw0rd",
    database:'chitfunds'
});


app.get("/data",async(req,res) =>{
    var getTableData = `SELECT *  FROM bankdetails`;
    con.query(getTableData, function(err, result){
        if(err) throw err;
        // alert("Data added successfully!")
        res.status(200).send(result);
    })
})

app.get('/search/:searchData',async(req,res) =>{
    var data=req.params.searchData
    var getTableData = `select * from bankdetails user_name="${data}"`;
    con.query(getTableData, function(err, result){
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

const port = 8000;
app.listen(8000, () => {
    console.log(`Server running on port ${port}`);
  }); 
app.on('listening', function() {
    console.log('Express server started on port %s at %s', app.address().port, app.address().address);
});




