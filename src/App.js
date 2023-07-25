import { useState } from "react"
import "./App.css"
import Content from "./Components/Content"
import Sidebar from "./Components/Sidebar"

function App() {

  const [classStyle, setClassStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  )

  return (
    <>
      <div id="wrapper">
        <Sidebar classStyle={classStyle} setClassStyle={setClassStyle} />
        <Content classStyle={classStyle} setClassStyle={setClassStyle} />
      </div>
    </>
  )
}

export default App
