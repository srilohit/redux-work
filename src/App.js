import './App.css';
import React from 'react';
import StudentForm from './StudentForm';
import SignUp from './SignUp';
import SignUpYup from './SignUpYup';
import SignUpGetFieldProps from './SignUpGetFieldProps';
import SignUpFormikComponent from './SignUpFormikComponent';
import SignUpFieldComponent from './SignUpFieldComponent';
import Register from './Register';

function App() {
  return (
    
      <div className="border border-2 border-danger m-2 p-2">
        <StudentForm></StudentForm>
        <SignUp></SignUp>
        <SignUpYup></SignUpYup>
        <SignUpGetFieldProps></SignUpGetFieldProps>
        <SignUpFormikComponent></SignUpFormikComponent>
        <SignUpFieldComponent></SignUpFieldComponent>
        <Register></Register>
      </div>
   
  );
}

export default App;
