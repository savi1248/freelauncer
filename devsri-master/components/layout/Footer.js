import Link from "next/link"

export default function Footer() {
    return (
        <>
            <footer className="footer-area">
                <div className="container">
                    <div className="footer-content text-center">
                        <Link href="/" className="logo">
                        <h3 style={{color:'#009900'}}> Savitha</h3>
                        </Link>
                        <ul className="footer-menu">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/works">Works</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                        <p className="copyright">
                            © <span>Savitha</span> 2024
                        </p>
                    </div>
                </div>
            </footer>

        </>
    )
}
