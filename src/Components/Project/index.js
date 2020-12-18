import React from 'react'
import { ProjectContainer, ProjectH1, ProjectWrapper, ProjectCard, ProjectH2, ProjectP} from './ProjectElements'

const Project = () => {
    return (
        <ProjectContainer id= "portfolio">
            <ProjectH1>Projects</ProjectH1>
            <ProjectWrapper>
                <ProjectCard>
                    <ProjectH2>BC TOURISM</ProjectH2>
                    <ProjectP>This site is build with HTML and CSS only</ProjectP>
                </ProjectCard>
                <ProjectCard>
                    <ProjectH2>Food App</ProjectH2>
                    <ProjectP>This site is build with JavaScript mostly</ProjectP>
                </ProjectCard>
                <ProjectCard>
                    <ProjectH2>ElectroSparks</ProjectH2>
                    <ProjectP>This eCommerce website is frontend Project using HTML, CSS and JavaScript</ProjectP>
                </ProjectCard>
                <ProjectCard>
                    <ProjectH2>MovieDB App</ProjectH2>
                    <ProjectP>This site is build React framework having MovieDB API</ProjectP>
                </ProjectCard>
                <ProjectCard>
                    <ProjectH2>Better Buys</ProjectH2>
                    <ProjectP>This is an eCommerce website using ASP-NET C# </ProjectP>
                </ProjectCard>
            </ProjectWrapper>
        </ProjectContainer>
    )
}

export default Project
