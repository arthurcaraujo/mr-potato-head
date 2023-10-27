import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import websiteLogo from "../assets/website-logo.png";

export default function Header() {
    return (
        <header>
            <nav>
                <a
                    href="https://arthurcaraujo.github.io/"
                    id="main-website-link"
                >
                    <img alt="Website logo" src={websiteLogo} />
                    <span id="logo-first-name">ARTHUR</span>
                    <span id="logo-last-name">C. ARAÚJO</span>
                </a>
                <FontAwesomeIcon
                    icon={faCircleHalfStroke}
                    id="dark-light-icon"
                />
            </nav>
        </header>
    )
}