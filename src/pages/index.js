import React, {useState} from 'react'
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import InfoSection from '../Components/InfoSection';
import { homeObjOne } from '../Components/InfoSection/Data';
import Project from '../Components/Project';
import Contact from '../Components/Contact';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
         <Sidebar isOpen={isOpen} toggle = {toggle}/>
         <Navbar toggle= {toggle}/>   
         <HeroSection />
         <InfoSection {...homeObjOne}/>
         <Project />
         <Contact />
        </>
    )
}

export default Home
