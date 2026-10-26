import { useState } from "react"
import edu from "../assets/education.png"
import iconcontroller from "../assets/iconcontroller.png"
import { Award, Calendar, X } from "lucide-react"

const Education = () => {

    const [selected, setSelected] = useState(null)

    const education = [
        {
            id: 1,
            degree: "Lorem ipsum dolor sit",
            institution: "Sekolah Dasar",
            year: "2021 - 2026",
            grade: "4.0 GPA",
            desc: "consectetur adipisicing elit. Vel, vitae.",
            courses: ["React", "CSS", "HTML"]
        },
        {
            id: 2,
            degree: "Lorem ipsum dolor sit",
            institution: "Sekolah Dasar",
            year: "2021 - 2026",
            grade: "4.0 GPA",
            desc: "consectetur adipisicing elit. Vel, vitae.",
            courses: ["React", "CSS", "HTML"]
        },
        {
            id: 3,
            degree: "Lorem ipsum dolor sit",
            institution: "Sekolah Dasar",
            year: "2021 - 2026",
            grade: "4.0 GPA",
            desc: "consectetur adipisicing elit. Vel, vitae.",
            courses: ["React", "CSS", "HTML"]
        },
    ]

    return (
        <section id="education" className="py-20 px-6 font-mono overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                <img
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    src={edu}
                    alt="education"
                    className="lg:w-110 lg:h-130 w-full rounded-2xl object-contain drop-shadow-[0_0_20px_rgb(59,130,246,0.8)]" />
                <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className="lg:w-1/2">
                    <div className="flex items-center gap-3 mb-4">
                        <img src={iconcontroller} alt="controller" className="w-10 h-10" />
                        <h2 className="text-4xl lg:text-5xl font-bold bg-linear-to-r from-cyan-400 to to-blue-400 bg-clip-text text-transparent">
                            Education
                        </h2>
                        <img src={iconcontroller} alt="controller" className="w-10 h-10" />
                    </div>
                    <p className="text-gray-300 mb-8">
                        My Academis Journey
                    </p>
                    <div className="space-y-4">
                        {education.map((edu, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
                                data-aos-duration="600"
                                className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 transition-all hover:border-blue-500/50 hover:translate-y-1 cursor-pointer"
                                onClick={() => setSelected(edu)}>
                                <h3 className="text-xl font-bold text-white mb-1">
                                    {edu.degree}
                                </h3>
                                <p className="text-blue-400 text-sm mb-2">
                                    {edu.institution}
                                </p>
                                <div className="flex gap-3 text-sm">
                                    <span className="flex items-center gap-1 text-gray-400">
                                        <Calendar className="w-3 h-3" />
                                        {edu.year}
                                    </span>
                                    <span className="flex items-center gap-1 text-gray-300">
                                        <Award className="w-3 h-3" />
                                        {edu.grade}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {selected && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
                    onClick={() => setSelected(null)}>
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="300"
                        className="bg-gray-800/95 rounded-2xl max-w-2xl w-full p-6 border border-blue-500/30"
                        onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => setSelected(null)}
                            className="float-right text-gray-400 hover:text-white">
                            <X className="w-6 h-6" />
                        </button>
                        <div className="clear-both">
                            <div className="flex items-center gap-2 mb-4">
                                <img src={iconcontroller} alt="controller" className="w-8 h-8" />
                                <h3 className="text-2xl font-bold text-white">
                                    {selected.degree}
                                </h3>
                            </div>
                            <p className="text-blue-400 mb-4">
                                {selected.institution} - {selected.year}
                            </p>
                            <p className="text-blue-300 mb-4">
                                {selected.desc}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {selected.courses.map((course, i) => (
                                    <span key={i}
                                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                                        {course}
                                    </span>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Education