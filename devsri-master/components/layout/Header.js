import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import ThemeSwitch from "../elements/ThemeSwitch"
export default function Header() {
    const router = useRouter()

    const [isToggled, setToggled] = useState(false)
    const handleToggle = () => setToggled(!isToggled)

    return (
        <>
            <header className="header-area">
                <div className="container">
                    <div className="gx-row d-flex align-items-center justify-content-between">
                        <Link href="/" className="logo">
                        <h3 style={{color:'#009900'}}> Savitha</h3>
                        </Link>
                        <nav className={isToggled ? "navbar active" : " navbar"}>
                            <ul className="menu">
                                <li className={router.pathname == "/" ? "active" : ""}><Link href="/">Home</Link></li>
                                <li className={router.pathname == "/about" ? "active" : ""}><Link href="/about">About</Link></li>
                                <li className={router.pathname == "/works" ? "active" : ""}><Link href="/works">Works</Link></li>
                                <li ><Link  href="#">Blog</Link></li>
                                <li className={router.pathname == "/contact" ? "active" : ""}><Link href="/contact">Contact</Link></li>
                            </ul>
                            <Link href="/contact" className="theme-btn">Let's Connect</Link>
                        </nav>
                        <Link href="/contact" className="theme-btn">Let's Connect</Link>
                        <div className={isToggled ? "show-menu active" : " show-menu"} onClick={handleToggle}>
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
