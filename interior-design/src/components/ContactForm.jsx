function ContactForm() {
  return (
    <section className="py-24">

      <div className="max-w-3xl mx-auto px-8">

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-4 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-4 rounded-lg"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border p-4 rounded-lg"
          />

          <textarea
            rows="6"
            placeholder="Project Details"
            className="w-full border p-4 rounded-lg"
          ></textarea>

          <button
            className="bg-orange-500 text-white px-8 py-4 rounded-lg"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default ContactForm;