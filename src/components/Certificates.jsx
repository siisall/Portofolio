import { useState } from "react"
import iconcontroller from "../assets/iconcontroller.png"
import { Download, Eye, X } from "lucide-react"

const Certificates = () => {

    const [selectedCert, setSelectedCert] = useState(null)

    const certificates = [
        {
            id: 1,
            title: "Contoh 1",
            issuer: "Meta",
            date: "2026",
            skills: ["React", "Hooks", "Context API"],
            credential: "CR-12345"
        },
        {
            id: 1,
            title: "Contoh 1",
            issuer: "Meta",
            date: "2026",
            skills: ["React", "Hooks", "Context API"],
            credential: "CR-12345"
        },
        {
            id: 1,
            title: "Contoh 1",
            issuer: "Meta",
            date: "2026",
            skills: ["React", "Hooks", "Context API"],
            credential: "CR-12345"
        },
    ]

    return (
        <section id="certificates" className="py-20 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="text-center mb-16">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <img src={iconcontroller} alt="controller"
                            className="h-14 w-14 md:w-18 md:h-18 drop-shadow-[0_0_10px_rgb(59,130,246,0.8)]" />

                        <h2 className="text-3xl lg:text-5xl font-bold bg-linear-to-r from-cyan-400 to-blue-400 font-mono bg-clip-text text-transparent">
                            Certificates
                        </h2>

                        <img src={iconcontroller} alt="controller"
                            className=" w-14 h-14 md:w-18 md:h-18 drop-shadow-[0_0_10px_rgb(59,130,246,0.8)]" />
                    </div>

                    <p className="text-gray-300 mt-4 font-mono">
                        Professional Experience & Certificates
                    </p>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <div
                            key={cert.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                            data-aos-duration="800"
                            className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                            onClick={() => setSelectedCert(cert)}>
                            <div className="p-6 font-mono">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-4">
                                            {cert.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm">
                                            {cert.issuer}
                                        </p>
                                    </div>
                                    <span className="text-2xl font-bold text-blue-400">
                                        {cert.date}
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {cert.skills.map((skill, i) => (
                                        <span key={i}
                                            className="px-3 py-1 text-xs rounded-full bg-blue-500/50 text-blue-300 border border-blue-500/50">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2">
                                    <Eye className="h-4 w-4" />
                                    View Certificate
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {selectedCert && (
                    <div
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedCert(null)}>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="300"
                            className="bg-gray-800/95 rounded-2xl max-w-2xl w-full p-6 border border-blue-500/30"
                            onClick={(e) => e.stopPropagation()}>
                            <button onClick={() => setSelectedCert(null)}
                                className="float-right text-gray-400 hover:text-white">
                                <X className="w-6 h-6" />
                            </button>
                            <div className="clear-both">
                                <div className="flex items-center gap-2 mb-4">
                                    <img src={iconcontroller} alt="controller" className="w-8 h-8" />
                                    <h3 className="text-2xl font-bold text-white">
                                        {selectedCert.title}
                                    </h3>
                                </div>
                                <p className="text-blue-400 mb-4">
                                    {selectedCert.issuer} - {selectedCert.title}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {selectedCert.skills.map((skill, i) => (
                                        <span key={i}
                                            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-gray-300 mb-4">
                                    Credential ID: <span className="text-blue-400 font-mono">{selectedCert.credential}</span>
                                    <button className="w-full py-3 bg-linear-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                                        <Download className="w-5 h-5" />
                                        Verify Certificate
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Certificates