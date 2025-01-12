import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.svg";
import image from "../assets/login.png";
import { LuEyeClosed, LuEye } from "react-icons/lu";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
};

const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
      
        try {
          const response = await axios.post(`${API_BASE_URL}/api/user/adminLogin`, {
            email,
            password,
          });
      
          if (response.data.code === 200) {
            const token = response.data.body;
            sessionStorage.setItem("authToken", token);
            navigate("/dashboard");
          } else {
            setError(response.data.message || "Something went wrong");
          }
        } catch (err) {
          setError(err.response?.data?.message || "An error occurred during login");
        } finally {
          setLoading(false);
        }
      };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center h-screen bg-[#F8FAFC]"
        >
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="w-max p-6 bg-white flex flex-row gap-8 justify-center items-center px-9 py-16 border border-[#CBD5E1] rounded-[10px] shadow-md"
            >
                {/* Image Section */}
                <motion.div
                    variants={childVariants}
                    className="hidden lg:block w-[375px] 2xl:w-[600px] h-[412px] overflow-hidden"
                >
                    <img
                        src={image}
                        alt="login"
                        loading="lazy"
                        className="w-full h-full object-cover rounded-xl"
                    />
                </motion.div>

                {/* Login Form Section */}
                <motion.div
                    variants={childVariants}
                    className="flex flex-col w-[300px] md:w-[400px] 2xl:w-[500px]"
                >
                    <motion.div
                        variants={childVariants}
                        className="flex flex-col gap-3 items-center"
                    >
                        <img src={logo} width={70} height={70} alt="logo" />
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            Log in as Admin
                        </h2>
                    </motion.div>
                    <motion.form variants={childVariants} onSubmit={handleLogin}>
                        {/* Email Input */}
                        <motion.div variants={childVariants} className="mb-4">
                            <label className="block text-sm font-semibold text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </motion.div>

                        {/* Password Input */}
                        <motion.div
                            variants={childVariants}
                            className="relative mb-6"
                        >
                            <label className="block text-sm font-semibold text-gray-700">
                                Password
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute top-[2.2rem] right-3 text-slate-800 focus:outline-none"
                            >
                                {showPassword ? (
                                    <LuEye className="h-5 w-5 mt-1" />
                                ) : (
                                    <LuEyeClosed className="h-5 w-5 mt-1" />
                                )}
                            </button>
                        </motion.div>

                        {/* Submit Button */}
                        {loading ? (
                            <button
                                className="w-full px-4 py-2 text-white bg-blue-400 rounded-lg h-[40px] flex items-center justify-center"
                                disabled
                            >
                                <span className="loader"></span>
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                            >
                                Log In
                            </button>
                        )}

                        {/* Error Message */}
                        {error && (
                            <p className="text-sm text-red-500 mt-1.5 text-wrap">{error}</p>
                        )}
                    </motion.form>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Login;
