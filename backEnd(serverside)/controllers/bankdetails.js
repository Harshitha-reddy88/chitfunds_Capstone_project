async function bankDetails(req,res){
    var getTableData = `SELECT *  FROM userBankDetails`;
    con.query(getTableData, function(err, result){
        if(err) throw err;
        // alert("Data added successfully!")
        res.status(200).send(result);
    })
}

async function searchingBankDetails(){
    const sent = await fetch('/registration', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
     })
}
module.export={bankDetails,searchingBankDetails}

