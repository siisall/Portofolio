import iconcontroller from "../assets/iconcontroller.png"
import laptop from "../assets/laptop.png"

const About = () => {

    const stats = [
        { number: "3+", label: "Years Experience"},
        { number: "50+", label: "Project Completed"},
        { number: "20+", label: "Happy Clients"},
        { number: "24/7", label: "Dedicated Support"},
    ]

  return (
    <section id="about" className="min-h-screen flex items-center justify-center p-4 sm:p-4 lg:p-12 relative overflow-hidden select-none">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-6 relative z-10">
        <div
        data-aos="fade-right"
        data-aos-duration="800"
        className="w-full lg:w-[30%] flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <p className="text-sm lg:text-lg mb-2 font-bold text-blue-200 font-mono tracking-widest uppercase">
                Get To Know Me
            </p>
            <div className="flex items-center gap-2 sm:gap-3 mb-4">
                <img src={iconcontroller} alt="controller" className="w-8 h-8 sm:w-10 sm:h-10 shrink-0"/>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white font-mono whitespace-nowrap">
                    About <span className="text-blue-400">Me</span>
                </h2>
                <img src={iconcontroller} alt="controller" className="w-8 h-8 sm:w-10 sm:h-10 shrink-0"/>
            </div>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-md font-mono text-sm sm:text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum natus illo nulla eaque delectus nemo expedita eius. Facere, expedita vel?
            </p>
            <div className="grid grid-cols-2 gap-6 w-full max-w-sm lg:max-w-none">
                {stats.map((stat, index) => (
                    <div
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    key={index}
                    className="text-center lg:text-left">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400">
                            {stat.number}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-400 font-mono">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="w-full lg:w-[50%] flex justify-center order-1 lg:order-2 relative group">
            <div className="absolute inset-0 mix-blend-screen filter blur-3xl opacity-20" />
                <img src={laptop} alt="laptop" 
                className="w-4/5 sm:w-3/4 lg:w-[115%] lg:max-w-[75vw] lg:-translate-x-5 lg:-translate-y-8 h-auto object-contain drop-shadow-[0_0_30px_rgb(59,130,246,0.8)] transform group-hover:scale-103 transition-transform duration-500"/>
            </div>
            <div
            data-aos="fade-left"
            data-aos-duration="800"
            className="w-full lg:w-[30%] flex flex-col gap-4 sm:gap-6 order-3 max-w-md lg:max-w-none">

                <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-blue-500/30 transition-all duration-300">
                    <h3 className="text-lg sm:text-xl font-bold text-blue-400 font-mono mb-2">
                        My Philosophy
                    </h3>
                    <p className="text-gray-300 font-mono text-xs sm:text-sm leading-relaxed">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum maxime vero expedita iste 
                    </p>
                </div>
                <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-blue-500/30 transition-all duration-300">
                    <h3 className="text-lg sm:text-xl font-bold text-blue-400 font-mono mb-2">
                        My Philosophy
                    </h3>
                    <p className="text-gray-300 font-mono text-xs sm:text-sm leading-relaxed">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum maxime vero expedita iste 
                    </p>
                </div>

            </div>
        </div>
    </section>
  )
}

export default About