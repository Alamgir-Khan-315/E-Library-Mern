import React from "react";
import Admin from './Admin'
import Student from './Student'


const Home = (props) => {
 
  return (
    <div>
      <p className='text-2xl font-extrabold text-gray-900'>Welcome, {props.student ? props.student.name : "Guest"} 👋</p>
      { props.student.role === 'admin' ? <Admin student={props.student} /> : <Student /> }
    </div>
  );
};

export default Home;
