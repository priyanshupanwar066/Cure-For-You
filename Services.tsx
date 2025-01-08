import PageTransition from "../components/PageTransition";
import { Card, CardContent } from "@/components/ui/card";
import service1 from "../pages/Screenshot 2025-01-08 135645.png"
import service2 from "../pages/Screenshot 2025-01-08 135547.png"
import service3 from "../pages/Screenshot 2025-01-08 135724.png"
const Services = () => {
  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#7E69AB] mb-8">Our Services</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="mb-4">
                <img src={service1} className="rounded-xl" alt="" />
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-[#6E59A5]">Emergency Care</h2>
              <p className="text-gray-600 mb-4">
                24/7 emergency medical services with state-of-the-art facilities and experienced medical staff. Our emergency department is equipped to handle all types of medical emergencies.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Trauma Care</li>
                <li>Critical Care</li>
                <li>Ambulance Services</li>
                <li>Rapid Response Team</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
            <div className="mb-4">
                <img src={service2} className="rounded-xl" alt="" />
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-[#6E59A5]">Specialized Care</h2>
              <p className="text-gray-600 mb-4">
                Comprehensive specialized medical services across various departments with expert healthcare professionals.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Cardiology</li>
                <li>Neurology</li>
                <li>Orthopedics</li>
                <li>Oncology</li>
                <li>Pediatrics</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
            <div className="mb-4">
                <img src={service3} className="rounded-xl" alt="" />
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-[#6E59A5]">Diagnostic Services</h2>
              <p className="text-gray-600 mb-4">
                Advanced diagnostic and imaging services for accurate and timely diagnosis.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>MRI & CT Scan</li>
                <li>X-Ray Services</li>
                <li>Laboratory Tests</li>
                <li>Ultrasound</li>
                <li>ECG/EKG</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-[#F1F0FB] rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-[#7E69AB]">Preventive Care Programs</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#6E59A5]">Health Checkups</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Annual Physical Examinations</li>
                <li>Women's Health Screenings</li>
                <li>Men's Health Screenings</li>
                <li>Pediatric Wellness Checks</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#6E59A5]">Wellness Programs</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Nutrition Counseling</li>
                <li>Weight Management</li>
                <li>Smoking Cessation</li>
                <li>Stress Management</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#6E59A5]">Rehabilitation Services</h2>
              <ul className="space-y-2 text-gray-600">
                <li>Physical Therapy</li>
                <li>Occupational Therapy</li>
                <li>Speech Therapy</li>
                <li>Cardiac Rehabilitation</li>
                <li>Post-Surgery Rehabilitation</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#6E59A5]">Support Services</h2>
              <ul className="space-y-2 text-gray-600">
                <li>Mental Health Counseling</li>
                <li>Social Work Services</li>
                <li>Patient Education</li>
                <li>Support Groups</li>
                <li>Home Care Services</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageTransition>
  );
};

export default Services;