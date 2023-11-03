import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "./ThemeContext";
import websiteLogo from "../assets/website-logo.png";

export default function Header() {
    const {theme, toggleTheme} = useTheme();

    return (
        <header style={{
                    backgroundColor: (theme === "dark")
                        ? "rgb(0, 50, 150)"
                        : "rgb(0, 128, 255)"
        }}>
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
                    onClick={toggleTheme}
                    style={{
                        color: (theme === "dark") ? "#000" : "#fff",
                        transform: (theme === "dark")
                                        ? "rotate(180deg)"
                                        : "rotate(0deg)",
                    }}
                    title="Toggle dark/light mode"
                />
            </nav>
        </header>
    )
}