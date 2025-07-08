"use client";

import React, { useState } from "react";

import { Search, MapPin, Clock, DollarSign, Filter } from "lucide-react";

export default function JobListingPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedType, setSelectedType] = useState("");

  // Raw, hardcoded job data as requested
  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120,000 - $180,000",
      description:
        "We are looking for a Senior Software Engineer to join our team...",
      posted: "2 days ago",
      applicants: 25,
      requirements: ["5+ years experience", "React", "Node.js", "Python"],
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Digital Solutions",
      location: "Remote",
      type: "Contract",
      salary: "$80,000 - $120,000",
      description:
        "Join our frontend team to build amazing user experiences...",
      posted: "1 day ago",
      applicants: 15,
      requirements: ["3+ years experience", "JavaScript", "React", "CSS"],
    },
    {
      id: 3,
      title: "Product Manager",
      company: "StartupX",
      location: "New York, NY",
      type: "Full-time",
      salary: "$100,000 - $140,000",
      description: "Lead product strategy and development for our platform...",
      posted: "3 days ago",
      applicants: 42,
      requirements: [
        "Product management",
        "Strategy",
        "Analytics",
        "Leadership",
      ],
    },
    {
      id: 4,
      title: "UI/UX Designer",
      company: "Design Studio",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$70,000 - $100,000",
      description: "Create beautiful and intuitive user interfaces...",
      posted: "1 week ago",
      applicants: 8,
      requirements: [
        "Design experience",
        "Figma",
        "Adobe Creative Suite",
        "Prototyping",
      ],
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "Analytics Pro",
      location: "Boston, MA",
      type: "Full-time",
      salary: "$110,000 - $160,000",
      description: "Analyze complex data sets to drive business decisions...",
      posted: "5 days ago",
      applicants: 18,
      requirements: ["Python", "Machine Learning", "Statistics", "SQL"],
    },
    {
      id: 6,
      title: "Marketing Specialist",
      company: "Growth Agency",
      location: "Chicago, IL",
      type: "Part-time",
      salary: "$45,000 - $65,000",
      description: "Drive marketing campaigns and brand awareness...",
      posted: "4 days ago",
      applicants: 12,
      requirements: [
        "Marketing experience",
        "SEO",
        "Social Media",
        "Analytics",
      ],
    },
    {
      id: 7,
      title: "DevOps Engineer",
      company: "CloudTech",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$95,000 - $130,000",
      description: "Manage infrastructure and deployment pipelines...",
      posted: "3 days ago",
      applicants: 7,
      requirements: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    },
    {
      id: 8,
      title: "Sales Representative",
      company: "BizDev Solutions",
      location: "Miami, FL",
      type: "Full-time",
      salary: "$50,000 - $80,000 + Commission",
      description: "Drive sales and build client relationships...",
      posted: "6 days ago",
      applicants: 29,
      requirements: ["Sales experience", "Communication", "CRM", "Negotiation"],
    },
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLocation =
      selectedLocation === "" ||
      job.location.toLowerCase().includes(selectedLocation.toLowerCase());

    const matchesType = selectedType === "" || job.type === selectedType;

    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs, companies, or keywords..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <select
                className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="">All Locations</option>
                <option value="Remote">Remote</option>
                <option value="San Francisco">San Francisco</option>
                <option value="New York">New York</option>
                <option value="Austin">Austin</option>
                <option value="Boston">Boston</option>
                <option value="Chicago">Chicago</option>
                <option value="Seattle">Seattle</option>
                <option value="Miami">Miami</option>
              </select>
            </div>
            <div className="relative">
              <select
                className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="">All Types</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
            <button className="flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg">
              <Filter className="w-4 h-4 mr-2" /> Filter
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {filteredJobs.length} Jobs Found
          </h2>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Sort by:</span>
            <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
              <option>Most Recent</option>
              <option>Most Relevant</option>
              <option>Salary (High to Low)</option>
              <option>Salary (Low to High)</option>
            </select>
          </div>
        </div>
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{job.company}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-1" />
                        {job.salary}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium mb-2">
                      Apply Now
                    </button>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.requirements.map((req, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {req}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-gray-500">Posted {job.posted}</div>
              </div>
            </div>
          ))}
          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No jobs found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search criteria or filters
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
