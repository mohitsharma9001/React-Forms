import React from "react";
import {
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react'

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
const initFun = {
    username : "",
    email : "",
    age : "",
    ismarried : "",
    gender : "",
}
const FormDetails = ()=>{
    const [data,setData] = React.useState(initFun);
    const [formData , setFormData] = React.useState([])
    const [showFlag,setShowFlag] = React.useState(false)
    console.log(formData)
 React.useEffect(()=>{
  setShowFlag(true)
getData()
 },[showFlag])


const getData = ()=>{
 let inputVal =  JSON.parse(localStorage.getItem("inputData")) || []
 setFormData(inputVal)
 setShowFlag(true)
}



    const handleChang = (e)=>{
        let { name, value, type, checked } = e.target;
       
        value = type === "checkbox" ? checked : value;
        setData((prevFormData) => ({
            ...prevFormData,
            [name]: value
          }));
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        const { username, email, ismarried, gender,age } = data;
        if(username === '' || email === "" || age === "" || ismarried === "" || gender === ""){
          alert("Please fill all the details")
        } else{
           let submitData = JSON.parse(localStorage.getItem("inputData")) || []
           submitData.push(data)
           localStorage.setItem("inputData",JSON.stringify(submitData))
           getData()
        }
    
     
    }
    const { username, email, ismarried, gender,age } = data;
    return <div>
      <FormControl>
<form onSubmit={handleSubmit} style={{width: "40%"}}>
<FormLabel>

        Username : <Input type="text" placeholder="Enter Username" name="username" onChange={handleChang} value={username}/>
   </FormLabel>
     <br />
     <FormLabel>
        Email : <Input type="Email" placeholder="Enter Email" name="email" onChange={handleChang} value={email}/>
        </FormLabel>
     <br />
     <FormLabel>
        Age : <Input type="number" placeholder="Enter Age" name="age" onChange={handleChang} value={age} />
        </FormLabel>
     <br />
     <FormLabel>
        Married  <input type="checkbox" name = "ismarried"  checked={ismarried} onChange={handleChang}/>
        </FormLabel>
     <br />
     <FormLabel>
          Gender
          <select name="gender" value={gender} onChange={handleChang}>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="O">Others</option>
          </select>
          </FormLabel>
        <br />
        {/* <input type="file" ref={fileRef} /> */}
        <br />

        <Input type="submit" value="SIGNUP" style={{color: "white",background:"Black"}}/>
    </form>
    </FormControl>
    
<div>
<table style={{margin:"auto", border:"0.5px solid black"}}>
  <thead style={{margin:"auto", border:"0.5px solid black"}}>
    <tr style={{margin:"auto", border:"0.5px solid black"}}>
      <th>Name</th>
      <th>Email</th>
      <th>Age</th>
      <th>Married</th>
      
    </tr>
  </thead>
  <tbody style={{margin:"auto", border:"0.5px solid black"}}>
 
    {showFlag ? 
 ( formData.map((data)=>{ return <tr style={{margin:"auto", border:"0.5px solid black"}}>
    <td>{data.username}</td>
    <td>{data.email}</td>
    <td>{data.age}</td>
    <td>{data.ismarried ? "married" : "unmarried"}</td>
   
  </tr>
    
  })  
  ) : "" }
  </tbody>
</table>
</div>
    

    </div>
   
    
}

export default FormDetails