import {FaSass} from 'react-icons/fa'
import {SiHtml5, SiCss3, SiJavascript, SiTailwindcss} from 'react-icons/si'
import {DiReact} from 'react-icons/di'
import {TbBrandNextjs} from 'react-icons/tb'
import image from '../assets/IMG_20220109_114931996_2.jpg'


const About = () => {
  return (
    <section id='about' className='about container'>
      <div className='subtitle'>
        <p>about</p>
        <hr/>
      </div>
      
      <h2 className='about__title'>Get a brief look at who I am and what I do. If you would like to know more about me and my interests, you can contact me.</h2>
      
      <div className='about__grid'>
        <div>
          <h3 className='about__sub-title'>Who am i</h3>
          <p className='about__text'>i am Nehuen Perticarari. I am 27 years old, I was born in Cordoba, Argentina and I'm a self-taught developer. </p>
          <p className='about__text'>I studied nutrition at the Catholic University of Cordoba , but the past year shifted my focus to frontend development, which I have developed a great passion for.</p>
          <p className='about__text'>I enjoy the constant change in the technologies used in the area and love diving into new frameworks and technologies.</p>
          <p className='about__text'>Spending time customizing, improving and tinkering with my work environment and tools is something I enjoy a lot, as it is something I use for many hours daily. It allows me to have it exactly as I desire.</p>
        </div>

        <img className='about__img' src={image} alt="personal img" />

      </div>

      <div className='about__footer'>
        <h3 className='about__footer-title'>Tech I enjoy to use.</h3>
        <div className='about__footer-img'>
          <SiHtml5 size={"4em"}/>
          <SiCss3 size={"4em"}/>
          <SiJavascript size={"4em"}/>
          <FaSass size={"4em"}/>
          <SiTailwindcss size={"4em"}/>
          <DiReact size={"4em"}/>
          <TbBrandNextjs size={"4em"}/>
        </div>
      </div>
      
    </section>
  )
}

export default About