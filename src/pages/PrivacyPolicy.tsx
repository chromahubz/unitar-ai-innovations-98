
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-montserrat">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="mb-8 border-unitar-blue text-unitar-blue hover:bg-unitar-blue hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-5xl font-black text-unitar-gray-dark mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-lg text-unitar-gray">Last updated: January 15, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="space-y-8 text-unitar-gray leading-relaxed">
            <section>
              <h2 className="text-3xl font-bold text-unitar-gray-dark mb-4">1. Introduction</h2>
              <p>
                UNITAR ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (unitar.app), use our services, or interact with our AI-powered software development solutions.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-unitar-gray-dark mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-unitar-gray-dark mb-3">2.1 Personal Information</h3>
              <p>We may collect the following personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information (email address, phone number)</li>
                <li>Company or organization details</li>
                <li>Project requirements and specifications</li>
                <li>Communication preferences</li>
                <li>Payment and billing information (processed through secure third-party providers)</li>
              </ul>

              <h3 className="text-xl font-semibold text-unitar-gray-dark mb-3 mt-6">2.2 Technical Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-unitar-gray-dark mb-4">3. How We Use Your Information</h2>
              <p>We use collected information for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing and improving our software development services</li>
                <li>Communicating about projects and services</li>
                <li>Processing payments and managing accounts</li>
                <li>Analyzing website usage and optimizing user experience</li>
                <li>Complying with legal obligations</li>
                <li>Developing AI-powered solutions tailored to client needs</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-unitar-gray-dark mb-4">4. Information Sharing and Disclosure</h2>
              <p>We do not sell, trade, or rent your personal information. We may share information in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With trusted service providers who assist in our operations</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or merger</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-unitar-gray-dark mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-unitar-gray-dark mb-4">6. Data Retention</h2>
              <p>
                We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-unitar-gray-dark mb-4">7. Your Rights</h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and receive a copy of your personal information</li>
                <li>Rectify inaccurate personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-unitar-gray-dark mb-4">8. Cookies and Tracking</h2>
              <p>
                We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-unitar-gray-dark mb-4">9. Third-Party Services</h2>
              <p>
                Our website may contain links to third-party services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-unitar-gray-dark mb-4">10. Children's Privacy</h2>
              <p>
                Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-unitar-gray-dark mb-4">11. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-unitar-gray-dark mb-4">12. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-unitar-gray-dark mb-4">13. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="ml-4">
                <p>Email: privacy@unitar.app</p>
                <p>General Contact: contact@unitar.app</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
