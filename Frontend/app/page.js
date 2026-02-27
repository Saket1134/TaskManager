export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      <nav className="flex justify-between items-center px-8 py-4 bg-amber-300">
        <h1 className="text-3xl font-bold text-green-600">
          Saket TaskManager
        </h1>
        <div className="space-x-4">
          <a
            href="/login"
            className="px-4 py-2 text-green-600 border border-green-600 rounded-lg hover:bg-green-600 hover:text-white transition"
          >
            Login
          </a>
          <a
            href="/register"
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Register
          </a>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-fuchsia-500">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Organize Your Tasks <br /> Boost Your Productivity 
        </h2>
        <p className="text-gray-600 max-w-2xl mb-8">
          A simple and powerful task management application built with
          Next.js, NestJS, and MongoDB. Create, manage, and track your tasks
          efficiently.
        </p>
        <a
          href="/register"
          className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </section>

      <section className="bg-white py-10 px-8">
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-7">
          Features
        </h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3 text-blue-600">
               Secure Authentication
            </h4>
            <p className="text-gray-600">
              JWT-based login and registration system with protected routes.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3 text-blue-600">
               Task Management
            </h4>
            <p className="text-gray-600">
              Create, edit, delete, filter, and organize tasks easily.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3 text-blue-600">
               Fast & Responsive
            </h4>
            <p className="text-gray-600">
              Built with modern technologies for a smooth experience.
            </p>
          </div>

        </div>
      </section>


      
    </div>
  );
}