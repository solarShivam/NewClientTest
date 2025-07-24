import { useState } from "react";
import {
  Brain,
  Search,
  Filter,
  Clock,
  Star,
  ArrowRight,
  BookOpen,
  Target,
} from "lucide-react";

const ExplorePrograms = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    "Aptitude",
    "Technical",
    "Programming",
    "Logical Reasoning",
    "English",
    "Quantitative",
    "Verbal Ability",
  ];

  const tests = [
    {
      id: 1,
      title: "General Aptitude Test",
      category: "Aptitude",
      description:
        "Comprehensive aptitude assessment covering logical reasoning, quantitative ability, and verbal skills. Perfect for campus placements and job interviews.",
      duration: "90 minutes",
      difficulty: "Medium",
      questions: 100,
      rating: 4.8,
      attempts: 15420,
      icon: Brain,
      skills: ["Logical Reasoning", "Quantitative", "Verbal", "Data Analysis"],
      color: "from-blue-500 to-blue-600",
      testCode: "APT001",
    },
  ];

  const filteredTests = tests.filter((test) => {
    const matchesCategory =
      selectedCategory === "All" || test.category === selectedCategory;
    const matchesSearch =
      test.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      test.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      test.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Explore </span>
              <span className="text-yellow-400">Test Programs</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Take industry-standard tests to validate your skills and boost
              your career prospects. Get certified and stand out to potential
              employers.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search tests, skills, or categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 bg-gray-800/50 border border-yellow-500/30 text-white placeholder-gray-400 focus:border-yellow-500 text-lg w-full rounded-md"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Filter className="w-5 h-5 text-yellow-400 mt-2" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md font-semibold text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-yellow-500 text-black hover:bg-yellow-600"
                    : "border-2 border-yellow-500/50 text-yellow-400 hover:bg-yellow-500 hover:text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Tests Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredTests.map((test) => {
              const IconComponent = test.icon;
              return (
                <div
                  key={test.id}
                  className="rounded-lg border border-yellow-500/20 bg-gradient-to-b from-gray-900 to-black text-white shadow-sm transition-all duration-300 group hover:border-yellow-500/50 hover:scale-105 cursor-pointer"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-r ${test.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="inline-flex items-center rounded-full border border-yellow-500/50 px-2.5 py-0.5 text-xs font-semibold text-yellow-400">
                        {test.category}
                      </div>
                    </div>

                    <div className="text-xs text-gray-500 mb-2 font-mono">
                      {test.testCode}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                      {test.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {test.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {test.skills.slice(0, 2).map((skill, index) => (
                        <div
                          key={index}
                          className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-yellow-500/20 text-yellow-400"
                        >
                          {skill}
                        </div>
                      ))}
                      {test.skills.length > 2 && (
                        <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-gray-700 text-gray-300">
                          +{test.skills.length - 2}
                        </div>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="space-y-2 mb-4 text-sm text-gray-400">
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {test.duration}
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="w-4 h-4 mr-1" />
                          {test.questions} Qs
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <Target className="w-4 h-4 mr-1" />
                          {test.difficulty}
                        </div>
                        <div className="flex items-center text-yellow-400">
                          <Star className="w-4 h-4 mr-1 fill-current" />
                          {test.rating}
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">
                        {test.attempts.toLocaleString()} attempts
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-2">
                      <button className="flex items-center justify-center gap-1 flex-1 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-sm rounded-md transition">
                        Take Test
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                      <button className="px-4 py-2 border-2 border-yellow-500/50 text-yellow-400 hover:bg-yellow-500 hover:text-black font-semibold text-sm rounded-md transition">
                        Practice
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredTests.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                No Tests Found
              </h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search terms or category filter to find more
                tests.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-md text-sm transition"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ExplorePrograms;
