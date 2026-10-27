import { useState } from "react"
import iconcontroller from "../assets/iconcontroller.png"
import iconcontact from "../assets/iconcontact.png"
import { Mail, MapPin, Phone, Send } from "lucide-react"

const Contact = () => {

    const [formData, setFormData] = useState({ name: "", email: "", message: "" })

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <section id="contact" className="py-16 px-6 overflow-hidden font-mono scroll-m-8">
            <div className="max-w-6xl mx-auto">
                <div data-aos="fade-up" data-aos-duration="800" className="text-center mb-2">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <img src={iconcontroller} alt="controller" className="h-10 w-10" />
                        <h2 className="text-4xl lg:text-5xl font-bold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Contact Me
                        </h2>
                        <img src={iconcontroller} alt="controller" className="h-10 w-10" />
                    </div>
                    <p className="text-gray-300">Get in touch with me</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div data-aos="fade-right" data-aos-duration="1000" className="lg:w-110 lg:h-120 w-full">
                        <img src={iconcontact} alt="contact" className="w-full drop-shadow-[0_0_10px_rgb(59,130,246,0.9)] invert" />
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1000" className="lg:w-1/2 w-full">
                        <form onSubmit={handleSubmit} className="space-y-5">

                            {/* Name */}
                            <input
                                data-aos="fade-up"
                                data-aos-delay="100"
                                data-aos-duration="600"
                                type="text"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) => setFormData(
                                    { ...formData, name: e.target.value }
                                )}
                                className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition"
                                required>
                            </input>

                            {/* Email */}
                            <input
                                data-aos="fade-up"
                                data-aos-delay="200"
                                data-aos-duration="600"
                                type="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={(e) => setFormData(
                                    { ...formData, email: e.target.value }
                                )}
                                className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition"
                                required>
                            </input>

                            {/* Message */}
                            <textarea
                                data-aos="fade-up"
                                data-aos-delay="300"
                                data-aos-duration="600"
                                rows="5"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={(e) => setFormData(
                                    { ...formData, message: e.target.value }
                                )}
                                className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition"
                                required>
                            </textarea>
                            <button
                                data-aos="fade-up"
                                data-aos-delay="400"
                                data-aos-duration="600"
                                className="w-full py-3 bg-linear-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-bold hover:shadow-lg transition-all flex items-center gap-2 justify-center">
                                <Send className="w-5 h-5" />
                                Send Message
                            </button>
                        </form>
                        <div className="mt-8 sm:flex-row sm:flex-wrap gap-4">

                            <div className="flex items-center gap-3 text-gray-300 mb-5">
                                <Mail className="w-5 h-5 text-blue-400" />
                                <span className="text-sm">faisallistianto1309@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300 mb-5">
                                <Phone className="w-5 h-5 text-blue-400" />
                                <span className="text-sm">+62 838 2904 5858</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300 mb-5">
                                <MapPin className="w-5 h-5 text-blue-400" />
                                <span className="text-sm">Kecamatan Lembang, Kabupaten Bandung Barat</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact