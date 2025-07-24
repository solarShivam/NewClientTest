import React from "react";
import {
  Code,
  Building2,
  Users,
  TrendingUp,
  CheckCircle,
  BarChart3,
  Shield,
  Clock,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";

const ForCompanies = () => {
  const benefits = [
    {
      icon: Users,
      title: "Pre-Screened Candidates",
      description:
        "Access a pool of candidates who have already demonstrated their skills through our comprehensive tests"
    },
    {
      icon: BarChart3,
      title: "Detailed Analytics",
      description:
        "Get comprehensive reports on candidate performance, strengths, and areas of expertise"
    },
    {
      icon: Clock,
      title: "Save Time & Resources",
      description:
        "Reduce your hiring time by 60% with our pre-validated candidate screening process"
    },
    {
      icon: Target,
      title: "Skill-Based Matching",
      description:
        "Find candidates with the exact skills you need through our advanced filtering system"
    }
  ];

  const features = [
    "Real-time candidate scoring",
    "Customizable skill requirements",
    "Bulk candidate downloads",
    "Interview scheduling integration",
    "Performance trend analysis",
    "Industry-specific assessments"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
    
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto">
          <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Building2 className="w-10 h-10 text-black" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Hire <span className="text-yellow-400">Verified</span> Talent
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Access pre-screened candidates with validated skills. Make data-driven hiring decisions 
            with our comprehensive test portal analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg">
              <Users className="w-5 h-5" /> Browse Candidates
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors px-8 py-4 border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black font-semibold text-lg">
              <BarChart3 className="w-5 h-5" /> View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Why Choose <span className="text-yellow-400">TestPortal</span> for Hiring?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map(({ icon: Icon, title, description }, i) => (
              <div
                key={i}
                className="rounded-lg border border-yellow-500/20 bg-gradient-to-b from-gray-900 to-black p-6 text-white hover:border-yellow-500/50 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 hover:bg-yellow-500">
                  <Icon className="w-7 h-7 text-yellow-400 hover:text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-400 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Complete Hiring <span className="text-yellow-400">Solution</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Everything you need to find, evaluate, and hire the best talent for your organization.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg mt-8">
              Start Free Trial
            </button>
          </div>
          <div className="rounded-lg border border-yellow-500/20 bg-gradient-to-b from-gray-900 to-black text-white shadow-sm p-8">
            <h3 className="text-2xl font-semibold mb-6">Platform Statistics</h3>
            <div className="space-y-6">
              {[
                ["Active Candidates", "25,000+"],
                ["Partner Companies", "500+"],
                ["Successful Hires", "15,000+"],
                ["Average Hire Time", "7 Days"]
              ].map(([label, value], i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-gray-400">{label}</span>
                  <span className="text-2xl font-bold text-yellow-400">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Find Your Next <span className="text-yellow-400">Hire</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that have streamlined their hiring process with TestPortal.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors px-10 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg">
              Get Started Today
            </button>
            <Link to="/contact">
              <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors px-10 py-4 border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black font-semibold text-lg">
                Schedule Demo
              </button>
            </Link>
          </div>
        </div>
      </section>

     
     
    </div>
  );
};

export default ForCompanies;
