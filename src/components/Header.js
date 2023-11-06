import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke, faDownLong } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeContext";
import websiteLogo from "../assets/website-logo.png";

export default function Header() {
    const [scrollDown, setScrollDown] = useState(true);
    const {theme, toggleTheme} = useTheme();

    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});

        const handleScrollButton = () => {
            (window.scrollY > 1000) ? setScrollDown(false) : setScrollDown(true);
        }

        window.addEventListener("scroll", handleScrollButton);

        return () => {
            window.removeEventListener("scroll", handleScrollButton);
        }
    }, []);


    function handleScrollToBottom() {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
        });
    }

    function handleScrollToTop() {
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    return (
        <header
            style={{
                backgroundColor: (theme === "dark")
                    ? "rgb(0, 50, 150)"
                    : "rgb(0, 128, 255)"
            }}
        >
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
                    icon={faDownLong}
                    id="arrow-icon"
                    onClick={scrollDown ? handleScrollToBottom : handleScrollToTop}
                    style={{
                        color: (theme === "dark") ? "#fff" : "#000",
                        transform: scrollDown ? "rotate(0deg)" : "rotate(180deg)",
                    }}
                    title={scrollDown ? "Scroll to bottom" : "Scroll to top"}
                />
                <FontAwesomeIcon
                    icon={faCircleHalfStroke}
                    id="dark-light-icon"
                    onClick={toggleTheme}
                    style={{
                        color: (theme === "dark") ? "#fff" : "#000",
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