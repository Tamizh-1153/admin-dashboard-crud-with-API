import React, { useEffect, useState } from "react"

import TeacherAddList from "../Pages/TeacherAddList"
import { Link, useNavigate } from "react-router-dom"
import TeacherEditList from "../Pages/TeacherEditList"
import axios from "axios"


const TeacherListing = () => {
  const [teachers, setTeachers] = useState(null)
  let refresh = useNavigate()

  const fetchData = async () => {
    const resp = await axios.get(
      "https://64b7f71821b9aa6eb0795f33.mockapi.io/teachers"
    )
    setTeachers(resp.data)
  }

  useEffect(() => {
    fetchData()
  }, [setTeachers])

  console.log(teachers)

  const handleDelete = (teacher) => {
    const deletedTeacher = teachers.indexOf(teacher)
    axios.delete(
      `https://64b7f71821b9aa6eb0795f33.mockapi.io/teachers/${teacher.id}`
    )
    teachers.splice(deletedTeacher, 1)
    refresh("/teachers")
  }

  return (
    <div className="container">
      <div className="card w-100">
        <div className="card-title">
          <h2 className="text-center mx-4 mt-4 mb-1">Teachers</h2>
        </div>
        <div className="card-body">
          <TeacherAddList teachers={teachers} setTeachers={setTeachers} />
          <table
            style={{ width: "100%" }}
            className="table table-bordered table-hover align-middle table-responsive-sm my-3"
          >
            <thead className="bg-dark text-white">
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Mobile.No</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {teachers?.map((teacher) => (
                <tr key={teacher.id}>
                  <td className="align-content-center">{teacher.name}</td>
                  <td>{teacher.email}</td>
                  <td>{teacher.mobileNo}</td>
                  <td>
                    <Link to={`/teachers/Read/${teacher.id}`} state={teachers}>
                      <button className="btn btn-success">
                        <i className="fa-regular fa-eye"></i>
                      </button>
                    </Link>
                    <Link
                      to={`/teachers/EditList/${teacher.id}`}
                      state={teachers}
                    >
                      <button
                        className="btn btn-secondary m-1"
                        onClick={() => <TeacherEditList />}
                      >
                        Edit
                      </button>
                    </Link>

                    <button
                      className="btn btn-danger m-1"
                      onClick={() => handleDelete(teacher)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TeacherListing
