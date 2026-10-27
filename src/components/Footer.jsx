import iconcontroller from "../assets/iconcontroller.png"

const Footer = () => {
    const year = new Date().getFullYear()
    const links = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Project", href: "#project" },
        { name: "Contact", href: "#contact" },
    ]

    return (
        <footer className="border-t border-white/10 bg-gray-950/30 px-6 py-8 font-mono">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
                <a href="#home" className="flex items-center gap-3">
                    <img src={iconcontroller} alt="" className="h-8 w-8" />
                    <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-lg font-bold text-transparent">
                        Faisal Listianto
                    </span>
                </a>

                <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm text-gray-300 transition hover:text-cyan-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <p className="text-center text-xs text-gray-400 sm:text-right">
                    © {year} Faisal Listianto
                </p>
            </div>
        </footer>
    )
}

export default Footer
