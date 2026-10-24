import { useEffect, useState } from "react"
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa"
import { DownloadIcon } from "lucide-react"
import iconcontroller from "../assets/iconcontroller.png"
import cvdummy from "../assets/cvdummy.pdf"
import saya from "../assets/saya.png"
import TechStackBar from "./TechStackBar"

const Hero = () => {
    const [text, setText] = useState("")
    const [index, setIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    const words = ["I'm a Informatics Student", "I'm a Web Developer", "I'm a Software Engineer"]
    const typingSpeed = 130
    const deletingSpeed = 70
    const pauseTime = 2000

    useEffect(() => {
        const currentWord = words[index]

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentWord.substring(0, text.length + 1))

                if (text.length + 1 === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), pauseTime)
                }
            } else {
                setText(currentWord.substring(0, text.length - 1))

                if (text.length - 1 === 0) {
                    setIsDeleting(false)
                    setIndex((prev) => (prev + 1) % words.length)
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed)
        return () => clearTimeout(timeout)
    }, [text, isDeleting, index, words])

    const socialIcons = [
        { icon: FaTiktok, alt: "Tiktok", color: "#000000" },
        { icon: FaInstagram, alt: "Instagram", color: "#E1306C" },
        { icon: FaLinkedin, alt: "LinkedIn", color: "#0077B5" },
    ]
    return (
        <div className="relative overflow-hidden min-h-screen flex flex-col">
            <section id="home" data-aos="fade-up" data-aos-delay="250" className="body-font mt-6">
                <div className="container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-14 flex-col lg:flex-row items-center justify-between lg:mt-14 mt-14 overflow-hidden">
                    <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0">
                        <p className="title-font text-sm lg:text-lg mb-2 font-bold text-cyan-200 font-mono">
                            FAISAL LISTIANTO
                        </p>
                        <div className="flex items-center gap-3 justify-center lg:justify-start">
                            <img src={iconcontroller} alt="contoller" className="w-10 h-10 lg:h-13 lg:w-13" />
                            <h1 className="title-font text-2xl sm:text-4xl lg:text-5xl mb-2 font-bold text-white font-mono">
                                Hi, I'm Isal
                            </h1>
                            <img src={iconcontroller} alt="contoller" className="w-10 h-10 lg:h-13 lg:w-13" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-6 font-semibold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-400 font-mono whitespace-nowrap">
                            {text}
                            <span className="animate-pulse text-blue-400">|</span>
                        </h2>
                        <p className="mb-8 sm:mb-10 leading-relaxed max-w-md lg:max-w-lg text-gray-300 font-mono"
                            data-aos="fade-up"
                            data-aos-delay="600">
                            I'm an Informatics Student with a strong interest in Web Development and Software Engineering. I enjoy building Web Applications, exploring new technologies, and continuosly improving my skills through hands on project.
                        </p>
                        <div className="w-full pt-2 sm:pt-4">
                            <div
                                className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 sm:gap-6"
                                data-aos="fade-up"
                                data-aos-delay="700">
                                <a href={cvdummy} download className="w-full sm:w-auto">
                                    <button className="w-full sm:w-auto inline-flex items-center justify-center text-white bg-linear-to-r from-cyan-500 to-blue-500 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(59,130,246,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform font-mono cursor-pointer">
                                        <DownloadIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                        Download CV
                                    </button>
                                </a>
                                <div className="flex gap-3 sm:gap-4">
                                    {socialIcons.map((social, index) => {
                                        const Icon = social.icon
                                        return (
                                            <div
                                                key={index}
                                                className="transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                                                <div
                                                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
                                                    style={{ backgroundColor: social.color }}>
                                                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full max-w-md lg:max-w-lg mt-2 lg:mt-0 flex justify-center"
                        data-aos="fade-left"
                        data-aos-delay="400">
                        <div className="relative w-4/5 sm:w-3/4 lg:w-full">
                            <div className="relative overflow-hidden">
                                <img src={saya} alt="Foto saya"
                                    className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-500 drop-shadow-[0_0_5px_rgb(59,130,246,0.8)]" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute -top-20 -left-20 w-40 h-40 sm:w-64 sm:h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacicy-20 animate-pulse delay-1000 hidden sm:block">

                </div>
            </section>
            <TechStackBar />
        </div>
    )
}

export default Hero