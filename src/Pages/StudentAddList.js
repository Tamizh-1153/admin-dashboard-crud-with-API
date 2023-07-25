import axios from "axios"
import { useNavigate } from "react-router-dom"

const StudentAddList = ({students,setStudents}) => {
 
  const refresh = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const name = e.target.elements.name.value
    const email = e.target.elements.email.value
    const mobileNo = e.target.elements.mobileNo.value

    const newStudent = {
      name: name,
      email: email,
      mobileNo: mobileNo,
    }
    
    await axios.post(
      "https://64b7f71821b9aa6eb0795f33.mockapi.io/students",
      newStudent
    )
    setStudents([...students, newStudent])
    e.target.elements.name.value = null
    e.target.elements.email.value = null
    e.target.elements.mobileNo.value = null
    refresh("/students")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className=" d-flex flex-wrap flex-md-nowrap m-1 text-center"
    >
      <input
        required
        className="form-control mx-1 my-1 "
        type="text"
        name="name"
        placeholder="Enter Name"
      />
      <input
        required
        className="form-control mx-1 my-1"
        type="text"
        name="email"
        placeholder="Enter Email"
      />
      <input
        required
        className="form-control mx-1 my-1"
        type="tel"
        pattern="[0-9]{10}"
        name="mobileNo"
        placeholder="Enter Mobile number"
      />

      <button type="submit" className="btn btn-primary my-1 ">
        Add
      </button>
    </form>
  )
}

export default StudentAddList
