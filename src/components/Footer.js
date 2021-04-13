import './Footer.scss';
import SoicalIcons from './SocialIcons';
export default function Footer(){
  return(
    <>
      <div className="About">

        <h4 >
          About
        </h4>
        <ul>
          <li><a href="#"></a>Introducing</li>
          <li><a href="#"></a>Terms of service</li>
          <li><a href="#"></a>Privacy Policy</li>
        </ul>
      </div>

      <div className="Contact">
        <h4>
          Contact
        </h4>
        <p className="Contact__email">hello@dappywallet.com</p>
        <SoicalIcons/>
      </div>

      <div className="Newsletter">
        <h4>
          Newsletter
        </h4>
        <p className="Newsletter__text">
          Please enter your e-mail if want to receive updates
        </p>
        <form action="Newsletter">
          <input className="Newsletter__email" type="email" name="" id="email" placeholder="Your e-mail"/>
          <input className="Newsletter__button" type="button" value="Subscribe" placeholder="Subsctibe"/>
        </form>
        <address className="Newsletter__address">Designed by <a className="Newsletter__addressStorng" href="https://shakka.agency">Shakka.Agency</a> 🤙</address>
      </div>
    </>
  )
}