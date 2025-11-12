import Layout from "../components/Layout";

export default function Join() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4">Join CultureClan</h1>
      <p className="text-lg leading-relaxed max-w-3xl mb-6">
        Become part of the movement. Share your work, connect with other creators, and celebrate our roots together.
      </p>
      <button className="bg-gray-900 text-white px-6 py-3 rounded">
        Sign Up Today
      </button>
    </Layout>
  );
}
