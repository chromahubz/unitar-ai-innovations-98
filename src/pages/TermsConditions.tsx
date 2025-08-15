
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsConditions = () => {
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
            <h1 className="text-4xl md:text-5xl font-black text-unitar-gray-dark mb-4 tracking-tight">Terms & Conditions</h1>
            <p className="text-lg text-unitar-gray">Last updated: January 15, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none text-unitar-gray space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using UNITAR's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">2. Services Description</h2>
              <p className="mb-4">
                UNITAR provides software development services including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Web application development</li>
                <li>Mobile application development</li>
                <li>AI-powered software solutions</li>
                <li>B2B application development</li>
                <li>MVP development and rapid prototyping</li>
                <li>Software consulting and strategy services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">3. Client Responsibilities</h2>
              <p className="mb-4">As a client, you agree to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide accurate and complete information necessary for project completion</li>
                <li>Respond to requests for feedback and approvals in a timely manner</li>
                <li>Make payments according to agreed terms and schedules</li>
                <li>Respect intellectual property rights and confidentiality agreements</li>
                <li>Use our services in compliance with applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">4. Payment Terms</h2>
              <p className="mb-4">
                Payment terms will be specified in individual project agreements. Generally:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Payments are due according to the schedule outlined in project contracts</li>
                <li>Late payments may incur additional fees</li>
                <li>Work may be suspended for non-payment</li>
                <li>All fees are non-refundable unless otherwise specified</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">5. Intellectual Property</h2>
              <p className="mb-4">
                Upon full payment and completion of services:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Clients receive ownership of custom-developed code and assets</li>
                <li>UNITAR retains rights to general methodologies, techniques, and know-how</li>
                <li>Third-party components remain subject to their respective licenses</li>
                <li>UNITAR may use anonymized project data for portfolio and marketing purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">6. Confidentiality</h2>
              <p>
                We maintain strict confidentiality regarding all client information, projects, and business details. We may require mutual non-disclosure agreements for sensitive projects.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">7. Project Timelines and Deliverables</h2>
              <p className="mb-4">
                Project timelines and deliverables will be specified in individual agreements. We strive to meet all deadlines but:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Timelines may be affected by client feedback delays or scope changes</li>
                <li>Force majeure events may impact delivery schedules</li>
                <li>Significant scope changes may require timeline and budget adjustments</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">8. Limitation of Liability</h2>
              <p>
                UNITAR's liability is limited to the amount paid for services. We are not liable for indirect, incidental, special, or consequential damages. Our services are provided "as is" without warranties of any kind.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">9. Support and Maintenance</h2>
              <p>
                Post-launch support and maintenance services are available separately. Basic support may be included for a specified period as outlined in project agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">10. Termination</h2>
              <p className="mb-4">
                Either party may terminate services with written notice. In case of termination:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Client is responsible for payment of work completed</li>
                <li>UNITAR will deliver completed work upon full payment</li>
                <li>Confidentiality obligations survive termination</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">11. Privacy and Data Protection</h2>
              <p>
                We are committed to protecting your privacy and handling your data responsibly. Please refer to our Privacy Policy for detailed information about how we collect, use, and protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">12. Dispute Resolution</h2>
              <p>
                Any disputes arising from these terms or our services will be resolved through good faith negotiation. If necessary, disputes will be subject to binding arbitration or the jurisdiction of competent courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">13. Force Majeure</h2>
              <p>
                UNITAR is not liable for delays or failures in performance resulting from acts beyond our reasonable control, including but not limited to natural disasters, government actions, or other unforeseeable circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">14. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective upon posting to our website. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">15. Severability</h2>
              <p>
                If any provision of these terms is found to be unenforceable, the remaining provisions will continue to be valid and enforceable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">16. Contact Information</h2>
              <p>
                For questions about these Terms & Conditions, please contact us at:
              </p>
              <div className="bg-slate-50 p-6 rounded-lg mt-4">
                <p><strong>UNITAR</strong></p>
                <p>Email: <a href="mailto:legal@unitar.app" className="text-unitar-blue hover:underline">legal@unitar.app</a></p>
                <p>General Contact: <a href="mailto:contact@unitar.app" className="text-unitar-blue hover:underline">contact@unitar.app</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
