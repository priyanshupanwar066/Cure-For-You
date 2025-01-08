import PageTransition from "../components/PageTransition";
import { Card, CardContent } from "@/components/ui/card";
import doctors1 from "../pages/Screenshot 2025-01-08 093904.png"
import doctors2 from "../pages/Screenshot 2025-01-08 093926.png"
import doctors3 from "../pages/Screenshot 2025-01-08 094021.png"
import doctors4 from "../pages/Screenshot 2025-01-08 125224.png"
import doctors5 from "../pages/Screenshot 2025-01-08 125314.png"
import doctors6 from "../pages/Screenshot 2025-01-08 125257.png"


const Doctors = () => {
  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#7E69AB] mb-8">Our Doctors</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full "><img className="w-[130px] h-[130px] rounded-full" src={doctors1} alt="" /></div>
              <h2 className="text-2xl font-semibold mb-2 text-[#6E59A5]">Dr. Sarah Johnson</h2>
              <p className="text-gray-500 mb-4">Chief of Cardiology</p>
              <p className="text-gray-600 mb-4">
                Specializing in interventional cardiology with over 15 years of experience in treating complex cardiac conditions.
              </p>
              <ul className="text-gray-600 text-sm">
                <li>MD from Johns Hopkins University</li>
                <li>Board Certified in Cardiology</li>
                <li>Published researcher</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full"><img className="w-[130px] h-[130px] rounded-full" src={doctors2} alt="" /></div>
              <h2 className="text-2xl font-semibold mb-2 text-[#6E59A5]">Dr. Michael Chen</h2>
              <p className="text-gray-500 mb-4">Head of Neurology</p>
              <p className="text-gray-600 mb-4">
                Expert in neurological disorders and neurosurgery with a focus on minimally invasive procedures.
              </p>
              <ul className="text-gray-600 text-sm">
                <li>Neurological Surgery Specialist</li>
                <li>Harvard Medical School Graduate</li>
                <li>20+ years experience</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full "><img className="w-[130px] h-[130px] rounded-full" src={doctors3} alt="" /></div>
              <h2 className="text-2xl font-semibold mb-2 text-[#6E59A5]">Dr. Emily Rodriguez</h2>
              <p className="text-gray-500 mb-4">Pediatric Specialist</p>
              <p className="text-gray-600 mb-4">
                Dedicated to providing comprehensive care for children with a special focus on developmental pediatrics.
              </p>
              <ul className="text-gray-600 text-sm">
                <li>Pediatric Medicine Expert</li>
                <li>Child Development Specialist</li>
                <li>Family-centered approach</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-[#F1F0FB] rounded-lg p-8">
          
          <h2 className="text-3xl font-semibold text-center mb-6 text-[#5225b3]">Department Heads</h2>
          <div className="grid justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
            <div className="w-32 h-32 mb-4 rounded-full "><img className="w-[130px] h-[130px] rounded-full" src={doctors4} alt="" /></div>
              <h3 className="text-xl font-semibold mb-2 text-[#6E59A5]">Surgery Department</h3>
              <p className="text-gray-600">Dr. James Wilson</p>
              <p className="text-gray-500">General Surgery</p>
            </div>
            <div>
            <div className="w-32 h-32 mb-4 rounded-full "><img className="w-[130px] h-[130px] rounded-full" src={doctors6} alt="" /></div>
              <h3 className="text-xl font-semibold mb-2 text-[#6E59A5]">Oncology Department</h3>
              <p className="text-gray-600">Dr. Lisa Chang</p>
              <p className="text-gray-500">Cancer Care</p>
            </div>
            <div>
            <div className="w-32 h-32 mb-4 rounded-full "><img className="w-[130px] h-[130px] rounded-full" src={doctors5} alt="" /></div>
              <h3 className="text-xl font-semibold mb-2 text-[#6E59A5]">Orthopedics Department</h3>
              <p className="text-gray-600">Dr. Robert Martinez</p>
              <p className="text-gray-500">Joint & Spine</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-6 text-[#7E69AB]">Our Expertise</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-[#6E59A5]">Specializations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Cardiac Surgery</li>
                  <li>Neurosurgery</li>
                  <li>Orthopedic Surgery</li>
                  <li>Pediatric Care</li>
                  <li>Oncology</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-[#6E59A5]">Research & Innovation</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Clinical Trials</li>
                  <li>Medical Research</li>
                  <li>New Treatment Methods</li>
                  <li>Technology Integration</li>
                  <li>Patient Care Innovation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Doctors;