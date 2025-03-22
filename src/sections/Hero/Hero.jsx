import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import instaLight from '../../assets/twitter-light.svg'
import instaDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import JavaDeveloper_Resume from '../../assets/JavaDeveloper_Resume.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const{theme,toggleTheme}=useTheme();
    const themeIcon=theme==='light'?sun:moon;
    const instaIcon=theme==='light'?instaLight:instaDark;
    const githubIcon=theme==='light'?githubLight:githubDark;
    const linkedinIcon=theme==='light'?linkedinLight:linkedinDark;


  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="Profile picture of sai sudhakar"/>
            <img className={styles.colorMode} src={themeIcon} alt="color Theme icon" onClick={toggleTheme}  />
        </div>
        <div className={styles.info}>
            <h1>Sai Sudhakar <br/>Villa</h1>
            <h2>Full Stack Developer</h2>
            <span>
                <a href="https://instagram.com/" target="_blank">
                    <img src={instaIcon} alt="insta icon"/>
                </a>
                
                <a href="https://github.com/" target="_blank">
                    <img src={githubIcon} alt="github icon"/>
                </a>
                <a href="https://linkedin.com/" target="_blank">
                    <img src={linkedinIcon} alt="LinkedIn icon"/>
                </a>
                
            </span>
            <p className={styles.description}>I am a Full Stack Developer  building efficient and user-friendly applications.</p>
            <a href={JavaDeveloper_Resume} download>
                <button className='hover' >View My Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero