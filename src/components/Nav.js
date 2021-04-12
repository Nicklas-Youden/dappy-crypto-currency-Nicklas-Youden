import './Nav.scss';
import SoicalIcons from './SocialIcons';
export default function Nav(){
  return(
    <header className="Header">
      <a href="!"><img className="Header__image" src="./images/dappy.png" alt=""/></a>
      <nav className="HeaderNav">
        <ul className="HeaderNav__navList">
          <li><a href="!">How it works</a></li>
          <li><a href="!">Blog</a></li>
          <li><a href="!">Support</a></li>
        </ul>
      </nav>
      <SoicalIcons/>
    </header>
    
  )
}