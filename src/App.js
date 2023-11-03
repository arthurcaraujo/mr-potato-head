import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useTheme } from "./components/ThemeContext";

export default function App() {
    const {theme} = useTheme();

    const bodyTag = document.body;

    useEffect(() => {
        theme === "dark"
            ? (bodyTag.style.backgroundColor = "#111")
                && (bodyTag.style.color = "#fff")
            : (bodyTag.style.backgroundColor = "rgb(255, 228, 196)")
                && (bodyTag.style.color = "#000")
    }, [theme]);

    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}