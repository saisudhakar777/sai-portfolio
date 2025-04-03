import React from 'react'
import styles from './SkillsStyles.module.css';
import checkMarkLight from '../../assets/checkmark-light.svg'
import checkMarkDark from '../../assets/checkmark-dark.svg'

import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';
function Skills() {
    const { theme } = useTheme();
    const checkMarkIcon = theme === 'light' ? checkMarkLight : checkMarkDark;
  
  return (
    <>
        <section id="skills" className={styles.container}>
            <h1 className='sectionTitle'>Skills</h1>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Java"/>
                <SkillList src={checkMarkIcon} skill="C"/>
                <SkillList src={checkMarkIcon} skill="Python"/>
            </div>
            
            <hr/>

            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Spring"/>
                <SkillList src={checkMarkIcon} skill="SpringBoot"/>
                <SkillList src={checkMarkIcon} skill="SpringMVC"/>
                <SkillList src={checkMarkIcon} skill="Hibernate"/>
            </div>
           
            <hr/>
            
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Reactjs"/>
                <SkillList src={checkMarkIcon} skill="HTML"/>
                <SkillList src={checkMarkIcon} skill="CSS"/>
                <SkillList src={checkMarkIcon} skill="Javascript"/>
            </div>
           
            <hr/>
            
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="MySql"/>
                <SkillList src={checkMarkIcon} skill="MongoDB"/>
                <SkillList src={checkMarkIcon} skill="Maven"/>
                <SkillList src={checkMarkIcon} skill="Git"/>
                <SkillList src={checkMarkIcon} skill="Github"/>
                <SkillList src={checkMarkIcon} skill="Vscode"/>
                <SkillList src={checkMarkIcon} skill="Eclipse"/>


                
            </div>
            
            

        </section>
    </>
)
}

export default Skills