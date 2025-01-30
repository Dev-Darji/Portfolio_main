import React, { useState } from "react";

// Example Contact Info
const contactDetails = {
  email: "devdarji1827@gmail.com",
  phone: "+91 9104635945",
  address: "C-504, Sangini Sakar Jahangirpura Surat - 395005",
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const [formStatus, setFormStatus] = useState(""); // To display form submission status

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation (optional, you can improve the validation)
    if (!formData.name || !formData.email || !formData.description) {
      setFormStatus("Please fill in all fields.");
      return;
    }

    // Simulate sending an email (you'll need to replace this with an actual backend or email service)
    const mailToLink = `mailto:devdarji1827@gmail.com?subject=Contact Form Submission&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ADescription: ${formData.description}`;

    window.location.href = mailToLink; // Opens the default email client with pre-filled details

    // Reset the form and show success message
    setFormData({
      name: "",
      email: "",
      description: "",
    });
    setFormStatus("Message sent successfully!");
  };

  return (
    <section id="contact" className="contact pt-40 pb-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Side - Contact Form */}
        <div className="flex-1 p-12 px-16 bg-gray-200 shadow-xl rounded-xl opacity-90">
          <h2 className="contacts text-4xl font-bold text-center mb-8 text-gray-800">
            Mail Me
          </h2>
          <form onSubmit={handleSubmit} className="form space-y-8">
            <div>
              <label className="block text-xl font-semibold text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 w-full px-4 py-3 text-xl border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-xl font-semibold text-gray-700" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 w-full px-4 py-3 text-xl border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-xl font-semibold text-gray-700" htmlFor="description">
                Message/Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="mt-1 w-full px-4 py-3 text-xl border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
                placeholder="Your message or description"
                rows="4"
              />
            </div>

            {formStatus && (
              <p className="text-center text-lg text-red-500">{formStatus}</p>
            )}

            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="w-[200px] font-semibold text-lg bg-gray-800 text-white py-3 rounded-lg hover:bg-purple-600 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Right Side - Footer */}
        <div className="flex-1 p-12 bg-gray-900 text-white rounded-xl shadow-xl opacity-90">
          <h2 className="info text-4xl font-bold text-center mb-8 text-gray-200">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 gap-8 text-xl md:text-2xl">
            <div className="bg-gray-300 text-gray-700 font-semibold p-8 rounded-lg shadow-md text-center shadow-gray-500 hover:shadow-xl transition duration-300 hover:scale-105">
              <h3 className="font-semibold text-xl mt-4">Email</h3>
              <a href="mailto:devdarji1827@gmail.com">{contactDetails.email}</a>
            </div>

            <div className="bg-gray-300 text-gray-700 font-semibold p-8 rounded-lg shadow-md text-center shadow-gray-500 hover:shadow-xl transition duration-300 hover:scale-105">
              <h3 className="font-semibold lg:text-xl mt-4">Phone</h3>
              <a href="tel:+919104635945">{contactDetails.phone}</a>
            </div>

            <div className="bg-gray-300 text-gray-700 font-semibold p-8 rounded-lg shadow-md text-center shadow-gray-500 hover:shadow-xl transition duration-300 hover:scale-105">
              <h3 className="font-semibold text-xl mt-4">Address</h3>
              <a href="https://maps.app.goo.gl/eD2kMq2dqU9Tbf9g9" target="_blank" rel="noopener noreferrer">
                {contactDetails.address}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
