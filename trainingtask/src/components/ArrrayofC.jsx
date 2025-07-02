import Course from "./Course";
import React from 'react'

function ArrrayofC() {
    const courses = [
        {id:1 , name: "React", price: 1000},
        {id:2 , name: "JavaScript", price: 800},
        {id:3 , name: "Python", price: 1200},
        {id:4 , name: "Java", price: 900},
        {id:5 , name: "C++", price: 700}
    ]
  return (

    <>

    <h1>Course List</h1>
    {
        courses.map((i)=>(
             <Course key={i.id} course = {i} />
        ))
    }
    </>
  )
}

export default ArrrayofC


        
