import React from "react";

export default function CareerHubHero() {
  return (
    <div className="mt-19 min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
              <span className="mr-2">👋</span>
              Welcome to careerHUB
            </div>

            <h1 className="text-4xl md:text-3xl lg:text-3xl font-bold text-gray-900 leading-tight">
              Discover Your <span className="text-green-500">Dream Career</span>
              <br />
              Unlock Professional
              <br />
              Opportunities
            </h1>

            <p className="text-gray-600 text-md max-w-md">
              Join our network of 3M+ monthly active professionals discovering
              meaningful careers. With over 140,000 daily applications, we
              connect top talent with leading employers worldwide.
            </p>
            <button className="inline-block  bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors">
              Get Started
            </button>

            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                No sign-up required
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Trusted by 10,000+ companies
              </div>
            </div>
          </div>

          <div
            id="right"
            className="w-full md:w-[30rem] h-[25rem] m-auto md:h-auto relative "
          >
            <img
              src="https://img.freepik.com/premium-vector/job-fair-hand-drawn-flat-composition_98292-22333.jpg"
              alt=""
              loading="lazy"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
