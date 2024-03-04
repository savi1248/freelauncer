import { useEffect, useState } from "react"

export default function ThemeSwitch() {
    const [togglETHeme, setTogglETHeme] = useState(
        () => JSON.parse(localStorage.getItem("togglETHeme")) || "light-theme"
    )
    useEffect(() => {
        localStorage.setItem("togglETHeme", JSON.stringify(togglETHeme))
        document.body.classList.add(togglETHeme)
        return () => {
            document.body.classList.remove(togglETHeme)
        }
    }, [togglETHeme])

    return (
        <>
            <nav className="switcher__tab"
                onClick={() => togglETHeme === "light-theme" ? setTogglETHeme("dark-theme") : setTogglETHeme("light-theme")
                }
            >
                <span className="switcher__btn light-mode">Light</span>
                <span className="switcher__btn dark-mode">Dark</span>
            </nav>
        </>
    )
}
