// import Link from 'next/link'
import Link from '../lib/Link'
import '../sass/main.scss';


const Header = () => (
    <div className="collapse navbar-collapse navigation">
        <ul className="nav justify-content-center">
            <li className="nav-item navigation__list">
                <Link activeClassName="active" href="/">
                    <a className="nav-link">home</a>
                </Link>
            </li>
            <li className="nav-item navigation__list">
                <Link activeClassName="active" href="/about">
                    <a className="nav-link">about <br/> me</a>
                </Link>
            </li>
            <li className="nav-item navigation__list">
                <Link activeClassName="active" href="/projects">
                    <a className="nav-link">projects</a>
                </Link>
            </li>
            <li className="nav-item navigation__list">
                <Link activeClassName="active" href="/contact">
                    <a className="nav-link">contact</a>
                </Link>
            </li>
        </ul>
    </div>
)

export default Header