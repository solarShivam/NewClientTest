import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Code, Clock } from "lucide-react";
import { useTheme } from "../../Components/Context/ThemeContext";
import { Helmet } from "react-helmet-async";
import AccordionItem from '../../Components/Common/Accordian'
import { IoPerson    } from "react-icons/io5";
import { IoIosStarHalf } from "react-icons/io";
import { FaBuilding } from "react-icons/fa";

const Contact = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className={`min-h-screen ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
      <Helmet>
        <title>Contact Us | TestPortal</title>
        <meta name="description" content="Contact TestPortal for queries or support regarding assessments and certification." />
      </Helmet>

      {/* Header Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Get In </span>
            <span className="text-yellow-400">Touch</span>
          </h1>
          <p className={`text-xl ${isDark ? "text-gray-300 "  : " text-black"} max-w-3xl mx-auto`}>
            Have questions about our test portal? Need support with your certification journey? 
            We're here to help you succeed.
          </p>
        </div>
      </section>

      {/* contact form section  */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-full mx-auto">
        {/* Grid for Form and Contact Info + FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:px-14">
          {/* Contact Form */}
          <div
            className={`rounded-lg border p-8 shadow-md self-start ${
              isDark
                ? "border-yellow-500/20 bg-gradient-to-b from-gray-900 to-black"
                : "border-yellow-300/20 bg-yellow-50"
            }`}
          >
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    className={`block ${
                      isDark ? "text-yellow-400" : "text-black"
                    } mb-2`}
                  >
                    Name
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className={`w-full h-12 px-3 py-2 rounded-md border placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                      isDark
                        ? "bg-gray-900 text-white"
                        : "bg-white text-black border-gray-400"
                    }`}
                  />
                </div>
                <div>
                  <label
                    className={`block ${
                      isDark ? "text-yellow-400" : "text-black"
                    } mb-2`}
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className={`w-full h-12 px-4 py-2 rounded-md border placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                      isDark
                        ? "bg-gray-900 text-white"
                        : "bg-white text-black border-gray-400"
                    }`}
                  />
                </div>
              </div>
              <div>
                <label
                  className={`block ${
                    isDark ? "text-yellow-400" : "text-black"
                  } mb-2`}
                >
                  Subject
                </label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className={`w-full h-12 px-3 py-2 rounded-md border placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                    isDark
                      ? "bg-gray-900 text-white"
                      : "bg-white text-black border-gray-400"
                  }`}
                />
              </div>
              <div>
                <label
                  className={`block ${
                    isDark ? "text-yellow-400" : "text-black"
                  } mb-2`}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more..."
                  rows={7}
                  required
                  className={`w-full px-3 py-2 rounded-md border placeholder:text-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                    isDark
                      ? "bg-gray-900 text-white"
                      : "bg-white text-black border-gray-400"
                  }`}
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-4 py-3 rounded-md font-semibold text-lg transition-colors bg-yellow-500 hover:bg-yellow-600 text-black"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Cards + FAQ */}
          <div className="flex flex-col space-y-8">
            {/* Contact Info Cards */}
            <div className="space-y-8">
              {[Mail, Phone, MapPin, Clock].map((Icon, index) => (
                <div
                  key={index}
                  className={`rounded-lg border p-8 shadow-md flex items-center space-x-4 ${
                    isDark
                      ? "border-yellow-500/20 bg-gradient-to-b from-gray-900 to-black"
                      : "border-yellow-300/20 bg-yellow-50"
                  }`}
                >
                  <div className="w-14 h-14 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <Icon className="text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      {index === 0
                        ? "Email Us"
                        : index === 1
                        ? "Call Us"
                        : index === 2
                        ? "Visit Us"
                        : "Support Hours"}
                    </h3>
                    <p className="text-gray-400">
                      {index === 0
                        ? "support@testportal.com"
                        : index === 1
                        ? "+1 (555) 123-4567"
                        : index === 2
                        ? "123 Tech Street, Silicon Valley, CA 94105"
                        : "Mon–Fri: 9AM–6PM PST"}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div
              className={`rounded-lg border p-8 shadow-xl ${
                isDark
                  ? "border-yellow-500/20 bg-gradient-to-b from-gray-900 to-black"
                  : "border-gray-400 bg-yellow-50"
              }`}
            >
              <h3 className="text-xl font-bold text-yellow-500 mb-4">
                Quick Answers
              </h3>
              <div className="space-y-4">
                <div>
                  <p className={`font-semibold text-lg ${isDark ? "text-white" : "text-black"}`}>
                    How do I register for tests?
                  </p>
                  <p className="text-gray-400 text-base">
                    Simply create an account and browse our test catalog.
                  </p>
                </div>
                <div>
                  <p className={`font-semibold text-lg ${isDark ? "text-white" : "text-black"}`}>
                    Are practice tests free?
                  </p>
                  <p className="text-gray-400 text-base">
                    Yes, we offer many free practice questions and sample tests.
                  </p>
                </div>
                <div>
                  <p className={`font-semibold text-lg ${isDark ? "text-white" : "text-black"}`}>
                    How long are certificates valid?
                  </p>
                  <p className="text-gray-400 text-base">
                    Our certificates are valid for 2 years from issue date.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* frequently ask question section  */}
      <section className={`py-16 px-4 ${isDark ? "bg-black/80" : "bg-yellow-50"}`}>
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-yellow-400">Questions</span>
          </h2>
        </div>
        <div className="flex flex-col gap-4 max-w-7xl w-full mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          {[
            {
              question: "How do companies access test results?",
              answer:
                "Companies can view candidate test scores and certificates through our partner dashboard.",
            },
            {
              question: "Are the certificates industry-recognized?",
              answer:
                "Yes, our certificates are recognized by 500+ partner companies.",
            },
            {
              question: "Can I retake tests?",
              answer: "Yes, you can retake tests after a 30-day waiting period.",
            },
            {
              question: "How long are certificates valid?",
              answer:
                "Certificates are valid for 2 years from issuance and renewable through reassessment.",
            },
          ].map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isDark={isDark}
            />
          ))}
        </div>
      </section>

       {/* launch section  */}
      <section className={`w-full py-16 px-4 ${isDark ? "bg-black text-white" : "bg-yellow-200 text-black"}`}>
      <div className="max-w-7xl mx-auto text-center space-y-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Launch Your Career with <span className="text-yellow-500">GaloScore</span>: The Smart Assessment Platform
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div
      className={`rounded-2xl border p-6 shadow-md flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg ${
        isDark ? "border-yellow-500/20 bg-gray-900" : "border-yellow-300/30 bg-white"
      }`}
    >
      <IoPerson className="text-yellow-500 w-14 h-14 mb-4" />
      <p className="text-2xl font-bold text-yellow-500">4,000+</p>
      <p className={`text-lg text-center ${isDark ? "text-gray-300" : "text-gray-600"}`}>
        Students have taken tests to advance their careers
      </p>
    </div>



          <div
      className={`rounded-2xl border p-6 shadow-md flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg ${
        isDark ? "border-yellow-500/20 bg-gray-900" : "border-yellow-300/30 bg-white"
      }`}
    >
      <FaBuilding className="text-yellow-500 w-12 h-12 mb-4" />
      <p className="text-2xl font-bold text-yellow-500">40+</p>
      <p className={`text-lg text-center ${isDark ? "text-gray-300" : "text-gray-600"}`}>
        Companies partnered to hire verified talent
      </p>
    </div>

    {/* Card 3 */}
    <div
      className={`rounded-2xl border p-6 shadow-md flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg ${
        isDark ? "border-yellow-500/20 bg-gray-900" : "border-yellow-300/30 bg-white"
      }`}
    >
      <IoIosStarHalf className="text-yellow-500 w-12 h-12 mb-4" />
      <p className="text-2xl font-bold text-yellow-500">4.8/5</p>
      <p className={`text-lg text-center ${isDark ? "text-gray-300" : "text-gray-600"}`}>
        Average candidate rating on GaloScore assessments
      </p>
    </div>
        </div>

        <button
          className="mt-8 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-md transition-colors text-lg"
        >
          Get Started with GaloScore
        </button>
      </div>
      </section>

    </div>
  );
};

export default Contact;



