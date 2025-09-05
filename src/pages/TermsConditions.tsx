import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Terms & Conditions</h1>
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <div className="text-sm text-gray-600 mb-8">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using UNITAR's services, you accept and agree to be bound by 
              the terms and provision of this agreement. If you do not agree to abide by 
              the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
            <p className="mb-4">
              UNITAR provides AI-first mobile and web application development services, 
              including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Custom software development</li>
              <li>Mobile application development</li>
              <li>Web application development</li>
              <li>AI-powered solutions</li>
              <li>Consulting and strategy services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <p className="mb-4">As a user of our services, you agree to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate and truthful information</li>
              <li>Use our services lawfully and ethically</li>
              <li>Respect intellectual property rights</li>
              <li>Not engage in any prohibited activities</li>
              <li>Maintain the confidentiality of your account credentials</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
            <p className="mb-4">
              All content, features, and functionality of our services are owned by UNITAR 
              and are protected by copyright, trademark, and other intellectual property laws. 
              Custom development work will be subject to separate intellectual property agreements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
            <p className="mb-4">
              Payment terms for services will be specified in individual project agreements. 
              General terms include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Payments are due according to agreed schedules</li>
              <li>Late payments may incur additional fees</li>
              <li>Refunds are subject to project-specific terms</li>
              <li>All prices are subject to applicable taxes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Confidentiality</h2>
            <p className="mb-4">
              We respect the confidentiality of your business information and will take 
              appropriate measures to protect sensitive data. Specific confidentiality 
              terms will be outlined in project agreements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p className="mb-4">
              UNITAR shall not be liable for any indirect, incidental, special, consequential, 
              or punitive damages, including without limitation, loss of profits, data, use, 
              goodwill, or other intangible losses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Warranty Disclaimer</h2>
            <p className="mb-4">
              Our services are provided "as is" without warranty of any kind. We disclaim 
              all warranties, whether express or implied, including merchantability, 
              fitness for a particular purpose, and non-infringement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
            <p className="mb-4">
              Either party may terminate service agreements according to the terms specified 
              in individual contracts. We reserve the right to suspend or terminate access 
              to our services for violations of these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
            <p className="mb-4">
              These terms shall be governed by and construed in accordance with applicable 
              laws, without regard to conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. Changes will be 
              effective immediately upon posting. Your continued use of our services 
              constitutes acceptance of modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
            <p className="mb-4">
              For questions about these terms and conditions, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold">UNITAR</p>
              <p>Email: contact@unitar.app</p>
              <p>Website: www.unitar.app</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TermsConditions;