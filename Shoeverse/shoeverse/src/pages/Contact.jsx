

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-10"></div>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Got Questions?</h1>

          <p className="text-slate-300 text-lg">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Contact Information</h2>

            <p className="text-slate-300 leading-8 mb-8">
              Do you have questions about our products, orders, or services?
              Feel free to contact us using the information below or fill out
              the form.
            </p>

            <div className="space-y-5">
              <div className="bg-slate-800 p-5 rounded-xl">
                <h3 className="font-semibold">📧 Email</h3>
                <p className="text-slate-300">info@CartVerse.com</p>
              </div>

              <div className="bg-slate-800 p-5 rounded-xl">
                <h3 className="font-semibold">📞 Phone</h3>
                <p className="text-slate-300">+91 2131234567</p>
              </div>

              <div className="bg-slate-800 p-5 rounded-xl">
                <h3 className="font-semibold">📍 Address</h3>
                <p className="text-slate-300">123 Street, India</p>
              </div>
            </div>
          </div>

          <div className="bg-white text-black rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Send Message</h2>

            <form className="space-y-5">
              <div>
                <label className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
