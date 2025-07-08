"use client";
import React from "react";

const JobListingForm = () => {
  const [title, setTitle] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [type, setType] = React.useState("");
  const [salary, setSalary] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [posted, setPosted] = React.useState("");
  const [requirements, setRequirements] = React.useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        body: JSON.stringify({
          title,
          company,
          location,
          description,
          salary,
          type,
          requirements,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const err = await res.json();
        console.error("Error:", err);
      } else {
        const data = await res.json();
        console.log("Success:", data);
      }
    } catch (err) {
      console.error("Catch error:", err);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-inter">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-2xl border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          List a New Job
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Job Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Senior Software Engineer"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company Name
            </label>
            <input
              type="text"
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="e.g., TechCorp Inc."
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g., San Francisco, CA"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="type"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Job Type
            </label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              required
            >
              <option value="">Select a type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="salary"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Salary Range
            </label>
            <input
              type="text"
              id="salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="e.g., $120,000 - $180,000"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Job Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="5"
              placeholder="Provide a detailed description of the job role, responsibilities, and benefits..."
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              required
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="posted"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Date Posted
            </label>
            <input
              type="date"
              id="posted"
              value={posted}
              onChange={(e) => setPosted(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="requirements"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Requirements (Comma-separated)
            </label>
            <input
              type="text"
              id="requirements"
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              placeholder="e.g., 5+ years experience, React, Node.js, Python"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-semibold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300"
            >
              List Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobListingForm;
