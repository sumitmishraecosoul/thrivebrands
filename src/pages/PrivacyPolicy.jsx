import React from 'react';
import ThriveFooter from '../layouts/ThriveFooter';

const PrivacyPolicy = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="text-left">
            {/* Title Section with Background */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              {/* Main Title */}
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
              
              {/* Last Updated */}
              <p className="text-lg text-gray-600">Last Updated: January 15, 2025</p>
            </div>

            {/* Introduction */}
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to Thrive Brands ("Company", "we", "our", "us").
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We respect your privacy and are committed to protecting your personal data.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This Privacy Policy explains how we collect, use, and safeguard information when you visit our website [www.thrivebrands.ai] ("Site") or engage with our services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our Site, you consent to the practices described in this Policy.
              </p>
            </div>

            {/* Section 1: Information We Collect */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 mb-4">We may collect the following types of information:</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">a. Personal Information</h3>
              <p className="text-gray-700 mb-4">Information you voluntarily provide through forms, emails, or inquiries, such as:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Job title</li>
                <li>Project details or inquiries</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">b. Automatically Collected Information</h3>
              <p className="text-gray-700 mb-4">When you browse our Site, we may automatically collect:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages visited, time spent, and referral source</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">c. Cookies and Tracking</h3>
              <p className="text-gray-700 mb-4">
                We use cookies to improve user experience, analyze traffic, and personalize content. You can control or disable cookies in your browser settings, but some features of the Site may not function properly if you do.
              </p>
            </div>

            {/* Section 2: How We Use Your Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use collected information to:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Respond to inquiries or requests</li>
                <li>Provide and improve our services</li>
                <li>Personalize website experience and marketing communication</li>
                <li>Analyze website performance and user behavior</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="text-gray-700">
                We do not sell or rent your personal information to third parties.
              </p>
            </div>

            {/* Section 3: Sharing of Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Sharing of Information</h2>
              <p className="text-gray-700 mb-4">We may share your information only with:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Trusted service providers who assist in website hosting, analytics, or email communications</li>
                <li>Legal authorities, if required by law or to protect our rights</li>
                <li>Business partners, only when necessary to fulfill a service you requested</li>
              </ul>
              <p className="text-gray-700">
                All third parties are required to maintain confidentiality and use data solely for the agreed purpose.
              </p>
            </div>

            {/* Section 4: Data Security */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement reasonable technical and organizational measures to protect your data from unauthorized access, misuse, or disclosure.
              </p>
              <p className="text-gray-700">
                However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Section 5: Data Retention */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Data Retention</h2>
              <p className="text-gray-700">
                We retain personal data only for as long as necessary to fulfill the purposes outlined in this Policy or as required by law. When data is no longer needed, it is securely deleted or anonymized.
              </p>
            </div>

            {/* Section 6: Your Rights */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Your Rights</h2>
              <p className="text-gray-700 mb-4">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Access, update, or delete your personal information</li>
                <li>Withdraw consent to data processing</li>
                <li>Request a copy of your data</li>
                <li>Object to or restrict certain processing activities</li>
              </ul>
            </div>

            {/* Section 7: Third-Party Links */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Third-Party Links</h2>
              <p className="text-gray-700 mb-4">
                Our Site may include links to external websites.
              </p>
              <p className="text-gray-700">
                We are not responsible for the privacy practices or content of those sites. We encourage you to review their privacy policies before providing personal information.
              </p>
            </div>

            {/* Section 8: International Data Transfers */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. International Data Transfers</h2>
              <p className="text-gray-700">
                If you are accessing our Site from outside [Insert Country], please note that your data may be transferred and processed in countries that may have different data protection laws than your own. We take necessary precautions to ensure your data is handled securely.
              </p>
            </div>

            {/* Section 9: Updates to This Policy */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Updates to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time.
              </p>
              <p className="text-gray-700">
                Revisions will be posted on this page with an updated "Last Updated" date. Your continued use of our Site constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Section 10: Contact Us */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Contact Us</h2>
              <p className="text-gray-700 mb-4">If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Email: <a href="mailto:client.service@thrivebrands.ai" className="text-blue-600 hover:underline">client.service@thrivebrands.ai</a></li>
                <li>Website: <a href="www.thrivebrands.ai" className="text-blue-600 hover:underline">www.thrivebrands.ai</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ThriveFooter />
    </>
  );
};

export default PrivacyPolicy;
