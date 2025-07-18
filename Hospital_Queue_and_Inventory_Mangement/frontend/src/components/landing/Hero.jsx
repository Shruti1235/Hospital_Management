import { motion } from "framer-motion";
import { useNavigate } from "react-router";

export default function Hero() {
    const navigate = useNavigate();
    return (
        <section className="bg-accent py-20">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="md:w-1/2 mb-10 md:mb-0"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Providing an Exceptional Patient Experience
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                    Welcome, where exceptional patient experiences are our priority. With compassionate care, 
                    state-of-the-art failities, and a paient-centered approach, we're dedicated to ypur well-being. 
                    Trust us with your health and experience the difference.
                    </p>
                    <div className="flex space-x-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-600 transition-colors duration-200"
                            onClick={() => {
                                const auth = localStorage.getItem("authToken");
                                const role = localStorage.getItem("role");
                                if (auth) {
                                    if (
                                        role === "hospital" ||
                                        role === "subAdmin"
                                    ) {
                                        navigate("/hospital/dashboard");
                                    }else{
                                        navigate("/home");
                                    }
                                }else{
                                    navigate("/home ");
                                }
                            }}
                        >
                            Get Started
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition-colors duration-200"
                            onClick={()=>{
                                document.getElementById("about").scrollIntoView({
                                    behavior:'smooth'
                                })
                            }}
                        >
                            Learn More
                        </motion.button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="md:w-1/2"
                >
                    <img
                        src="https://www.appletechsoft.com/wp-content/uploads/2020/06/Hospital-Management-System.jpg"
                        alt="Hospital Queue Management System"
                        className="rounded-lg shadow-lg w-full h-full"
                    ></img>
                </motion.div>
            </div>
        </section>
    );
}
