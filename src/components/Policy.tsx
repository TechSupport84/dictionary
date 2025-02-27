
const Policy = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        W-Language Dictionary Policy
      </h1>

      {/* Privacy Policy */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Privacy Policy</h2>
        <p className="text-gray-600">
          We value your privacy. We do not share, sell, or distribute user data to third parties. 
          All personal information is securely stored and used only to improve our services.
        </p>
      </section>

      {/* Data Collection */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Data Collection</h2>
        <p className="text-gray-600">
          The dictionary may collect non-personal data such as user preferences and search history to enhance user experience. 
          No sensitive personal data is collected without consent.
        </p>
      </section>

      {/* Usage Guidelines */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Usage Guidelines</h2>
        <p className="text-gray-600">
          Users must engage with the dictionary ethically. Any attempt to exploit, scrape, or misuse 
          the content for commercial purposes is strictly prohibited.
        </p>
      </section>

      {/* User Responsibilities */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">User Responsibilities</h2>
        <ul className="text-gray-600 list-disc pl-5">
          <li>Use the dictionary for educational or personal use only.</li>
          <li>Report any errors or inappropriate content.</li>
          <li>Do not distribute or modify content without permission.</li>
        </ul>
      </section>

      {/* Content Policy */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Content Guidelines</h2>
        <p className="text-gray-600">
          All definitions and translations are curated for accuracy. Users can suggest corrections, 
          but approval is subject to editorial review.
        </p>
      </section>

      {/* License & Copyright */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">License & Copyright</h2>
        <p className="text-gray-600">
          The W-Language Dictionary content is protected under intellectual property laws. 
          Unauthorized copying or redistribution is prohibited.
        </p>
      </section>

      {/* Termination Policy */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Termination Policy</h2>
        <p className="text-gray-600">
          Violation of policies may result in temporary or permanent suspension of access. 
          We reserve the right to take necessary actions against misuse.
        </p>
      </section>

      {/* Contact Section */}
      <div className="text-center mt-6">
        <p className="text-gray-500">
          If you have any concerns, reach out at 
          <span className="text-blue-500"> support@wlang.com</span>
        </p>
      </div>
    </div>
  );
};

export default Policy;
