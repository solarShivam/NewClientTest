import { useState } from "react";
import {Search,MapPin,Briefcase,GraduationCap,Mail,Download,Eye,Users} from "lucide-react";
import { useTheme } from "../../Components/Context/ThemeContext";

const BrowseCandidates = () => {
    const { isDark } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("All");
  const [selectedScore, setSelectedScore] = useState("All");

  const skills = ["All", "Programming", "Data Analysis", "Aptitude", "English", "Quantitative", "Logical Reasoning"];
  const scoreRanges = ["All", "90-100", "80-89", "70-79", "60-69"];

  const candidates = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul.sharma@email.com",
      location: "Mumbai, India",
      experience: "2 years",
      education: "B.Tech Computer Science",
      profileScore: 94,
      tests: [
        { name: "Programming Fundamentals", score: 92, testCode: "PRG001", date: "2024-01-15" },
        { name: "General Aptitude", score: 88, testCode: "APT001", date: "2024-01-10" },
        { name: "Data Analysis", score: 96, testCode: "DTA001", date: "2024-01-20" }
      ],
      skills: ["JavaScript", "React", "Python", "SQL"],
      avatar: "RS"
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya.patel@email.com",
      location: "Bangalore, India",
      experience: "3 years",
      education: "M.Tech Data Science",
      profileScore: 89,
      tests: [
        { name: "Data Analysis", score: 94, testCode: "DTA001", date: "2024-01-18" },
        { name: "Quantitative Aptitude", score: 87, testCode: "QNT001", date: "2024-01-12" },
        { name: "English Proficiency", score: 86, testCode: "ENG001", date: "2024-01-08" }
      ],
      skills: ["Python", "Machine Learning", "Statistics", "R"],
      avatar: "PP"
    },
  ];

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
      candidate.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSkill = selectedSkill === "All" ||
      candidate.tests.some(test => test.name.toLowerCase().includes(selectedSkill.toLowerCase())) ||
      candidate.skills.some(skill => skill.toLowerCase().includes(selectedSkill.toLowerCase()));

    const matchesScore = selectedScore === "All" ||
      (selectedScore === "90-100" && candidate.profileScore >= 90) ||
      (selectedScore === "80-89" && candidate.profileScore >= 80 && candidate.profileScore < 90) ||
      (selectedScore === "70-79" && candidate.profileScore >= 70 && candidate.profileScore < 80) ||
      (selectedScore === "60-69" && candidate.profileScore >= 60 && candidate.profileScore < 70);

    return matchesSearch && matchesSkill && matchesScore;
  });

  const getScoreColor = (score) => {
    if (score >= 90) return "text-green-400";
    if (score >= 80) return "text-yellow-400";
    if (score >= 70) return "text-orange-400";
    return "text-red-400";
  };

  return (
    <div className={`min-h-screen ${
    isDark
      ? "bg-gradient-to-b from-black via-gray-900 to-black text-white"
      : "bg-gradient-to-b from-white via-gray-100 to-white text-black"
  }`}>
      <section className="py-16 px-4">
        <div className="container mx-auto text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Browse <span className="text-yellow-400">Candidates</span>
          </h1>
          <p className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto mb-8`}
          >
            Find pre-screened candidates with validated skills and test scores.
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto mb-8">
            <div className="flex-1 relative">
              <Search className= 
               {`absolute left-4 top-1/2 transform -translate-y-1/2 ${
              isDark ? "text-gray-400" : "text-gray-500"
            } w-5 h-5`}
               />
              <input
                className=
                 {`w-full pl-12 pr-4 py-3 rounded-md border ${
              isDark
                ? "bg-gray-800/50 text-white placeholder-gray-400 border-yellow-500/30 focus:border-yellow-500"
                : "bg-white text-black placeholder-gray-400 border-yellow-500/30 focus:border-yellow-500"
            } focus:outline-none`}
                placeholder="Search by name, skills, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              value={selectedSkill}
              onChange={(e) => setSelectedSkill(e.target.value)}
              className={`px-4 py-3 rounded-md border ${
            isDark
              ? "bg-gray-800/50 text-white border-yellow-500/30 focus:border-yellow-500"
              : "bg-white text-black border-yellow-500/30 focus:border-yellow-500"
          }`}
            >
              {skills.map(skill => <option key={skill}>{skill}</option>)}
            </select>
            <select
              value={selectedScore}
              onChange={(e) => setSelectedScore(e.target.value)}
              className={`px-4 py-3 rounded-md border ${
            isDark
              ? "bg-gray-800/50 text-white border-yellow-500/30 focus:border-yellow-500"
              : "bg-white text-black border-yellow-500/30 focus:border-yellow-500"
          }`}
            >
              {scoreRanges.map(range => <option key={range}>{range === "All" ? "All Scores" : `${range}%`}</option>)}
            </select>
          </div>
          
          
          <div
            className={`flex justify-center gap-4 ${
                isDark ? "text-gray-400" : "text-gray-600"
            }`}
            >
            <div className="flex items-center">
                <Users className={`w-5 h-5 mr-2 ${isDark ? "text-gray-400" : "text-gray-600"}`} />
                {filteredCandidates.length} candidates found
            </div>
            <button
                className={`inline-flex items-center px-4 py-2 rounded-md font-semibold text-sm transition-colors ${
                isDark
                    ? "bg-yellow-500/20 hover:bg-yellow-500 text-yellow-400 hover:text-black"
                    : "bg-yellow-100 hover:bg-yellow-400 text-yellow-800 hover:text-black"
                }`}
            >
                <Download className="w-4 h-4 mr-2" />
                Export Results
            </button>
            </div>

        </div>

     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredCandidates.map(candidate => (
            <div
            key={candidate.id}
            className={`rounded-lg border p-6 transition-all ${
                isDark
                ? "border-yellow-500/20 bg-gradient-to-b from-gray-900 to-black text-white hover:border-yellow-500/50"
                : "border-yellow-300/20 bg-gradient-to-b from-white to-gray-100 text-black hover:border-yellow-400"
            }`}
            >
            <div className="flex justify-between mb-6">
                <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-black">{candidate.avatar}</span>
                </div>
                <div className="text-left">
                    <h3 className="text-xl font-bold mb-1">{candidate.name}</h3>
                    <div
                    className={`flex items-center text-sm mb-1 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                    >
                    <MapPin className="w-4 h-4 mr-1" />
                    {candidate.location}
                    </div>
                    <div
                    className={`flex items-center text-sm ${
                        isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                    >
                    <Briefcase className="w-4 h-4 mr-1" />
                    {candidate.experience}
                    </div>
                </div>
                </div>
                <div className="text-right">
                <div
                    className={`text-2xl font-bold ${getScoreColor(candidate.profileScore)}`}
                >
                    {candidate.profileScore}
                </div>
                <div
                    className={`text-xs ${
                    isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                >
                    Overall Score
                </div>
                </div>
            </div>

            <div
                className={`flex items-center mb-4 ${
                isDark ? "text-gray-300" : "text-gray-700"
                }`}
            >
                <GraduationCap className="w-4 h-4 mr-2" />
                {candidate.education}
            </div>

            <div className="mb-4">
                <div
                className={`text-sm mb-2 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                }`}
                >
                Skills:
                </div>
                <div className="flex flex-wrap gap-2">
                {candidate.skills.map((skill, index) => (
                    <span
                    key={index}
                    className="inline-flex items-center rounded-full bg-yellow-500/20 text-yellow-400 px-2.5 py-0.5 text-xs font-semibold"
                    >
                    {skill}
                    </span>
                ))}
                </div>
            </div>

            <div className="mb-6">
                <div
                className={`text-sm mb-3 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                }`}
                >
                Recent Test Results:
                </div>
                <div className="space-y-2">
                {candidate.tests.map((test, index) => (
                    <div
                    key={index}
                    className={`flex justify-between rounded-lg p-3 ${
                        isDark ? "bg-gray-800/30" : "bg-yellow-100/30"
                    }`}
                    >
                    <div>
                        <div
                        className={`text-sm font-medium ${
                            isDark ? "text-white" : "text-black"
                        }`}
                        >
                        {test.name}
                        </div>
                        <div
                        className={`text-xs font-mono ${
                            isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                        >
                        {test.testCode}
                        </div>
                    </div>
                    <div className="text-right">
                        <div className={`font-bold ${getScoreColor(test.score)}`}>
                        {test.score}%
                        </div>
                        <div
                        className={`text-xs ${
                            isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                        >
                        {test.date}
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            <div className="flex gap-3">
                <button className="flex-1 inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-md text-sm">
                <Mail className="w-4 h-4 mr-2" /> Contact
                </button>
                <button
                className={`inline-flex items-center justify-center border-2 px-4 py-2 rounded-md text-sm ${
                    isDark
                    ? "border-yellow-500/50 text-yellow-400 hover:bg-yellow-500 hover:text-black"
                    : "border-yellow-400 text-yellow-700 hover:bg-yellow-400 hover:text-black"
                }`}
                >
                <Eye className="w-4 h-4 mr-2" /> View Profile
                </button>
                <button
                className={`inline-flex items-center justify-center border-2 px-3 py-2 rounded-md text-sm ${
                    isDark
                    ? "border-yellow-500/50 text-yellow-400 hover:bg-yellow-500 hover:text-black"
                    : "border-yellow-400 text-yellow-700 hover:bg-yellow-400 hover:text-black"
                }`}
                >
                <Download className="w-4 h-4" />
                </button>
            </div>
            </div>
        ))}
    </div>


    {filteredCandidates.length === 0 && (
        <div className="text-center py-16">
            <div
            className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${
                isDark ? "bg-gray-800" : "bg-gray-200"
            }`}
            >
            <Users className={`w-12 h-12 ${isDark ? "text-gray-500" : "text-gray-600"}`} />
            </div>
            <h3
            className={`text-2xl font-bold mb-4 ${
                isDark ? "text-white" : "text-black"
            }`}
            >
            No Candidates Found
            </h3>
            <p className={`${isDark ? "text-gray-400" : "text-gray-600"} mb-6`}>
            Try adjusting your search criteria or filters.
            </p>
            <button
            onClick={() => {
                setSearchTerm("");
                setSelectedSkill("All");
                setSelectedScore("All");
            }}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-md text-sm"
            >
            Clear Filters
            </button>
        </div>
    )}

      </section>
    </div>
  );
};

export default BrowseCandidates;
