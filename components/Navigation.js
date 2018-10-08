// import Link from '../lib/Link';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import '../sass/main.scss';



const header2 =  (props) => (
    <nav className="navbar navbar-expand-lg navbar-light ">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse navigation" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 justify-content-center">
                <li className="nav-item navigation__list">
                    <Link activeClass="active" to="header" smooth={true} duration={500} hashSpy={true} spy={true}>
                        <a className="nav-link navigation__list-home text-pop-up-bottom" style={{color:props.navColor}}><span>home</span></a>
                    </Link>
                </li>
                <li className="nav-item navigation__list">
                <Link activeClass="active" to="about" smooth={true} duration={500} hashSpy={true} spy={true}>
                        <a className="nav-link" style={{color:props.navColor}}><span>about<br/>me</span></a>
                    </Link>
                </li>
                <li className="nav-item navigation__list">
                    <Link activeClass="active" to="projects" smooth={true} duration={500} hashSpy={true} spy={true}>
                        <a className="nav-link" style={{color:props.navColor}}><span>projects</span></a>
                    </Link>
                </li>
                <li className="nav-item navigation__list">
                    <Link activeClass="active" to="contact" smooth={true} duration={500} hashSpy={true} spy={true}>
                        <a className="nav-link" style={{color:props.navColor}}><span>contact</span></a>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
)



export default header2