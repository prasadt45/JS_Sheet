import React from 'react'

function Course({ course }) {
  return (
    <>
    {console.log(course)}
      <h2>{course.name}</h2>
      <p>Price: ${course.price}</p>
    </>
  )
}

export default Course
