import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import logo from './logo.svg';
import './App.css';

import Navbar from "./components/Navbar"
import Layout from "./components/Layout"

import {Login} from "./components/Login"
import {Register} from "./components/Register"
import Home from "./components/Home"
import Dashboard from "./components/Dashboard"
//import { Router } from 'express';
import {Auth} from "./components/Auth"
import {NewPet} from "./components/NewPet"
import PrivateComponent from './components/PrivateComponent';
import MyPets from './components/MyPets';
import UpdatePet from './components/UpdatePet';
import PetRecord from './components/PetRecord';
import PetRecord2 from './components/PetRecord2';
import { NewRecord } from './components/NewRecord';
import {UpdateRecord} from './components/UpdateRecord'
import ProfileScreen from './components/ProfileScreen';
import PetCalendar from './components/PetCalendar';
import AboutUs from './components/AboutUs';
import ReminderWrapper from './components/ReminderWrapper';
import  Tasks from './components/Tasks'
import TaskApp from './components/TaskApp';


function App() {

/*  const [user, setLoginUser] = useState([]);

  useEffect (() => {
    setLoginUser(localStorage.getItem("user"))
  }, [])

  const updateUser = (user) => {
    localStorage.setItem("user", Json.stringfy(user))
    setLoginUser(user)
  } */
  

  return (
    <div className="App">
     
      <BrowserRouter> 
      <Navbar />  
      <Layout>       
        <Routes>
          <Route element ={<PrivateComponent />}> 
          
           
            <Route path='/dashboard' element={<Dashboard />} />  
            <Route path ='/edit-profile' element={<ProfileScreen />} />
            <Route path='/mypets' element={<MyPets />} /> 
            <Route path='/update/:petid' element={<UpdatePet />} />  
            <Route path='/newpet' element={<NewPet />} /> 
            <Route path='/petrecord/:recordId' element={<PetRecord />} /> 
            <Route path='/petrecord/update/:recordId' element={<UpdateRecord />} /> 
            <Route path='/petrecord/new-record/:petid' element={<NewRecord />} /> 
            <Route path='/pet-calendar' element={<PetCalendar />} /> 

          </Route>
          
          <Route exact path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/about-us' element={<AboutUs />} />

          <Route exact path="/tasks" element={<TaskApp />} />

          <Route path='/petrecord2' element={<PetRecord2 />} /> 
          
        </Routes>
      </Layout>
      </BrowserRouter>
      
    </div>
  );
  
}

export default App;


/*
 
<Route path='/petrecords/:petname/records' element={<PetRecord />} /> 

const [currentForm, setCurrentForm] = useState('login');

  const toogleForm = (formName) => {
    setCurrentForm(formName);
  }
  {
        currentForm == "login" ? <Login onFormSwitch={toogleForm} /> : <Register onFormSwitch={toogleForm} />
      }
      */

     