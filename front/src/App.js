import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState , useEffect } from 'react';
import axios from 'axios'


const App = () => {
  const [nom , setNom] = useState('');
  const [prenom , setPrenom] = useState('');
  const [filiere , setFiliere] = useState('');
  const [cne , setCNE] = useState('');
  const [ville , setVille] = useState('');
  const [students , setStudents] = useState(null);



useEffect(()=>{
  console.log("Hey");
},[]);

const AddStudent = async () => {
    try{

      const res = await axios.get("/api/v1/students");
      const data = res.data;
      setStudents(data);
    }catch(err){
      console.log(err);
    }
}

const GetStudents = async () => {
    try{

      const res = await axios.get("/api/v1/students");
      const data = res.data;
      setStudents(data);
      console.log(students);
    }catch(err){
      console.log(err);
    }
}


  return (
    <div className="App">
      <h1>Student Scheduler</h1>
      <div className="form">
        <div className = "row">
          <TextField id="standard-basic" label="Nom" variant="standard" onChange={(e) => setNom(e.target.value)}/>
          <TextField id="standard-basic" label="Prenom" variant="standard" onChange={(e) => setPrenom(e.target.value)}/>
        </div>
        <div className = "row">
          <TextField id="standard-basic" label="Ville" variant="standard" onChange={(e) => setVille(e.target.value)}/>
          <TextField id="standard-basic" label="Filiere" variant="standard" onChange={(e) => setFiliere(e.target.value)}/>
        </div>
        <div className="row">
          <TextField id="standard-basic" className="center" label="CNE" variant="standard" onChange={(e) => setCNE(e.target.value)}/>
        </div>
        <div className="mybtn">
          <Button variant="contained" onClick={() => AddStudent}>Add Student</Button>
        </div>

      </div>
      <div className="table">
        <table>
        <tr>
          <th>ID</th>
          <th>Nom</th>
          <th>Prenom</th>
        </tr>
          <tr>
            <td>1</td>
            <td>Kassi</td>
            <td>Ayoub</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
