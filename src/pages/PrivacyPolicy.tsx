
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-montserrat">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button 
              onClick={() => navigate(-1)}
              variant="outline" 
              className="mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <h1 className="text-4xl md:text-5xl font-black text-unitar-gray-dark mb-4 tracking-tight">Privacy Policy</h1>
            <p className="text-lg text-unitar-gray">Last updated: January 15, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none text-unitar-gray space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                At UNITAR, we collect information you provide directly to us when you:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Contact us through our website forms or email</li>
                <li>Request information about our services</li>
                <li>Engage with our applications or software solutions</li>
                <li>Subscribe to our newsletters or communications</li>
              </ul>
              <p>
                This may include your name, email address, company information, project details, and any other information you choose to provide.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Develop and deliver our software solutions and services</li>
                <li>Communicate with you about projects, updates, and services</li>
                <li>Improve our website, applications, and services</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">3. Information Sharing and Disclosure</h2>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>With service providers who assist us in operating our business</li>
                <li>When required by law or to protect our rights and safety</li>
                <li>In connection with a business transfer or acquisition</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">5. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">6. Your Rights</h2>
              <p className="mb-4">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Access, update, or delete your personal information</li>
                <li>Object to or restrict certain processing of your data</li>
                <li>Data portability</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p>
                To exercise these rights, please contact us at <a href="mailto:privacy@unitar.app" className="text-unitar-blue hover:underline">privacy@unitar.app</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">7. Cookies and Tracking Technologies</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand where our visitors are coming from. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">9. Children's Privacy</h2>
              <p>
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">10. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your personal information in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our services after any changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">12. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-slate-50 p-6 rounded-lg mt-4">
                <p><strong>UNITAR</strong></p>
                <p>Email: <a href="mailto:privacy@unitar.app" className="text-unitar-blue hover:underline">privacy@unitar.app</a></p>
                <p>General Contact: <a href="mailto:contact@unitar.app" className="text-unitar-blue hover:underline">contact@unitar.app</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
