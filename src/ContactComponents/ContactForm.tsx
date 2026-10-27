const ContactForm = () => {
  return (
    <section className="bg-[#111111] py-8 px-8">
      <div
        className="
          w-[90%]
          max-w-7xl
          mx-auto
          bg-[#D8FF2F]
          rounded-xl
          p-10
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
        "
      >
        {/* Left Side */}
        <div>
          <h2 className="text-black text-6xl font-black leading-none mb-6">
            Get in Touch
          </h2>

          <p className="text-black text-lg leading-8">
            If you are interested in my work or want
            <br />
            to provide feedback about this website,
            <br />
            I am open to exchanging ideas.
          </p>
        </div>

        {/* Right Side */}
        <form className="space-y-5">

          <div>
            <label className="block text-black font-semibold mb-2">
              Name
            </label>

            <input
              type="text"
              className="
                w-full
                rounded
                bg-white
                px-4
                py-2
                outline-none
              "
            />
          </div>

          <div>
            <label className="block text-black font-semibold mb-2">
              Email
            </label>

            <input
              type="email"
              className="
                w-full
                rounded
                bg-white
                px-4
                py-2
                outline-none
              "
            />
          </div>

          <div>
            <label className="block text-black font-semibold mb-2">
              Message
            </label>

            <textarea
              rows={6}
              className="
                w-full
                rounded
                bg-white
                px-4
                py-3
                outline-none
                resize-none
              "
            />
          </div>

          <button
            type="submit"
            className="
              w-full
              bg-[#1A1D24]
              text-[#D8FF2F]
              py-3
              rounded
              font-semibold
              hover:opacity-90
              transition
            "
          >
            Send
          </button>

        </form>
      </div>
    </section>
  );
};

export default ContactForm;