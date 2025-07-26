import React from 'react';
import { Target, Users, Award, Globe, Heart, Lightbulb } from 'lucide-react';
import subra from '../../assets/shubhra-mohanka.jpg';
import Gautom from '../../assets/gautam-mohanka.jpg';
import { useTheme } from '../../Components/Context/ThemeContext';

const About = () => {
  const { isDark } = useTheme();

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest quality in everything we do, from our test content to user experience."
    },
    {
      icon: Heart,
      title: "Student-Centric",
      description: "Every decision we make is focused on helping students achieve their career dreams."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously innovate our platform to provide cutting-edge assessment solutions."
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Making quality education and career opportunities accessible to students everywhere."
    }
  ];

  const team = [
    {
      name: "Mr. Gautam Mohanka",
      role: "Founder & CEO",
      image: Gautom,
      description: "Former IIT alumnus with 15 years of experience in EdTech industry."
    },
    {
      name: "Nidhi Mohanka",
      role: "Head of Content",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      description: "PhD in Education with expertise in creating assessment methodologies."
    },
    {
      name: "Shubhra Mohanka",
      role: "CTO",
      image: subra,
      description: "Technology leader with expertise in AI and machine learning applications."
    },
    {
      name: "Sneha Patel",
      role: "Head of Partnerships",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      description: "Building bridges between students and top companies across India."
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>

      {/* Hero Section */}
      <section className={`py-20 relative overflow-hidden ${isDark ? "bg-gradient-to-r from-black via-gray-900 to-black" : "bg-gradient-to-r from-yellow-50 via-white to-yellow-100"}`}>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            About <span className="text-yellow-500">Galo Score</span>
          </h1>
          <p className={`text-xl lg:text-3xl max-w-4xl mx-auto ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            Empowering students to unlock their potential and achieve their career aspirations through innovative assessment solutions
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Our <span className="text-yellow-500">Mission</span>
            </h2>
            <p className={`text-2xl lg:text-2xl leading-relaxed mb-8 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              At Galo Score, we believe that every student deserves the opportunity to showcase their true potential. Our mission is to bridge the gap between talent and opportunity by providing comprehensive, industry-standard assessment solutions that help students prepare for their dream careers.
            </p>
            <p className={`text-lg lg:text-xl leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Since our inception, we have helped over 50,000 students land their dream jobs at top companies, maintaining an impressive 95% success rate through our scientifically designed tests and personalized learning paths.
            </p>
          </div>
          <div>
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-8 lg:p-12 text-black shadow-lg">
              <div className="grid grid-cols-2 gap-6 text-center font-semibold">
                <div>
                  <div className="text-5xl lg:text-7xl font-bold mb-2">5K+</div>
                  <div className="text-base lg:text-lg">Students Placed</div>
                </div>
                <div>
                  <div className="text-5xl lg:text-7xl font-bold mb-2">95%</div>
                  <div className="text-base lg:text-lg">Success Rate</div>
                </div>
                <div>
                  <div className="text-5xl lg:text-7xl font-bold mb-2">50+</div>
                  <div className="text-base lg:text-lg">Companies</div>
                </div>
                <div>
                  <div className="text-5xl lg:text-7xl font-bold mb-2">1K+</div>
                  <div className="text-base lg:text-lg">Certificates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`${isDark ? "bg-gray-900" : "bg-yellow-50"} py-20`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-7xl font-bold mb-6">
              Our <span className="text-yellow-500">Values</span>
            </h2>
            <p className={`text-2xl lg:text-3xl ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className={`mb-6 inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 rounded-full transition-all duration-300 group-hover:scale-110 ${
                  isDark ? "bg-[rgba(245,158,11,0.1)] group-hover:bg-yellow-500" : "bg-yellow-100 group-hover:bg-yellow-400"
                }`}>
                  <value.icon className={`h-10 w-10 lg:h-12 lg:w-12 ${isDark ? "text-yellow-500 group-hover:text-black" : "text-yellow-600 group-hover:text-white"}`} />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">{value.title}</h3>
                <p className={`leading-relaxed text-base lg:text-xl ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Meet Our <span className="text-yellow-500">Team</span>
            </h2>
            <p className={`text-2xl lg:text-3xl ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              The passionate people behind Galo Score’s success
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-28 h-28 lg:w-32 lg:h-32 rounded-full mx-auto object-cover border-4 transition-colors duration-300 ${
                    isDark ? "border-gray-800 group-hover:border-yellow-500" : "border-gray-200 group-hover:border-yellow-400"
                  }`}
                />
                <h3 className="text-lg lg:text-xl font-bold text-yellow-500 mt-4">{member.name}</h3>
                <p className="font-semibold text-lg lg:text-xl mb-2">{member.role}</p>
                <p className={`text-sm lg:text-lg leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

