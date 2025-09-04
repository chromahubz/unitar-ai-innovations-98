import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="mb-6 text-unitar-blue hover:text-unitar-blue-dark"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            <h1 className="text-4xl md:text-5xl font-black text-unitar-gray-dark mb-4">Privacy Policy</h1>
            <p className="text-sm text-unitar-gray">Last updated: January 15, 2025</p>
          </div>
          
          <div className="prose max-w-none text-unitar-gray space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                At UNITAR, we collect information you provide directly to us when you:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Contact us through our website forms</li>
                <li>Subscribe to our newsletters or updates</li>
                <li>Request information about our services</li>
                <li>Engage with our customer support</li>
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
                <li>Deliver our software development services</li>
                <li>Send you updates about our services and company news</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">3. Information Sharing</h2>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>With your explicit consent</li>
                <li>To trusted service providers who assist in operating our website or conducting business</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">5. Cookies and Tracking</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance user experience, analyze website 
                traffic, and understand user preferences. You can control cookie settings through your browser.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">6. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request information about how we use your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">7. Third-Party Services</h2>
              <p>
                Our website may contain links to third-party websites or services. We are not responsible for the privacy 
                practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                Email: <a href="mailto:contact@unitar.app" className="text-unitar-blue hover:underline">contact@unitar.app</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;