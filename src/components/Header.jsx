import { Menu } from "lucide-react"
const NAV_LINKS = [
    { name: "WORK", href: "#work" },
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#stack" },
    { name: "CONTACT", href: "#contact" },
];

export default function Header() {
    return (
        <header>
            <section className="header">

                <h1 className="logo"><a href="#">SZ.</a></h1>

                <nav className="nav-links">
                    {
                        NAV_LINKS.map((link) => (
                            <a key={link.name} href={link.href}>
                                {link.name}
                            </a>
                        ))
                    }
                </nav>
                <button className="menu-toggle">
                    <Menu strokeWidth={2.5}/>
                </button>
            </section>
        </header>
    )
}