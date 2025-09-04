import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsConditions = () => {
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
            <h1 className="text-4xl md:text-5xl font-black text-unitar-gray-dark mb-4">Terms & Conditions</h1>
            <p className="text-sm text-unitar-gray">Last updated: January 15, 2025</p>
          </div>
          
          <div className="prose max-w-none text-unitar-gray space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using UNITAR's website and services, you accept and agree to be bound by the terms and 
                provision of this agreement. If you do not agree to abide by these terms, please do not use our services.
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
                <li>AI-powered solutions</li>
                <li>B2B application development</li>
                <li>MVP launches and prototyping</li>
                <li>Software consulting and strategy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">3. User Responsibilities</h2>
              <p className="mb-4">You agree to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide accurate and complete information when using our services</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not interfere with or disrupt our services or servers</li>
                <li>Respect intellectual property rights</li>
                <li>Maintain the confidentiality of any login credentials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">4. Intellectual Property</h2>
              <p>
                All content, features, and functionality of our services, including but not limited to text, graphics, 
                logos, images, and software, are owned by UNITAR or its licensors and are protected by copyright, 
                trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">5. Project Terms</h2>
              <p className="mb-4">For custom development projects:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Project scope, timeline, and pricing will be defined in separate project agreements</li>
                <li>Client owns rights to custom-developed software upon full payment</li>
                <li>UNITAR retains rights to general methodologies and reusable components</li>
                <li>Changes to project scope may result in additional charges</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">6. Payment Terms</h2>
              <p>
                Payment terms for services will be specified in individual project agreements. Generally, payments are due 
                according to agreed milestones or monthly billing cycles. Late payments may incur additional fees.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">7. Limitation of Liability</h2>
              <p>
                UNITAR shall not be liable for any indirect, incidental, special, or consequential damages arising out of 
                or in connection with our services. Our total liability shall not exceed the amount paid for the specific 
                service giving rise to the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">8. Service Availability</h2>
              <p>
                We strive to maintain high service availability but do not guarantee uninterrupted access. Scheduled 
                maintenance and unforeseen technical issues may cause temporary service interruptions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">9. Termination</h2>
              <p>
                Either party may terminate the service relationship with appropriate notice as specified in individual 
                agreements. Upon termination, access to services will cease, and any outstanding payments become due.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">10. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with applicable laws. Any disputes arising 
                from these terms or our services shall be resolved through appropriate legal channels.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting 
                on our website. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-unitar-gray-dark mb-4">12. Contact Information</h2>
              <p>
                For questions about these Terms & Conditions, please contact us at:
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