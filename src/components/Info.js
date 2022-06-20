import avatar from "../img/i.jpg"
import email from "../img/Mail.png"
import github from "../img/github-small-icon.png"

export default function Info() {
  return (
    <div className="info">
      <div className="info__img-box">
        <img src={avatar} alt="" className="info__img" />
      </div>
      <div className="info__info container">
        <h1 className="info__info-name">Varakin Kirill</h1>
        <h3 className="info__info-profession">Frontend Developer</h3>
        <a href="https://github.com/by-Biska" className="info__info-website">laurasmith.website</a>
        <div className="info__info-contact contact">
            <a className="contact__link" href="mailto:abc@example.com" id="email">
                <img src={email} alt="" className="contact__link-img" />
                Email
            </a>
            <a className="contact__link" href="mailto:abc@example.com" id="github">
                <img src={github} alt="" className="contact__link-img" />
                GitHub
            </a>
        </div>
      </div>
    </div>
  );
}
