import logo from "../assets/cafe.png"

//TODO traducir al español

const Header = () => {
  return (
    <header id="header" className='header'>
      <div className="header__content">
        <a href="/#header"><img className="header__logo" src={logo} alt="logo icon" /></a>

        <div className="header__flex container">

          <h1 id="home" className="header__title">Nehuen Perticarari <hr/><span className="header__span">Front-end Developer</span></h1>

          <nav className="header__bar">
              <a href='/#projects'>Projects</a>
              <a href='/#about'>About</a>
              <a href='/#contact'>Contact</a>
          </nav>
        </div>

      </div>

    </header>
  )
}

export default Header