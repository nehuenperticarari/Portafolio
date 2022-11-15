import img1 from '../assets/appStock new product.png'
import img2 from '../assets/e-commerce header.png'
import img3 from '../assets/realState header.png'
import img4 from '../assets/web html y css.png'

const Projects = () => {
  return (
    <main id='projects' className='projects container'>

      <div className='subtitle'>
        <p>projects</p>
        <hr/>
      </div>

      <h2 className='projects__title'>Projects</h2>

      <div className='projects__grid'>

        <div className='project'>
          <h3 className='project__title'>stock products</h3>
          <p className='project__text'>This app is develop with html, js and Tailwindcss. The app is for stock control </p>
          <a target="_blank" href="https://github.com/nehuenperticarari/app-crud-js"><img className='project__img' src={img1} alt="project image" /></a>
   
        </div>

        <div className='project'>
          <h3 className='project__title'>e-commerce</h3>
          <p className='project__text'>This app is develop with React and Tailwindcss. The app is an e-commerce </p>
          <a target="_blank" href="https://github.com/nehuenperticarari/e-commerce"><img className='project__img' src={img2} alt="project image" /></a>
        </div>

        <div className='project'>
          <h3 className='project__title'>Real State app</h3>
          <p className='project__text'>This app is develop with React and scss. The app is an Real state page with blog</p>
          <a target="_blank" href="https://github.com/nehuenperticarari/Real-State-React"><img className='project__img' src={img3} alt="project image" /></a>
        </div>

        <div className='project'>
          <h3 className='project__title'>Delivery</h3>
          <p className='project__text'>This is only a template made with scss and html. Is a delivery app template.</p>
          <a target="_blank" href="https://github.com/nehuenperticarari/delivery"><img className='project__img' src={img4} alt="project image" /></a>
        </div>

      </div>
    </main>
  )
}

export default Projects