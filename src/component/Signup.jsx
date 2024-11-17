import React from 'react';

const Signup = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-800 via-purple-800 to-blue-800 text-white py-20 px-8">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-yellow-500 mb-4">
          Your Coding Hero Journey Starts Here
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Join thousands of students across India and unlock your full potential. Start coding, collaborating, and building amazing projects today!
        </p> 
      </div>

      {/* Sign-Up and Sign-In Options Section */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
        {/* Google Sign Up Button */}
        <button className="w-64 p-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-4 mb-4 md:mb-0">
          <i className="fab fa-google text-xl"></i> Sign up with Google
        </button>

        {/* GitHub Sign Up Button */}
        <button className="w-64 p-4 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-4">
          <i className="fab fa-github text-xl"></i> Sign up with GitHub
        </button>
      </div>

      {/* Sign In Link */}
      <div className="text-center mb-12">
        <p className="text-gray-400">
          Already have an account?{" "}
          <a href="#signin" className="text-yellow-500 font-semibold hover:text-yellow-400">
            Sign In
          </a>
        </p>
      </div>

      {/* Feature Cards Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Learn Feature */}
        <div className="bg-blue-700 p-8 rounded-xl shadow-xl hover:bg-blue-600 transform transition-all duration-300">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Learn</h2>
          <p className="text-gray-300 text-lg">Explore a variety of coding topics and expand your knowledge base with free resources.</p>
        </div>

        {/* Code Feature */}
        <div className="bg-blue-700 p-8 rounded-xl shadow-xl hover:bg-blue-600 transform transition-all duration-300">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Code</h2>
          <p className="text-gray-300 text-lg">Start building real projects and gain hands-on experience with coding challenges.</p>
        </div>

        {/* Community Feature */}
        <div className="bg-blue-700 p-8 rounded-xl shadow-xl hover:bg-blue-600 transform transition-all duration-300">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Community</h2>
          <p className="text-gray-300 text-lg">Join a thriving community of like-minded individuals, ready to learn and grow together.</p>
        </div>

        {/* Peers Feature */}
        <div className="bg-blue-700 p-8 rounded-xl shadow-xl hover:bg-blue-600 transform transition-all duration-300">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Peers</h2>
          <p className="text-gray-300 text-lg">Collaborate on exciting projects with your peers and take your coding skills to the next level.</p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
