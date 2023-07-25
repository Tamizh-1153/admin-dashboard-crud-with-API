import React from "react"
import Navbar from "./Navbar"
import PageContent from "./PageContent"
import Footer from "./Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Buttons from "./Buttons"
import Cards from "./Cards"
import Color from "./Color"
import Borders from "./Borders"
import Animations from "./Animations"
import Other from "./Other"
import Charts from "./Charts"
import Tables from "./Tables"
import StudentListing from "./StudentListing"
import TeacherListing from "./TeacherListing"
import StudentEditList from "../Pages/StudentEditList"
import { createContext, useContext } from "react"
import StudentRead from "../Pages/StudentRead"
import TeacherEditList from "../Pages/TeacherEditList"
import TeacherRead from "../Pages/TeacherRead"

export const UserContext = createContext()

export const useUserContext = () => useContext(UserContext)

const Content = ({ classStyle, setClassStyle }) => {
  
  return (
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <Navbar classStyle={classStyle} setClassStyle={setClassStyle} />
        
          <BrowserRouter>
            <Routes>
              <Route path="/" Component={PageContent} />
              <Route path="/buttons" Component={Buttons} />
              <Route path="/cards" Component={Cards} />
              <Route path="/colors" Component={Color} />
              <Route path="/borders" Component={Borders} />
              <Route path="/animations" Component={Animations} />
              <Route path="/other" Component={Other} />
              <Route path="/charts" Component={Charts} />
              <Route path="/tables" Component={Tables} />
              <Route path="/students" Component={StudentListing} />
              <Route path='/students/EditList/:id' Component={StudentEditList } />
              <Route path='/students/Read/:id' Component={StudentRead} />
              <Route path="/teachers" Component={TeacherListing} />
              <Route path='/teachers/EditList/:id' Component={TeacherEditList} />
              <Route path='/teachers/Read/:id' Component={TeacherRead} />
            </Routes>
          </BrowserRouter>
        <Footer />
      </div>
    </div>
  )
}

export default Content
