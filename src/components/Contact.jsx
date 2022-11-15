import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';

const Contact = () => {
  return (
    <section id='contact' className='contact container'>
      <div className='subtitle'>
        <p>contact</p>
        <hr/>
      </div>
      
      <h2 className="contact__title">Contact:</h2>

      <div className='contact__grid'>

        <a target="_blank" className='contact__img' href="mailto:nehuenperticarari@gmail.com"><AiOutlineMail size={"4em"}/></a>

        <a target="_blank" className='contact__img' href="https://www.linkedin.com/in/nehuen-perticarari-ba3202203"><BsLinkedin size={"4em"}/></a>

        <a target="_blank" className='contact__img' href="https://api.whatsapp.com/send?phone=543546478941"><AiOutlineWhatsApp size={"4em"}/></a>

      </div>

    </section>
  )
}

export default Contact