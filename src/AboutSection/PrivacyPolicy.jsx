import React, { useState } from 'react';
import { Shield, Lock, Eye, Users, FileText, Bell, Database, Globe } from 'lucide-react';

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const highlights = [
    {
      icon: Shield,
      title: "Your Data is Protected",
      description: "We use industry-standard encryption to keep your information secure"
    },
    {
      icon: Lock,
      title: "No Selling Data",
      description: "We never sell your personal information to third parties"
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Clear information about what data we collect and why"
    },
    {
      icon: Users,
      title: "Your Control",
      description: "You can request, update, or delete your data anytime"
    }
  ];

  const privacySections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "When you create an account, make a purchase, or book a consultation, we collect information such as your name, email address, phone number, delivery address, and payment details. This information is necessary to process your orders and provide our services."
        },
        {
          subtitle: "Plant Care Preferences",
          text: "We may collect information about your plant preferences, home environment (lighting, humidity), and care history to provide personalized recommendations and expert advice."
        },
        {
          subtitle: "Automatically Collected Data",
          text: "Like most websites, we automatically collect certain information including your IP address, browser type, device information, pages visited, and time spent on our site. This helps us improve user experience and site functionality."
        },
        {
          subtitle: "Cookies and Tracking",
          text: "We use cookies to remember your preferences, keep you logged in, and analyze site usage. You can control cookie settings through your browser, though some features may not work properly if cookies are disabled."
        }
      ]
    },
    {
      icon: FileText,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Order Processing",
          text: "We use your information to process and deliver your plant orders, send order confirmations, provide delivery updates, and handle any customer service inquiries."
        },
        {
          subtitle: "Personalized Experience",
          text: "Your preferences help us recommend plants suited to your environment, send relevant care tips, and customize your browsing experience on our platform."
        },
        {
          subtitle: "Communication",
          text: "We may send you transactional emails (order updates, consultation reminders), and with your consent, promotional emails about new plants, care guides, and special offers. You can unsubscribe anytime."
        },
        {
          subtitle: "Service Improvement",
          text: "We analyze user behavior and feedback to improve our website, develop new features, and enhance our plant selection and care resources."
        },
        {
          subtitle: "Legal Compliance",
          text: "We may use your information to comply with legal obligations, resolve disputes, enforce our terms of service, and protect against fraud or abuse."
        }
      ]
    },
    {
      icon: Globe,
      title: "Information Sharing",
      content: [
        {
          subtitle: "Service Providers",
          text: "We share necessary information with trusted third-party service providers who help us operate our business, including payment processors, delivery services, email providers, and website hosting. These partners are contractually obligated to protect your data."
        },
        {
          subtitle: "Plant Experts",
          text: "When you book a consultation, we share relevant information with our plant care experts to provide personalized advice. All experts are bound by confidentiality agreements."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required by law, court order, or government request, or to protect our rights, property, or safety, and that of our users."
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity. We will notify you of any such change."
        },
        {
          subtitle: "Never Sold",
          text: "We do not sell, rent, or trade your personal information to third parties for marketing purposes. Your trust is our priority."
        }
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        {
          subtitle: "Encryption",
          text: "All sensitive data, including payment information, is encrypted using industry-standard SSL/TLS protocols during transmission and storage."
        },
        {
          subtitle: "Secure Payment Processing",
          text: "We use PCI-DSS compliant payment processors. We do not store your complete credit card information on our servers."
        },
        {
          subtitle: "Access Controls",
          text: "We limit access to your personal information to employees and partners who need it to provide services. All personnel are trained on data protection practices."
        },
        {
          subtitle: "Regular Security Audits",
          text: "We regularly review and update our security measures to protect against unauthorized access, alteration, disclosure, or destruction of your data."
        },
        {
          subtitle: "Account Security",
          text: "We recommend using a strong, unique password for your GreenNest account. Never share your login credentials with anyone."
        }
      ]
    },
    {
      icon: Users,
      title: "Your Rights and Choices",
      content: [
        {
          subtitle: "Access Your Data",
          text: "You can request a copy of all personal information we hold about you. We'll provide this in a commonly used, machine-readable format."
        },
        {
          subtitle: "Update Information",
          text: "You can update your account information, preferences, and delivery addresses at any time through your account settings or by contacting us."
        },
        {
          subtitle: "Delete Your Data",
          text: "You can request deletion of your account and associated data. Note that we may retain certain information as required by law or for legitimate business purposes (e.g., order history for accounting)."
        },
        {
          subtitle: "Marketing Communications",
          text: "You can opt out of promotional emails by clicking the unsubscribe link in any marketing email or adjusting your account preferences. Transactional emails (order updates) cannot be disabled."
        },
        {
          subtitle: "Cookie Preferences",
          text: "You can manage cookie preferences through your browser settings. Disabling certain cookies may affect site functionality."
        },
        {
          subtitle: "Data Portability",
          text: "You have the right to receive your data in a portable format and transmit it to another service provider."
        }
      ]
    },
    {
      icon: Bell,
      title: "Children's Privacy",
      content: [
        {
          subtitle: "Age Requirement",
          text: "GreenNest is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13."
        },
        {
          subtitle: "Parental Consent",
          text: "If we discover that we have collected information from a child under 13 without parental consent, we will promptly delete that information."
        },
        {
          subtitle: "Guardian Supervision",
          text: "If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately so we can take appropriate action."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-white w-full mx-auto">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-green-600 to-green-700 text-white py-20 w-full mx-auto">
        <div className="w-11/12 mx-auto text-center">
          <Shield size={64} className="mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-green-100 leading-relaxed mb-4">
            Your privacy is important to us. This policy explains how we collect, 
            use, and protect your personal information.
          </p>
          <p className="text-green-200 text-sm">
            Last Updated: December 3, 2024
          </p>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="w-11/12 mx-auto py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Privacy Commitment
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={32} className="text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            );
          })}
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to GreenNest's Privacy Policy. At GreenNest, we are committed to protecting 
            your privacy and ensuring the security of your personal information. This policy 
            describes how we collect, use, share, and protect your information when you use our 
            website, mobile app, and services.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By using GreenNest, you agree to the collection and use of information in accordance 
            with this policy. If you do not agree with our practices, please do not use our services. 
            We may update this policy from time to time, and we will notify you of any significant 
            changes via email or through a notice on our website.
          </p>
        </div>

        {/* Privacy Sections - Accordion Style */}
        <div className="space-y-4">
          {privacySections.map((section, index) => {
            const Icon = section.icon;
            const isActive = activeSection === index;
            
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full flex items-center justify-between p-6 hover:bg-green-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                      <Icon size={24} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 text-left">
                      {section.title}
                    </h3>
                  </div>
                  <div className={`transform transition-transform ${isActive ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {isActive && (
                  <div className="px-6 pb-6 space-y-6">
                    {section.content.map((item, idx) => (
                      <div key={idx}>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">
                          {item.subtitle}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="bg-linear-to-r from-green-600 to-green-700 rounded-2xl p-8 mt-12 text-white">
          <h2 className="text-3xl font-bold mb-4 text-center">Questions About Privacy?</h2>
          <p className="text-green-100 mb-6 text-center max-w-2xl mx-auto">
            If you have any questions, concerns, or requests regarding this privacy policy 
            or how we handle your data, please don't hesitate to contact us.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
              <FileText size={20} />
              <span>Email: privacy@greennest.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText size={20} />
              <span>Phone: +880 1234-567890</span>
            </div>
          </div>
          <div className="text-center mt-6">
            <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-bold hover:bg-green-50 transition-colors">
              Contact Privacy Team
            </button>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Changes to This Policy</h3>
            <p className="text-gray-600 leading-relaxed">
              We may update this privacy policy from time to time to reflect changes in our 
              practices or for legal, regulatory, or operational reasons. We will notify you 
              of any material changes by email or through a prominent notice on our website. 
              The "Last Updated" date at the top indicates when changes were made.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-3">International Users</h3>
            <p className="text-gray-600 leading-relaxed">
              GreenNest operates primarily in Bangladesh. If you are accessing our services 
              from outside Bangladesh, please be aware that your information may be transferred 
              to and processed in Bangladesh. By using our services, you consent to such transfer 
              and processing in accordance with this privacy policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}