import vk from "../img/vk-icon.svg"
import github from "../img/github-icon.svg"
import telegram from "../img/telegram-icon.svg"

export default function Footer () {
    return (
        <footer className="footer container">
            <ul className="social__list">
                <li className="social__item">
                    <a href="https://vk.com/by_biska" className="social__item-link">
                        <img className="social__item-img" src={vk}/>
                    </a>
                </li>
                <li className="social__item">
                    <a href="https://github.com/by-Biska" className="social__item-link">
                        <img className="social__item-img" src={github}/>
                    </a>
                </li>
                <li className="social__item">
                    <a href="https://t.me/by_Biska" className="social__item-link">
                        <img className="social__item-img" src={telegram}/>
                    </a>
                </li>
            </ul>
        </footer>
    )
}