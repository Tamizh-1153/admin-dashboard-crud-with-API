import React from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import axios from "axios"

const TeacherEditList = () => {
  const { id } = useParams()

  const location = useLocation()
  const teachers = location.state
  const edit = teachers?.find((item) => item.id === id)

  let refresh = useNavigate()

  const handleUpdate = async(e) => {
    e.preventDefault()

    const name = e.target.elements.name.value
    const email = e.target.elements.email.value
    const mobileNo = e.target.elements.mobileNo.value
    const teacherUpload={name, email,mobileNo}

    await axios.put(`https://64b7f71821b9aa6eb0795f33.mockapi.io/teachers/${id}`, teacherUpload)
    refresh("/teachers")
  }

  return (
    <div>
      <form
        onSubmit={handleUpdate}
        className="d-flex flex-column align-items-center"
      >
        <input
          required
          style={{ width: "50%" }}
          className="form-control my-2 "
          type="text"
          name="name"
          defaultValue={edit.name}
        />
        <input
          required
          style={{ width: "50%" }}
          className="form-control my-2"
          type="text"
          name="email"
          defaultValue={edit.email}
        />
        <input
          required
          style={{ width: "50%" }}
          className="form-control my-2"
          type="tel"
          pattern="[0-9]{10}"
          name="mobileNo"
          defaultValue={edit.mobileNo}
        />
        <button type="submit" className="btn btn-primary py-1">
          Update
        </button>
      </form>
    </div>
  )
}

export default TeacherEditList
