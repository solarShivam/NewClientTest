// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Mail, Phone, MapPin, Send, Code, Clock } from "lucide-react";

// // Toast replacement
// const useToast = () => {
//   return {
//     toast: ({ title, description }) => alert(`${title}\n\n${description}`),
//   };
// };

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const { toast } = useToast();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     toast({
//       title: "Message Sent!",
//       description: "We'll get back to you within 24 hours.",
//     });
//     setFormData({ name: "", email: "", subject: "", message: "" });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
//       {/* Navbar */}
//       <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-yellow-500/20">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//           <Link to="/" className="flex items-center space-x-2">
//             <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
//               <Code className="w-6 h-6 text-black" />
//             </div>
//             <span className="text-2xl font-bold text-white">TestPortal</span>
//           </Link>
//           <div className="hidden md:flex space-x-6">
//             <Link to="/" className="text-gray-300 hover:text-yellow-400">Home</Link>
//             <Link to="/explore-programs" className="text-gray-300 hover:text-yellow-400">Programs</Link>
//             <Link to="/contact" className="text-yellow-400">Contact</Link>
//           </div>
//           <button className="inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold text-sm transition-colors bg-yellow-500 hover:bg-yellow-600 text-black">
//             Sign In
//           </button>
//         </div>
//       </nav>

//       {/* Header */}
//       <section className="py-16 px-4 text-center">
//         <h1 className="text-5xl md:text-6xl font-bold mb-6">
//           Get In <span className="text-yellow-400">Touch</span>
//         </h1>
//         <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//           Have questions about our test portal? Need support with your certification journey? We're here to help.
//         </p>
//       </section>

//       {/* Form & Info */}
//       <section className="py-12 px-4 max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <div className="rounded-lg border border-yellow-500/20 bg-gradient-to-b from-gray-900 to-black p-8 shadow-md">
//             <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-yellow-400 mb-2">Name</label>
//                   <input
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Your full name"
//                     required
//                     className="w-full h-10 px-3 py-2 rounded-md border bg-gray-900 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-yellow-400 mb-2">Email</label>
//                   <input
//                     name="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="your.email@example.com"
//                     required
//                     className="w-full h-10 px-3 py-2 rounded-md border bg-gray-900 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-yellow-400 mb-2">Subject</label>
//                 <input
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   placeholder="What's this about?"
//                   required
//                   className="w-full h-10 px-3 py-2 rounded-md border bg-gray-900 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-yellow-400 mb-2">Message</label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Tell us more..."
//                   rows={6}
//                   required
//                   className="w-full min-h-[100px] px-3 py-2 rounded-md border bg-gray-900 text-white placeholder:text-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full inline-flex items-center justify-center px-4 py-3 rounded-md font-semibold text-lg transition-colors bg-yellow-500 hover:bg-yellow-600 text-black"
//               >
//                 <Send className="w-5 h-5 mr-2" />
//                 Send Message
//               </button>
//             </form>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-8">
//             {[
//               {
//                 icon: <Mail className="text-yellow-400" />,
//                 title: "Email Us",
//                 content: "support@testportal.com",
//               },
//               {
//                 icon: <Phone className="text-yellow-400" />,
//                 title: "Call Us",
//                 content: "+1 (555) 123-4567",
//               },
//               {
//                 icon: <MapPin className="text-yellow-400" />,
//                 title: "Visit Us",
//                 content: "123 Tech Street, Silicon Valley, CA 94105",
//               },
//               {
//                 icon: <Clock className="text-yellow-400" />,
//                 title: "Support Hours",
//                 content: "Mon–Fri: 9AM–6PM PST",
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="rounded-lg border border-yellow-500/20 bg-gradient-to-b from-gray-900 to-black p-6 shadow-md"
//               >
//                 <div className="flex items-center space-x-4">
//                   <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
//                     {item.icon}
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold">{item.title}</h3>
//                     <p className="text-gray-400">{item.content}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="py-16 px-4 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10">
//         <div className="max-w-6xl mx-auto text-center mb-12">
//           <h2 className="text-4xl font-bold mb-4">
//             Frequently Asked <span className="text-yellow-400">Questions</span>
//           </h2>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//           {[
//             {
//               question: "How do companies access test results?",
//               answer:
//                 "Companies can view candidate test scores and certificates through our partner dashboard.",
//             },
//             {
//               question: "Are the certificates industry-recognized?",
//               answer:
//                 "Yes, our certificates are recognized by 500+ partner companies.",
//             },
//             {
//               question: "Can I retake tests?",
//               answer:
//                 "Yes, you can retake tests after a 30-day waiting period.",
//             },
//             {
//               question: "How long are certificates valid?",
//               answer:
//                 "Certificates are valid for 2 years from issuance and renewable through reassessment.",
//             },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="rounded-lg border border-yellow-500/30 bg-black/50 p-6"
//             >
//               <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
//               <p className="text-gray-400">{item.answer}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-black border-t border-yellow-500/20 py-12 text-center">
//         <div className="flex justify-center items-center space-x-2 mb-4">
//           <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
//             <Code className="w-5 h-5 text-black" />
//           </div>
//           <span className="text-xl font-bold">TestPortal</span>
//         </div>
//         <p className="text-gray-400">© 2024 TestPortal. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send, Code, Clock } from "lucide-react";
import { useTheme } from "../../Components/Context/ThemeContext";
import { Helmet } from "react-helmet-async";

const useToast = () => {
  return {
    toast: ({ title, description }) => alert(`${title}\n\n${description}`),
  };
};

const Contact = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className={`min-h-screen ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
      <Helmet>
        <title>Contact Us | TestPortal</title>
        <meta name="description" content="Contact TestPortal for queries or support regarding assessments and certification." />
      </Helmet>

      
      <section className="py-16 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Get In <span className="text-yellow-400">Touch</span>
        </h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">
          Have questions about our test portal? Need support with your certification journey? We're here to help.
        </p>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`rounded-lg border p-8 shadow-md ${isDark ? "border-yellow-500/20 bg-gradient-to-b from-gray-900 to-black" : "border-yellow-300/20 bg-yellow-50"}`}>
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-yellow-400 mb-2">Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className={`w-full h-10 px-3 py-2 rounded-md border placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 ${isDark ? "bg-gray-900 text-white" : "bg-white text-black"}`}
                  />
                </div>
                <div>
                  <label className="block text-yellow-400 mb-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className={`w-full h-10 px-3 py-2 rounded-md border placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 ${isDark ? "bg-gray-900 text-white" : "bg-white text-black"}`}
                  />
                </div>
              </div>
              <div>
                <label className="block text-yellow-400 mb-2">Subject</label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className={`w-full h-10 px-3 py-2 rounded-md border placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 ${isDark ? "bg-gray-900 text-white" : "bg-white text-black"}`}
                />
              </div>
              <div>
                <label className="block text-yellow-400 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more..."
                  rows={6}
                  required
                  className={`w-full px-3 py-2 rounded-md border placeholder:text-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500 ${isDark ? "bg-gray-900 text-white" : "bg-white text-black"}`}
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

          <div className="space-y-8">
            {[Mail, Phone, MapPin, Clock].map((Icon, index) => (
              <div
                key={index}
                className={`rounded-lg border p-6 shadow-md flex items-center space-x-4 ${isDark ? "border-yellow-500/20 bg-gradient-to-b from-gray-900 to-black" : "border-yellow-300/20 bg-yellow-50"}`}
              >
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <Icon className="text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    {index === 0 ? "Email Us" : index === 1 ? "Call Us" : index === 2 ? "Visit Us" : "Support Hours"}
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
        </div>
      </section>

      <section className={`py-16 px-4 ${isDark ? "bg-black/80" : "bg-yellow-50"}`}>
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked <span className="text-yellow-400">Questions</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {["How do companies access test results?", "Are the certificates industry-recognized?", "Can I retake tests?", "How long are certificates valid?"].map((q, i) => (
            <div
              key={i}
              className={`rounded-lg border p-6 ${isDark ? "border-yellow-500/30 bg-black/50 text-gray-400" : "border-yellow-300/30 bg-yellow-100 text-gray-700"}`}
            >
              <h3 className="text-xl font-semibold mb-2">{q}</h3>
              <p>
                {i === 0
                  ? "Companies can view candidate test scores and certificates through our partner dashboard."
                  : i === 1
                  ? "Yes, our certificates are recognized by 500+ partner companies."
                  : i === 2
                  ? "Yes, you can retake tests after a 30-day waiting period."
                  : "Certificates are valid for 2 years from issuance and renewable through reassessment."}
              </p>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
};

export default Contact;

