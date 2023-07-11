var mysql = require('mysql');
const express = require("express");

const app = express();

var con = mysql.createConnection({
    host: "localhost",
    user:"root",
    password: "P@ssw0rd",
    database:'BankDetails'
});
