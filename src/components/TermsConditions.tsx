
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface TermsConditionsProps {
  onClose: () => void;
}

const TermsConditions = ({ onClose }: TermsConditionsProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl max-h-[90vh] w-full overflow-hidden">
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between">
          <h1 className="text-3xl font-black text-unitar-gray-dark">Terms & Conditions</h1>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="rounded-full p-2 hover:bg-gray-100"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
          <div className="prose max-w-none text-unitar-gray">
            <p className="text-sm text-unitar-gray mb-6">Last updated: January 15, 2025</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using UNITAR's website and services, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">2. Description of Service</h2>
              <p>
                UNITAR provides software development services including but not limited to web application development, 
                mobile application development, AI-powered solutions, B2B application development, MVP launches, and 
                consulting services. Our services are provided on a project basis or through ongoing partnerships.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">3. User Responsibilities</h2>
              <p className="mb-4">You agree to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide accurate and complete information when requesting services</li>
                <li>Cooperate with UNITAR team members during project execution</li>
                <li>Respect intellectual property rights</li>
                <li>Use our services for lawful purposes only</li>
                <li>Pay all fees according to agreed terms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">4. Intellectual Property</h2>
              <p className="mb-4">
                Unless otherwise agreed in writing:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>You retain ownership of your content, data, and business processes</li>
                <li>UNITAR retains ownership of proprietary methodologies, frameworks, and tools</li>
                <li>Custom software developed for you will be owned by you upon full payment</li>
                <li>UNITAR reserves the right to use general knowledge and experience gained</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">5. Payment Terms</h2>
              <p>
                Payment terms will be specified in individual project agreements. Generally, we require payment according 
                to agreed milestone schedules. Late payments may result in project delays or suspension of services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">6. Confidentiality</h2>
              <p>
                UNITAR agrees to maintain confidentiality of your proprietary information and will not disclose such 
                information to third parties without your written consent, except as required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">7. Limitation of Liability</h2>
              <p>
                UNITAR's liability for any claims relating to our services shall not exceed the total amount paid by you 
                for the specific services giving rise to the claim. We shall not be liable for any indirect, incidental, 
                or consequential damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">8. Warranty Disclaimer</h2>
              <p>
                Our services are provided "as is" without any warranties, express or implied. We strive to deliver 
                high-quality solutions but cannot guarantee that our services will meet all your requirements or be 
                error-free.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">9. Termination</h2>
              <p>
                Either party may terminate services with written notice as specified in individual project agreements. 
                Upon termination, you will pay for all services rendered up to the termination date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">10. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with applicable laws. Any disputes will be 
                resolved through appropriate legal channels.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">11. Changes to Terms</h2>
              <p>
                UNITAR reserves the right to modify these terms at any time. Changes will be effective immediately upon 
                posting on our website. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">12. Contact Information</h2>
              <p>
                For questions about these terms, please contact us at:
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

export default TermsConditions;
