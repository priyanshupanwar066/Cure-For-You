import PageTransition from "../components/PageTransition";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#7E69AB] mb-8">Contact Us</h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6 text-[#6E59A5]">Get in Touch</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <Input type="text" placeholder="Your name" />
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea placeholder="Your message" className="h-32" />
                  </div>
                  <Button className="w-full bg-[#7E69AB] hover:bg-[#6E59A5]">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-[#6E59A5]">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-700">Address</h3>
                    <p className="text-gray-600">123 Hospital Street</p>
                    <p className="text-gray-600">City, State 12345</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">Phone</h3>
                    <p className="text-gray-600">Emergency: 911</p>
                    <p className="text-gray-600">Reception: (555) 123-4567</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">Email</h3>
                    <p className="text-gray-600">info@hospital.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-[#6E59A5]">Hours of Operation</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Emergency Care</span>
                    <span className="text-gray-600">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Regular Hours</span>
                    <span className="text-gray-600">Mon-Fri: 8AM-8PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Weekend Hours</span>
                    <span className="text-gray-600">Sat-Sun: 10AM-4PM</span>
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

export default Contact;