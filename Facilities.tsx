import PageTransition from "../components/PageTransition";
import { Card, CardContent } from "@/components/ui/card";
import facilites1 from "../pages/Screenshot 2025-01-08 131233.png"
import facilites2 from "../pages/Screenshot 2025-01-08 131707.png"
import facilites3 from "../pages/Screenshot 2025-01-08 131825.png"

const Facilities = () => {
  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#7E69AB] mb-8">Our Facilities</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
            <div>
                <img className="rounded-xl mb-4" src={facilites3} alt="Facilities" />
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-[#6E59A5]">Emergency Department</h2>
              <p className="text-gray-600 mb-4">
                State-of-the-art emergency care facility equipped with:
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>24/7 Emergency Services</li>
                <li>Trauma Centers</li>
                <li>Advanced Life Support</li>
                <li>Rapid Response Units</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
            <div>
                <img className="rounded-xl mb-4" src={facilites2} alt="Facilities" />
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-[#6E59A5]">Operation Theaters</h2>
              <p className="text-gray-600 mb-4">
                Modern surgical facilities featuring:
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Robotic Surgery Systems</li>
                <li>Minimally Invasive Surgery</li>
                <li>Advanced Monitoring</li>
                <li>Sterile Processing</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div>
                <img className="rounded-xl mb-4" src={facilites1} alt="Facilities" />
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-[#6E59A5]">Diagnostic Center</h2>
              <p className="text-gray-600 mb-4">
                Comprehensive diagnostic facilities including:
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>MRI & CT Scan</li>
                <li>Digital X-Ray</li>
                <li>Ultrasound</li>
                <li>Pathology Lab</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-[#F1F0FB] rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-[#7E69AB]">Specialized Units</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#6E59A5]">ICU Facilities</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Cardiac ICU</li>
                <li>Neonatal ICU</li>
                <li>Pediatric ICU</li>
                <li>Surgical ICU</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#6E59A5]">Specialty Centers</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Cancer Center</li>
                <li>Heart Center</li>
                <li>Neuroscience Center</li>
                <li>Women's Health Center</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#6E59A5]">Patient Amenities</h2>
              <ul className="space-y-2 text-gray-600">
                <li>Private Rooms</li>
                <li>Family Lounges</li>
                <li>Cafeteria</li>
                <li>Pharmacy</li>
                <li>WiFi Access</li>
                <li>Parking Facilities</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#6E59A5]">Support Services</h2>
              <ul className="space-y-2 text-gray-600">
                <li>Rehabilitation Center</li>
                <li>Physical Therapy</li>
                <li>Occupational Therapy</li>
                <li>Speech Therapy</li>
                <li>Mental Health Services</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageTransition>
  );
};

export default Facilities;