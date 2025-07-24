import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Features from "../Home/Features";
import Footer from "../Home/Footer";
import HowItWorks from "../Home/HowItWorks";
import TestCategories from "../Home/TestCategories";
import { ArrowRight, Play, Star, Trophy, Users, Zap } from "lucide-react";
import About from '../Home/About'
import SuccessStories from "../Home/StorysectionPage";
import Certificates from "../Home/Certificate";
import { useTheme } from "../../Components/Context/ThemeContext";
import Contact from "../Home/Contact";
import Practice from '../../Pages/Home/Practice'


import {useNavigate, useLocation } from "react-router-dom";
import TestDetail from "./TestDetails";

export default function HomePage({section}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const practiceRef = useRef(null);
  const featuresRef = useRef(null);
  const certificatesRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
  if (section === "practice" && practiceRef.current) {
    practiceRef.current.scrollIntoView({ behavior: "smooth" });
  } else if (section === "features" && featuresRef.current) {
    featuresRef.current.scrollIntoView({ behavior: "smooth" });
  } else if (section === "certificates" && certificatesRef.current) {
    certificatesRef.current.scrollIntoView({ behavior: "smooth" });
  } else if (section === "about" && aboutRef.current) {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  }
}, [section]);


 useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  return (
    
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <Helmet>
        <title>GaloScore | Online Test Portal</title>
        <meta name="description" content="GaloScore is a free online test portal for students to practice subject-wise tests, get instant results, and track performance without sign-up." />
        <meta name="keywords" content="online test, student exams, GaloScore, free practice test, instant results" />
        <meta name="author" content="GaloScore Team" />
        <meta property="og:title" content="GaloScore - Free Online Test Portal for Students" />
        <meta property="og:description" content="Take tests, get instant results and track your performance!" />
        <meta property="og:image" content="/pwa-512x512.png" />
        <meta property="og:type" content="website" />
      </Helmet>

      

      {section === "features" && <Features />}
      {section === "practice" && <Practice />}
      {section === "certificates" && <Certificates />}
      {section === "about" && <About />}
      {section === "contact" && <Contact />}

      {/* Hero Section */}
      {!section && (
      <>
        <section className="bg-white dark:bg-black min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-52 h-52 bg-yellow-300 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 py-20 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center bg-black/10 dark:bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full mb-8 border border-black/20 dark:border-white/20">
                  <Trophy className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="font-medium">🎯 #1 Career Galo Score Platform</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                  Unlock Your
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 block">
                    Dream Career
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl">
                  Master professional assessments with AI-powered practice tests. Join 500,0+ students who've accelerated their careers through our comprehensive testing platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 mb-12">
                  <button className="inline-flex items-center justify-center rounded-full font-bold transition-colors bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg shadow-2xl hover:shadow-yellow-500/25">
                    <Play className="mr-3 h-6 w-6" />
                    Start Free Assessment
                  </button>
                  <button className="inline-flex items-center justify-center rounded-full border-2 border-black/30 dark:border-white/30 text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 backdrop-blur-lg px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg">
                    Watch Demo
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold mb-2">5K+</div>
                    <div className="text-gray-600 dark:text-gray-400">Active Users</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold mb-2">98%</div>
                    <div className="text-gray-600 dark:text-gray-400">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold mb-2">50+</div>
                    <div className="text-gray-600 dark:text-gray-400">Companies</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-lg border bg-black/5 dark:bg-white/10 text-black dark:text-white shadow-sm backdrop-blur-xl border-black/10 dark:border-white/20 p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-lg mr-4">
                      <Zap className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Assessment</h3>
                      <p className="text-gray-600 dark:text-gray-300">Personalized for your career</p>
                    </div>
                  </div>
                  <div className="p-6 pt-0 space-y-4 mb-6">
                    {[{
                      label: "Cognitive Skills",
                      value: 85,
                      color: "from-green-400 to-blue-500",
                      width: "w-16",
                      text: "text-green-400"
                    }, {
                      label: "Technical Knowledge",
                      value: 78,
                      color: "from-yellow-400 to-orange-500",
                      width: "w-14",
                      text: "text-yellow-400"
                    }, {
                      label: "Communication",
                      value: 92,
                      color: "from-purple-400 to-pink-500",
                      width: "w-18",
                      text: "text-purple-400"
                    }].map((item, i) => (
                    <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 p-4 bg-black/5 dark:bg-white/5 rounded-lg border border-black/10 dark:border-white/10"
                  >
                    <span className="text-base font-medium">{item.label}</span>
                    <div className="flex items-center">
                      <div className="w-20 h-2 bg-gray-400 rounded-full mr-3">
                        <div className={`h-2 ${item.width} bg-gradient-to-r ${item.color} rounded-full`} />
                      </div>
                      <span className={`${item.text} font-medium`}>{item.value}%</span>
                    </div>
                  </div>

                    ))}
                  </div>
                  <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-3 rounded-lg inline-flex items-center justify-center">
                    Continue Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-yellow-300 p-4 rounded-full shadow-xl">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-yellow-400 to-yellow-300 p-4 rounded-full shadow-xl">
                  <Users className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Features />
        {/* <Practice /> */}
        <TestCategories />
        <HowItWorks />
        <Certificates />
        <About />
        <Contact/>
        {/* <TestDetail /> */}

        < SuccessStories/>
        
     
     </>
    )}
     
     
  </div>
  
     
  );
}




