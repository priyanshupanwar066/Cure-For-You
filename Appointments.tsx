import PageTransition from "../components/PageTransition";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";

const Appointments = () => {
  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#7E69AB] mb-8">Book an Appointment</h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-6 text-[#6E59A5]">Appointment Form</h2>
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <Input type="text" placeholder="First name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <Input type="text" placeholder="Last name" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="Your email" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <Input type="tel" placeholder="Your phone number" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                  <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    <option>Select Department</option>
                    <option>Cardiology</option>
                    <option>Neurology</option>
                    <option>Orthopedics</option>
                    <option>Pediatrics</option>
                    <option>General Medicine</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                  <Input type="date" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                  <Input type="time" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Visit</label>
                  <textarea
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    rows={4}
                    placeholder="Please describe your symptoms or reason for visit"
                  ></textarea>
                </div>

                <Button className="w-full bg-[#7E69AB] hover:bg-[#6E59A5]">
                  Book Appointment
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-[#6E59A5]">Important Information</h2>
                <div className="space-y-4 text-gray-600">
                  <p>Please note the following before booking your appointment:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Bring valid ID and insurance card</li>
                    <li>Arrive 15 minutes before appointment</li>
                    <li>Bring list of current medications</li>
                    <li>Wear comfortable clothing</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-[#6E59A5]">Emergency Cases</h2>
                <div className="space-y-4 text-gray-600">
                  <p>For emergency cases, please call our 24/7 emergency line:</p>
                  <p className="text-xl font-bold text-[#7E69AB]">911</p>
                  <p>Or visit our emergency department directly at:</p>
                  <p>123 Hospital Street, City, State 12345</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-[#6E59A5]">Appointment Hours</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="text-gray-600">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="text-gray-600">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="text-gray-600">10:00 AM - 2:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Appointments;