import React from 'react';
import ThriveFooter from '../layouts/ThriveFooter';

const TermsConditions = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="text-left">
            {/* Title Section with Background */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              {/* Main Title */}
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Terms and Conditions</h1>
              
              {/* Last Updated */}
              <p className="text-lg text-gray-600">Last Updated: January 15, 2025</p>
            </div>

            {/* Introduction */}
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to Thrive Brands ("Company", "we", "our", "us").
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms and Conditions ("Terms") govern your access to and use of our website [www.thrivebrands.ai] ("Site") and any services, content, or materials offered through it.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using our Site, you agree to comply with and be bound by these Terms. If you do not agree, please refrain from using our Site or services.
              </p>
            </div>

            {/* Section 1: Use of Our Website */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Use of Our Website</h2>
              <p className="text-gray-700 mb-4">You may use this Site only for lawful purposes and in accordance with these Terms.</p>
              <p className="text-gray-700 mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Use the Site in any way that violates applicable laws or regulations.</li>
                <li>Attempt to gain unauthorized access to the Site or its related systems.</li>
                <li>Interfere with the Site's performance or security.</li>
                <li>Copy, distribute, or modify any content without written permission from Thrive Brands.</li>
              </ul>
            </div>

            {/* Section 2: Intellectual Property */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content on this Site—including text, graphics, logos, icons, images, videos, and software—is the property of Thrive Brands or its content suppliers and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-700">
                You may not reproduce, republish, or exploit any material from this Site for commercial purposes without express written consent from us.
              </p>
            </div>

            {/* Section 3: Services Disclaimer */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Services Disclaimer</h2>
              <p className="text-gray-700 mb-4">
                Thrive Brands provides marketing, branding, design, and technology services based on client requirements.
              </p>
              <p className="text-gray-700 mb-4">
                All project timelines, deliverables, and outcomes depend on client cooperation, project scope, and mutual agreement outlined in separate service contracts.
              </p>
              <p className="text-gray-700">
                We do not guarantee specific results or performance outcomes unless explicitly stated in a signed agreement.
              </p>
            </div>

            {/* Section 4: Third-Party Links */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Third-Party Links</h2>
              <p className="text-gray-700 mb-4">
                Our Site may include links to third-party websites or tools for your convenience.
              </p>
              <p className="text-gray-700 mb-4">
                Thrive Brands has no control over these sites and is not responsible for their content, accuracy, or privacy practices.
              </p>
              <p className="text-gray-700">
                Accessing third-party sites is at your own risk.
              </p>
            </div>

            {/* Section 5: Limitation of Liability */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">To the fullest extent permitted by law, Thrive Brands shall not be liable for any direct, indirect, incidental, or consequential damages resulting from:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Use or inability to use the Site or its content,</li>
                <li>Reliance on information provided on the Site, or</li>
                <li>Any unauthorized access or alteration of your data.</li>
              </ul>
              <p className="text-gray-700">
                Your sole remedy for dissatisfaction with the Site is to stop using it.
              </p>
            </div>

            {/* Section 6: Indemnification */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Indemnification</h2>
              <p className="text-gray-700">
                You agree to defend, indemnify, and hold harmless Thrive Brands, its employees, partners, and affiliates from any claims, damages, or expenses arising out of your use of the Site or violation of these Terms.
              </p>
            </div>

            {/* Section 7: Privacy */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Privacy</h2>
              <p className="text-gray-700">
                Your use of our Site is also governed by our Privacy Policy, which explains how we collect and handle your personal information. Please review it carefully before using our Site.
              </p>
            </div>

            {/* Section 8: Modifications */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Modifications</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to update or modify these Terms at any time without prior notice.
              </p>
              <p className="text-gray-700">
                Changes will be effective immediately upon posting on this page. Your continued use of the Site constitutes acceptance of any modifications.
              </p>
            </div>

            {/* Section 9: Governing Law */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Governing Law</h2>
              <p className="text-gray-700">
                These Terms are governed by and construed in accordance with the laws of [Insert Applicable Jurisdiction]. Any disputes shall be subject to the exclusive jurisdiction of the courts in [Insert Location].
              </p>
            </div>

            {/* Section 10: Contact Us */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Contact Us</h2>
              <p className="text-gray-700 mb-4">If you have any questions about these Terms, please contact us at:</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Email: <a href="mailto:client.service@thrivebrands.ai" className="text-blue-600 hover:underline">client.service@thrivebrands.ai</a></li>
                <li>Website: <a href="www.thrivebrands.ai" className="text-blue-600 hover:underline">www.thrivebrands.ai</a></li>
                <li>Address: 608 165th Ave NE, Bellevue WA 98008</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ThriveFooter />
    </>
  );
};

export default TermsConditions;
