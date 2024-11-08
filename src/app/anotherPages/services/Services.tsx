import React from 'react';

const Services: React.FC = () => {
    return (
        <section id="services" className="py-16 lg:mt-[-10vw] mt-[-2vw] lg:10">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl lg:mt-[10vw] font-bold text-gray-800 mb-6">
                    Transform your business <span className="text-mainColor">With our services</span>
                </h2>
                <p className="text-gray-600 font-medium mb-8">
                    We offer a variety of services to help grow and elevate your business.
                </p>
                <button
                    className="bg-mainColor font-medium mb-10 border-2 border-mainColor hover:border-mainColor text-white px-6 py-3 rounded-full hover:bg-transparent hover:text-black transition"
                >
                    Book a call →
                </button>
                {/* Grid View (Only for Large Screens) */}
                <div className="lg:grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
                    {/* Card 1 */}
                    <div
                        className="p-6 bg-white border-gray-600 border-2 rounded-xl mt-10 lg:mt-0 shadow-md hover:scale-110 transition-all ease-in"
                    >
                        <div className="text-5xl mb-4 text-green-500">
                            <i className="bx bx-laptop" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
                        <p className="text-gray-600">
                            Build scalable websites with modern frameworks and tools.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div
                        className="p-6 bg-white border-gray-600 border-2 rounded-xl mt-10 lg:mt-0 shadow-md hover:scale-110 transition-all ease-in"
                    >
                        <div className="lg:text-[3.5vw] text-5xl mb-4 text-pink-500">
                            <i className="bx bxs-palette" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">Web Design</h3>
                        <p className="text-gray-600">
                            Design beautiful, user-friendly interfaces with attention to detail.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div
                        className="p-6 bg-white border-gray-600 border-2 rounded-xl mt-10 lg:mt-0 shadow-md hover:scale-110 transition-all ease-in"
                    >
                        <div className="text-5xl mb-4 text-blue-500">
                            <i className="bx bxs-rocket" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">SEO Optimization</h3>
                        <p className="text-gray-600">
                            Boost visibility and rank higher on search engines with SEO strategies.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
