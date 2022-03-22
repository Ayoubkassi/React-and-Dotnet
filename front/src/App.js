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

  //EFFETU IT My call
  // useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
const AddStudent = async () => {
    try{

      const res = await axios.get("/api/v1/students");
      const data = res.data;
      console.log(data);
    }catch(err){
      console.log(err);
    }
}
  // },[]);

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
          <Button variant="contained" onClick={AddStudent}>Add Student</Button>
        </div>

      </div>
    </div>
  );
}

export default App;
