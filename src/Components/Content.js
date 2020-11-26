import React from 'react'
import { Button } from './Button'
import './Content.css';
import '../App.css';

function Content() {
    return (
        <div className = "Content-container">
            <img src = "images/image3.jpg" alt = "vancouver"></img>
            <h1 className="display-4">Hi There, I'm Abhishek Pundir.</h1><br></br>
            <h3 className="display">Learning Full Stack Web Development</h3><br></br>
            <div className = "Content-btns">
                <Button className = "btns" buttonStyle = 'btn--outline' buttonSize = 'btn--large'>About Me </Button>
                <Button className = "btns" buttonStyle = 'btn--primary' buttonSize = 'btn--large'>Portfolio </Button>
            </div>
        </div>
    )
}

export default Content;
