import iconcontroller from "../assets/iconcontroller.png"
import iconskills from "../assets/iconskills.png"

const Skills = () => {

    const leftSkills = [
        { name: "React.js", level: 90 },
        { name: "Vue.js", level: 70 },
        { name: "Tailwind CSS", level: 100 }
    ]
    const rightSkills = [
        { name: "Node.js", level: 75 },
        { name: "MongoDB", level: 90 },
        { name: "Git/Github", level: 80 }
    ]

    return (
        <section id="skills" className="py-20 px-6 overflow-hidden font-mono">
            <div className="max-w-6xl mx-auto">
                <div
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <img src={iconcontroller} alt="controller" className="w-10 h-10" />
                        <h2 className="text-3xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            My Skills
                        </h2>
                        <img src={iconcontroller} alt="controller" className="w-10 h-10" />
                    </div>
                    <p className="text-gray-300">Technologies I Work With</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-6">

                    {/* Left Skills */}
                    <div
                    data-aos="fad-right"
                    data-aos-duration="800"
                    className="lg:w-1/3 w-full space-y-6">
                        {leftSkills.map((skill, index) => (
                            <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            data-aos-duration="600"
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-blue-500/50 transition hover:-translate-y-1">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-white font-bold text-lg">
                                        {skill.name}
                                    </span>
                                    <span className="text-blue-400 font-bold">
                                        {skill.level}%
                                    </span>
                                </div>
                                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-linear-to-r from-cyan-500 to-blue-500 rounded-full"
                                    style={{ width: `${skill.level}%`}}>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Image */}
                    <div
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    className="lg:h-60 lg:w-80 w-full lg:-translate-y-10">
                        <img src={iconskills} alt="skills" className="w-full object-contain drop-shadow-[0_0_10px_rgb(59,130,246,0.9)] invert"/>
                    </div>

                    {/* Right Skills */}
                    <div
                    data-aos="fad-right"
                    data-aos-duration="800"
                    className="lg:w-1/3 w-full space-y-6">
                        {rightSkills.map((skill, index) => (
                            <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            data-aos-duration="600"
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-blue-500/50 transition hover:-translate-y-1">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-white font-bold text-lg">
                                        {skill.name}
                                    </span>
                                    <span className="text-blue-400 font-bold">
                                        {skill.level}%
                                    </span>
                                </div>
                                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-linear-to-r from-cyan-500 to-blue-500 rounded-full"
                                    style={{ width: `${skill.level}%`}}>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills