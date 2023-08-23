import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './LandingPage'
import Home from './Home'
import SearchInfo from './SearchInfo'
import PersonalInfo from './PersonalInfo'
import ProfessionalInfo from './ProfessionalInfo'
import EducationalInfo from './EducationalInfo'
import MediaFilesInfo from './MediaFilesInfo'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='' element={<LandingPage/>}/> 
                <Route path='/home' element={<Home/>}/> 
                <Route path='/search/:id' element={<SearchInfo/>}/> 
                <Route path='/personalinfo' element={<PersonalInfo/>}/> 
                <Route path='/educationinfo' element={<EducationalInfo/>}/> 
                <Route path='/professionalinfo' element={<ProfessionalInfo/>}/> 
                <Route path='/mediafileinfo' element={<MediaFilesInfo/>}/> 
            </Routes>
        </BrowserRouter>
    )
}
