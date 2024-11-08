import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="flex lg:ml-[10vw] justify-center items-center min-h-screen mt-[5vw]">
      <div className="w-full max-w-3xl p-8">
        <h2 className="lg:text-[3vw] lg:ml-[-10vw] text-4xl font-bold text-gray-800 text-center mb-8">
          Contact <span className="text-purple-600">Me</span>
        </h2>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="m-[8vw] lg:mt-[5vw] lg:mb-[5vw] lg:ml-[0] lg:space-y-6"
        >
          <input type="hidden" name="access_key" value="93a3e4ad-e17c-4a6b-ae7b-1675deb41641" />
          
          {/* Row 1: Full Name and Email Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                className="mt-1 block w-full px-[1vw] py-[1vw] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                className="mt-1 block w-full px-[1vw] py-[1vw] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
          </div>

          {/* Row 2: Mobile Number and Email Subject */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="number" className="block lg:mt-[0] mt-[1vw] text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                placeholder="Mobile Number"
                className="mt-1 block w-full px-[1vw] py-[1vw] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Email Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Email Subject"
                className="mt-1 block w-full px-[1vw] py-[1vw] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
          </div>

          {/* Row 3: Message */}
          <div>
            <label htmlFor="message" className="block lg:mt-[0] mt-[1vw] text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Your Message"
              className="mt-1 lg:mb-[0] mb-[1vw] block w-full px-[1vw] py-[1vw] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full md:w-1/2 py-2 px-4 bg-mainColor border-2 border-mainColor text-white font-semibold rounded-md hover:bg-transparent hover:text-black focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
