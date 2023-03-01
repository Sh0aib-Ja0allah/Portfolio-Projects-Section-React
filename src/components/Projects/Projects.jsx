import React, {useState} from 'react';
import '../Projects/Projects.css';
import {ProjectsData} from "./ProjectsData.jsx";

import img from "../assets/senior.png";

function Projects() {

    const [counter, setCounter] = useState(0);
    const Length = ProjectsData.length;
    console.log(Length)

    return (
    <div className="Projects" id='projects'>
        <div className="ProjectsChild">
            <h1 className="ProjectsTitle">Portfolio</h1>
            {/* <div>{Length}</div> */}
        </div>
        <div className="ProjectsChild Project">
            <div className="leftSide ProjectsSubChild">
                <div className="projectTitleRow">
                    <div className="projectTitle">{ProjectsData[counter].title}</div>
                    <div id="index" className='tech'>Project - {ProjectsData[counter].index}</div>
                </div>
                <div className="ProjectDescription">{ProjectsData[counter].description}</div>
                <div className="projectTechRow">
                {ProjectsData[counter].technologies.map((projectTech, i) => (
                    <div className="tech">{projectTech}</div>
                ))}
                </div>
                <div className="projectDate">{ProjectsData[counter].date}</div>
                <div className="projectButtonsRow">

                    <button onClick={() => {
                            counter === 0 ? setCounter(Length - 1):
                            setCounter((Prev) => Prev - 1)
                        }} className="Button">Previous</button>

                    <a className="Button" href={ProjectsData[counter].button1Source}>{ProjectsData[counter].button1Text}</a>
                    <a className="Button" href={ProjectsData[counter].button2Source}>{ProjectsData[counter].button2Text}</a>
                    
                    <button onClick={() => {
                            counter === Length - 1 ? setCounter(0):
                            setCounter((Prev) => Prev + 1)
                    }} className="Button">Next</button>
                </div>
            </div>
            <div className="rightSide ProjectsSubChild">
                <img src={ProjectsData[counter].image} alt={ProjectsData[counter].alt} />
            </div>
        </div>
    </div>
    )
}

export default Projects