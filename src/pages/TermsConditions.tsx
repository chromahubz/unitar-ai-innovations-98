
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsConditions = () => {
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
          <h1 className="text-5xl font-black text-unitar-gray-dark mb-4 tracking-tight">Terms & Conditions</h1>
          <p className="text-lg text-unitar-gray">Last updated: January 15, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="space-y-8 text-unitar-gray leading-relaxed">
            <section>
              <h2 className="text-3xl font-bold text-unitar-gray-dark mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using UNITAR's services, website, or any related applications, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms & Conditions, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-unitar-gray-dark mb-4">2. Description of Services</h2>
              <p>
                UNITAR provides AI-powered software development services including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Web application development</li>
                <li>Mobile application development</li>
                <li>AI-powered solutions and integrations</li>
                <li>B2B application development</li>
                <li>MVP development and rapid prototyping</li>
                <li>Software consulting and strategy services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-unitar-gray-dark mb-4">3. User Obligations</h2>
              <p>By using our services, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Use our services for lawful purposes only</li>
                <li>Not interfere with or disrupt our services</li>
                <li>Respect intellectual property rights</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Maintain the confidentiality of any access credentials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-unitar-gray-dark mb-4">4. Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-semibold text-unitar-gray-dark mb-3">4.1 Client-Owned Work Product</h3>
              <p>
                Upon full payment, clients retain ownership of custom software applications developed specifically for them, including source code, unless otherwise agreed in writing.
              </p>

              <h3 className="text-xl font-semibold text-unitar-gray-dark mb-3 mt-6">4.2 UNITAR-Owned Assets</h3>
              <p>
                UNITAR retains ownership of proprietary methodologies, frameworks, tools, and general knowledge developed independently or prior to client engagement.
              </p>

              <h3 className="text-xl font-semibold text-unitar-gray-dark mb-3 mt-6">4.3 Third-Party Components</h3>
              <p>
                Software may include third-party components subject to their respective licenses. Clients are responsible for compliance with such licenses.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-unitar-gray-dark mb-4">5. Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment terms will be specified in individual project agreements</li>
                <li>All fees are non-refundable unless otherwise specified</li>
                <li>Late payments may incur additional charges</li>
                <li>Work may be suspended for overdue accounts</li>
                <li>All prices are exclusive of applicable taxes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-unitar-gray-dark mb-4">6. Project Scope and Changes</h2>
              <p>
                Project scope will be defined in separate statements of work. Any changes to the agreed scope may result in additional charges and timeline adjustments. All changes must be approved in writing.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-unitar-gray-dark mb-4">7. Confidentiality</h2>
              <p>
                Both parties agree to maintain confidentiality of proprietary information shared during the course of the engagement. This obligation survives termination of the agreement.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-unitar-gray-dark mb-4">8. Warranties and Disclaimers</h2>
              
              <h3 className="text-xl font-semibold text-unitar-gray-dark mb-3">8.1 Limited Warranty</h3>
              <p>
                UNITAR warrants that services will be performed in a professional and workmanlike manner. Software will be free from material defects for 90 days after delivery.
              </p>

              <h3 className="text-xl font-semibold text-unitar-gray-dark mb-3 mt-6">8.2 Disclaimer</h3>
              <p>
                Except as expressly stated, all services are provided "as is" without warranties of any kind, either express or implied, including but not limited to merchantability, fitness for a particular purpose, or non-infringement.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-unitar-gray-dark mb-4">9. Limitation of Liability</h2>
              <p>
                UNITAR's total liability for any claims arising from or related to our services shall not exceed the total amount paid by the client for the specific project giving rise to the claim. We shall not be liable for indirect, incidental, special, or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-unitar-gray-dark mb-4">10. Force Majeure</h2>
              <p>
                Neither party shall be liable for any failure to perform due to causes beyond their reasonable control, including but not limited to acts of God, war, terrorism, pandemic, or government actions.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-unitar-gray-dark mb-4">11. Termination</h2>
              <p>
                Either party may terminate services with written notice. Upon termination, client shall pay for all work completed and expenses incurred. Certain provisions shall survive termination, including confidentiality and intellectual property terms.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-unitar-gray-dark mb-4">12. Dispute Resolution</h2>
              <p>
                Any disputes arising from these terms shall first be addressed through good faith negotiations. If unresolved, disputes shall be settled through binding arbitration in accordance with applicable arbitration rules.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-unitar-gray-dark mb-4">13. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of the jurisdiction where UNITAR is incorporated, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-unitar-gray-dark mb-4">14. Severability</h2>
              <p>
                If any provision of these terms is found to be unenforceable, the remainder shall remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-unitar-gray-dark mb-4">15. Modifications</h2>
              <p>
                UNITAR reserves the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-unitar-gray-dark mb-4">16. Contact Information</h2>
              <p>
                For questions regarding these Terms & Conditions, please contact us at:
              </p>
              <div className="ml-4">
                <p>Email: legal@unitar.app</p>
                <p>General Contact: contact@unitar.app</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
