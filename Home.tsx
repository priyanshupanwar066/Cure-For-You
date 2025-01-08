import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";
import image from "../pages/love.png"

const Home = () => {
  return (
    <PageTransition>
      <div className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="relative bg-no-repeat bg-cover bg-bottom bg-[url('E:/CureForYou/src/pages/hall-with-reflective-floor.jpg')] py-20 text-white">
          {/* Blurry Smoke Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-300/30 to-white"></div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center justify-items-center"
            >
              <h1 className="flex items-center justify-center gap-2 text-4xl font-bold sm:text-5xl md:text-6xl text-blue-800 bg-gradient-to-b from-transparent via-gray-300/30 to-white p-4 rounded-3xl">
                Your Health
                <img src={image} className="w-auto h-14 inline-block" alt="" />
                <b className="hover:text-blue-900">Our Priority</b>
              </h1>

              <p className="mx-auto mt-4 max-w-xl text-lg  bg-blue-800  p-4 rounded-3xl text-white drop-shadow-sm">
                Providing exceptional healthcare services with cutting-edge
                technology and compassionate care.
              </p>
              <div className="mt-8">
                <a
                  href="/appointments"
                  className="rounded-md bg-white px-8 py-3 text-lg font-medium text-primary hover:bg-gray-100 shadow-lg"
                >
                  Book Appointment
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-lg bg-white p-6 shadow-lg"
              >
                <motion.div className="bg-black text-white mb-10 rounded-xl">
                  <img
                    className="rounded-xl"
                    src="https://plus.unsplash.com/premium_photo-1681966826227-d008a1cfe9c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yc3xlbnwwfHwwfHx8MA%3D%3D"
                    alt="Doctor"
                  />
                </motion.div>
                <h3 className="text-xl font-semibold">Expert Doctors</h3>
                <p className="mt-2 text-gray-600">
                  Our team of experienced medical professionals is dedicated to
                  your care.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-lg bg-white p-6 shadow-lg"
              >
                <motion.div className="bg-black text-white mb-10 rounded-xl">
                  <img
                    className="rounded-xl h-[227px] w-[400px]"
                    src="https://plus.unsplash.com/premium_photo-1664304339622-ccb9031b7373?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZW1lcmdlbmN5fGVufDB8fDB8fHww"
                    alt="Emergency"
                  />
                </motion.div>
                <h3 className="text-xl font-semibold">24/7 Emergency</h3>
                <p className="mt-2 text-gray-600">
                  Round-the-clock emergency services for immediate medical
                  attention.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-lg bg-white p-6 shadow-lg"
              >
                <motion.div className="bg-black text-white mb-10 rounded-xl">
                  <img
                    className="rounded-xl"
                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Facilities"
                  />
                </motion.div>
                <h3 className="text-xl font-semibold">Modern Facilities</h3>
                <p className="mt-2 text-gray-600">
                  State-of-the-art medical equipment and comfortable facilities.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
