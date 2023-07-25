import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'


const StudentRead = () => {

    const {id}=useParams()

    const location = useLocation()
    const students = location.state
    
    const read=students.find((item)=>item.id===Number(id))
  return (
    <div
      style={{ height: "60dvh" }}
      className="container d-flex flex-column justify-content-center align-items-center"
    >
      <h1 className="m-2">Info about {read.name}</h1>
      <h4 className="m-2">Name : {read.name}</h4>
      <h4 className="m-2">Email : {read.email}</h4>
      <h4 className="m-2">MobileNo : {read.mobileNo}</h4>
      <Link to={"/students"}>
      <button className='btn mt-2 btn-success' >Go Back</button>
      </Link>
    </div>
  )
}

export default StudentRead