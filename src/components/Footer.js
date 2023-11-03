import "./Footer.css";
import { useTheme } from "./ThemeContext";

export default function Footer() {
    const {theme} = useTheme();

    return (
        <footer
            style={{
                backgroundColor: (theme === "dark")
                    ? "rgb(0, 50, 150)"
                    : "rgb(0, 128, 255)",
                color: (theme === "dark") ? "#fff" : "#000"
            }}
        >
            <a
                href="https://arthurcaraujo.github.io/"
                style={{color: (theme === "dark") ? "#fff" : "#000"}}
            >
                Arthur C. Araújo
            </a> - {new Date().getFullYear()}
        </footer>
    )
}