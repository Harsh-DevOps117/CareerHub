import { Briefcase, Lightbulb, TrendingUp } from "lucide-react";
import { MapPin } from "lucide-react";

function AboutUs() {
  return (
    <section
      id="about-us"
      className="bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24 font-inter"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-green-500">CareerHUB</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Empowering your career journey with innovative solutions and a
            thriving community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 p-6 bg-white rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 flex items-center">
              <Lightbulb className="w-8 h-8 text-green-500 mr-3" /> Our Story
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              CareerHUB began with a simple yet powerful vision: to bridge the
              gap between ambitious professionals and leading organizations.
              Frustrated by fragmented job boards and inefficient hiring
              processes, our founders set out to create a comprehensive platform
              where talent could truly shine and opportunities could be easily
              discovered.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Since our inception, we've grown into a vibrant community, driven
              by a passion for career growth and a commitment to fostering
              meaningful connections. Every feature, every update, and every
              success story reinforces our belief in the power of a well-matched
              professional journey.
            </p>
          </div>

          <div className="space-y-8 p-6 bg-white rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 flex items-center">
              <TrendingUp className="w-8 h-8 text-green-500 mr-3" /> Our Mission
              & Values
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our mission is to empower individuals by providing them with the
              tools, resources, and connections needed to navigate their career
              paths successfully. We strive to create a seamless and efficient
              experience for both job seekers and employers, fostering a dynamic
              ecosystem where opportunities thrive.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div className="flex items-start bg-green-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                <Briefcase className="w-7 h-7 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">
                    Community Focus
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Building a supportive network for all professionals.
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-green-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                <TrendingUp className="w-7 h-7 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">
                    Partnership
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Collaborating with employers for mutual success.
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-green-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                <Lightbulb className="w-7 h-7 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">
                    Excellence
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Delivering high-quality services and results.
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-green-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                <MapPin className="w-7 h-7 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">
                    Global Reach
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Connecting talent and opportunities worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-16">
          <p className="text-gray-700 text-xl mb-6">
            Ready to take the next step in your career? Join CareerHUB today!
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Explore Job Opportunities
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
