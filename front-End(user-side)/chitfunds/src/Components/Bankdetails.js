// import React,{useEffect, useState} from "react";
// import './bankdetails.css'
// import axios from "axios"

// const Bankdetails = () => {
//      //const [data, setData] = useState([{"user_name":"Harshitha","address":"kolamasinapalli","contact":86889,"account_number":234567890,"account_type":"saving","IFSC_code":"2345678901","user_id":1},{"user_name":"Pallavi","address":"Punganur","contact":987654,"account_number":1234567134,"account_type":"saving","IFSC_code":"8756554545","user_id":2},{"user_name":"pavithra","address":"palamaner","contact":234987654,"account_number":1234567134,"account_type":"saving","IFSC_code":"8756554545","user_id":3},{"user_name":"Ram","address":"punganur","contact":234987654,"account_number":1234567134,"account_type":"saving","IFSC_code":"8756554545","user_id":3},{"user_name":"Shyam","address":"palamaner","contact":23498765,"account_number":54566778,"account_type":"saving","IFSC_code":"3243546575","user_id":5},{"user_name":"Gopi","address":"palamaner","contact":23498765,"account_number":54566778,"account_type":"saving","IFSC_code":"3243546575","user_id":6},{"user_name":"Chunnu","address":"palamaner","contact":23498765,"account_number":54566778,"account_type":"saving","IFSC_code":"3243546575","user_id":7},{"user_name":"Virat","address":"palamaner","contact":23498765,"account_number":54566778,"account_type":"saving","IFSC_code":"3243546575","user_id":8},{"user_name":"Karthik","address":"palamaner","contact":23498765,"account_number":54566778,"account_type":"saving","IFSC_code":"3243546575","user_id":9},{"user_name":"Kalyan","address":"palamaner","contact":23498765,"account_number":54566778,"account_type":"saving","IFSC_code":"3243546575","user_id":10}]);
//     const [data, setData]=useState([]);
//     useEffect(()=>{
//         fetchData();
//     },[])
//     const fetchData=()=>{
//         fetch("http://localhost:8000/data").then((res)=>{
//             return res.json();

//         }).then((res)=>{
//             setData(res);
//             console.log(res);
//         })
//     }
//     const handleData = async() => {
//         try {
//             const res = await axios.get(`http://localhost:8000/data`);
//             console.log(res)
//         }catch(err){
//             console.error(err);
//         }
     
//     }

//     return (
//     <div id="main">
//         {data?.map(({user_name,address,contact,account_number,account_type,IFSC_code})=><div>
//                 <div className="second">
//                     <div>{user_name}</div>
//                     <div>{address}</div>
//                     <div>{contact}</div>
//                     <div>{account_number}</div>
//                     <div>{account_type}</div>
//                     <div>{IFSC_code}</div>
//                 </div>
//             </div>)}
//         {/* .map(({user_name,address})=>) */}
//     </div>)
// }

// export default Bankdetails;


import { useEffect, useState } from "react";

const Bank = () => {
const [data, setData] = useState([]);

useEffect(()=> {
fetchData();
},[])

const fetchData = () =>{
fetch("http://localhost:8000/data").then((res)=>{
return res.json();
}).then((res)=>{
setData(res);
console.log(res);
})
}
return (<div>
{
data.map(({user_name,address,contact,account_number,account_type,IFSC_code}) => <div>
<div>{user_name}</div>                     
<div>{address}</div>
<div>{contact}</div>
<div>{account_number}</div>
<div>{account_type}</div>
<div>{IFSC_code}</div>
</div>)
}
</div>)
}
export default Bank;