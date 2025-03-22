import React from 'react'
import styles from './ProjectsStyles.module.css'
import AmazonClone_img from '../../assets/AmazonClone_img.png'
import image from '../../assets/Weather_img.png'
import JobApply_img from '../../assets/JobApply_img.png'
import KeyBoard_img from '../../assets/KeyBoard_img.png'

import ProjectCard from '../../common/ProjectCard';
function Projects() {
  return (
    <>
        <section id='projects' className= {styles.container}>
                <h1 className='sectionTitle'>Projects</h1>
                <div className={styles.projectsContainer}>
                    <ProjectCard 
                        src={AmazonClone_img} 
                        link="https://saisudhakar777.github.io/AmazonClone/"
                        h3="Amazon Clone"
                        p="Shopping Website"
                    />

                    <ProjectCard 
                        src={image} 
                        link="https://saisudhakar777.github.io/WeatherApp/"
                        h3="Weather App"
                        p="Calculating Weather details"
                    />
                    <ProjectCard 
                        src={JobApply_img} 
                        link="https://saisudhakar777.github.io/JobApplication/"
                        h3="Job Tracker App"
                        p="Tracking Job Applications"
                    />
                    <ProjectCard 
                        src={KeyBoard_img} 
                        link="https://saisudhakar777.github.io/WeatherApp/"
                        h3="Simple Keyboard"
                        p="Static keyboard layout"
                    />
                </div>
        </section>
    </>
  )
}

export default Projects;