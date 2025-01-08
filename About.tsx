import PageTransition from "../components/PageTransition";
import { Card, CardContent } from "@/components/ui/card";
import ourmisson from "../pages/freepik__candid-image-photography-natural-textures-highly-r__39801.jpeg"
import ourvision from "../pages/freepik__candid-image-photography-natural-textures-highly-r__39802.jpeg"
import ourvalues from "../pages/freepik__candid-image-photography-natural-textures-highly-r__39803.jpeg"

const About = () => {
  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#7E69AB] mb-8">About Us</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div>
                <img src={ourmisson} alt="Hospital" className="w-full h-48 object-cover mb-4 rounded-lg" />
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-[#6E59A5]">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At our hospital, we are dedicated to providing exceptional healthcare services with compassion and expertise. Our mission is to improve the health and well-being of our community through innovative medical care, research, and education.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
            <div>
                <img src={ourvision} alt="Hospital" className="w-full h-48 object-cover mb-4 rounded-lg" />
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-[#6E59A5]">Our Vision</h2>
              <p className="text-gray-600 mb-4">
                We strive to be the leading healthcare provider in the region, recognized for clinical excellence, patient-centered care, and innovative medical solutions. Our vision encompasses creating a healthier future for all.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
            <div>
                <img src={ourvalues} alt="Hospital" className="w-full h-48 object-cover mb-4 rounded-lg" />
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-[#6E59A5]">Our Values</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Excellence in Patient Care</li>
                <li>Integrity and Ethics</li>
                <li>Compassion and Empathy</li>
                <li>Innovation and Research</li>
                <li>Teamwork and Collaboration</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-[#ffffff] rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-[#7E69AB]">Our History</h2>
          <p className="text-gray-700 mb-6">
            Founded in 1995, our hospital has grown from a small clinic to a comprehensive medical center serving thousands of patients annually. Over the years, we have continuously expanded our facilities and services to meet the growing healthcare needs of our community.
          </p>
          <p className="text-gray-700 mb-6">
            Today, we are proud to be one of the most trusted healthcare institutions in the region, with state-of-the-art facilities and a team of highly skilled medical professionals dedicated to providing the best possible care to our patients.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-[#7E69AB]">Achievements</h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Accredited by Joint Commission International (JCI)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Recognized for Excellence in Patient Safety</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Award-winning Research Department</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Top-rated Emergency Care Services</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-[#7E69AB]">Community Impact</h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Regular Free Health Camps</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Community Health Education Programs</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Partnerships with Local Schools</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Support for Underprivileged Patients</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;