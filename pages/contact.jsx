import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6 text-lg">
        Have questions, partnerships, or cultural stories to share? Reach out!
      </p>
      <form className="max-w-lg space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded p-2"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border rounded p-2"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full border rounded p-2"
        ></textarea>
        <button className="bg-gray-900 text-white px-4 py-2 rounded">
          Send Message
        </button>
      </form>
    </Layout>
  );
}
