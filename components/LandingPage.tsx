import React, { useEffect } from "react";
import {
  Wallet,
  ArrowRightLeft,
  LineChart,
  Zap,
  Shield,
  Globe,
  Smartphone,
} from "lucide-react";

export const LandingPage = () => {
  const whatsappNumber = "+2348115333313";
  const whatsappMessage =
    "Hi! I'm interested in Xendex crypto exchange services.";
  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.src = "https://kulroakonsu.net/88/tag.min.js";
    script.async = true;
    script.setAttribute("data-zone", "136914");
    script.setAttribute("data-cfasync", "false");
    
    // Append to document head
    document.head.appendChild(script);

    // Clean up function to remove script when component unmounts
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []); // Empty dependency array means this runs once when component mounts


  const handleWhatsAppRedirect = (e: React.MouseEvent) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Xendex</div>
        <div className="hidden md:flex space-x-8">
          <a
            href="#"
            onClick={handleWhatsAppRedirect}
            className="hover:text-blue-400"
          >
            Features
          </a>
          <a
            href="#"
            onClick={handleWhatsAppRedirect}
            className="hover:text-blue-400"
          >
            Markets
          </a>
          <a
            href="#"
            onClick={handleWhatsAppRedirect}
            className="hover:text-blue-400"
          >
            Utilities
          </a>
          <a
            href="#"
            onClick={handleWhatsAppRedirect}
            className="hover:text-blue-400"
          >
            About
          </a>
        </div>
        <button
          onClick={handleWhatsAppRedirect}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold"
        >
          Get Started
        </button>
      </nav>

      <header className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Your Gateway to the{" "}
          <span className="text-blue-400">Crypto World</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Trade cryptocurrencies, pay bills, and manage your digital assets all
          in one secure platform
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button
            onClick={handleWhatsAppRedirect}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold text-lg"
          >
            Start Trading
          </button>
          <button
            onClick={handleWhatsAppRedirect}
            className="border border-blue-400 hover:bg-blue-400/10 px-8 py-3 rounded-lg font-semibold text-lg"
          >
            Learn More
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Everything You Need in One App
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div onClick={handleWhatsAppRedirect} className="cursor-pointer">
            <FeatureCard
              icon={<ArrowRightLeft className="w-12 h-12 text-blue-400" />}
              title="Buy & Sell Crypto"
              description="Trade popular cryptocurrencies with competitive spreads and low fees"
            />
          </div>
          <div onClick={handleWhatsAppRedirect} className="cursor-pointer">
            <FeatureCard
              icon={<Zap className="w-12 h-12 text-blue-400" />}
              title="Pay Bills Instantly"
              description="Use your crypto to pay for utilities, mobile recharge, and more"
            />
          </div>
          <div onClick={handleWhatsAppRedirect} className="cursor-pointer">
            <FeatureCard
              icon={<LineChart className="w-12 h-12 text-blue-400" />}
              title="Advanced Trading"
              description="Access professional trading tools and real-time market data"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-800/50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Xendex
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div onClick={handleWhatsAppRedirect} className="cursor-pointer">
              <BenefitCard
                icon={<Shield className="w-8 h-8" />}
                title="Secure Storage"
                description="Industry-leading security measures to protect your assets"
              />
            </div>
            <div onClick={handleWhatsAppRedirect} className="cursor-pointer">
              <BenefitCard
                icon={<Globe className="w-8 h-8" />}
                title="Global Access"
                description="Trade from anywhere with our mobile-first platform"
              />
            </div>
            <div onClick={handleWhatsAppRedirect} className="cursor-pointer">
              <BenefitCard
                icon={<Wallet className="w-8 h-8" />}
                title="Multi-wallet Support"
                description="Connect and manage multiple wallets seamlessly"
              />
            </div>
            <div onClick={handleWhatsAppRedirect} className="cursor-pointer">
              <BenefitCard
                icon={<Smartphone className="w-8 h-8" />}
                title="24/7 Support"
                description="Round-the-clock customer support via chat and email"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Start Your Crypto Journey?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join millions of users who trust Xendex for their crypto trading and
          payment needs
        </p>
        <button
          onClick={handleWhatsAppRedirect}
          className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold text-lg"
        >
          Create Free Account
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Xendex</h3>
              <p className="text-gray-400">
                Your trusted crypto exchange and payment platform
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li
                  className="cursor-pointer hover:text-blue-400"
                  onClick={handleWhatsAppRedirect}
                >
                  Exchange
                </li>
                <li
                  className="cursor-pointer hover:text-blue-400"
                  onClick={handleWhatsAppRedirect}
                >
                  Bill Payments
                </li>
                <li
                  className="cursor-pointer hover:text-blue-400"
                  onClick={handleWhatsAppRedirect}
                >
                  Wallet
                </li>
                <li
                  className="cursor-pointer hover:text-blue-400"
                  onClick={handleWhatsAppRedirect}
                >
                  API
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li
                  className="cursor-pointer hover:text-blue-400"
                  onClick={handleWhatsAppRedirect}
                >
                  Help Center
                </li>
                <li
                  className="cursor-pointer hover:text-blue-400"
                  onClick={handleWhatsAppRedirect}
                >
                  Contact Us
                </li>
                <li
                  className="cursor-pointer hover:text-blue-400"
                  onClick={handleWhatsAppRedirect}
                >
                  Status
                </li>
                <li
                  className="cursor-pointer hover:text-blue-400"
                  onClick={handleWhatsAppRedirect}
                >
                  Blog
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li
                  className="cursor-pointer hover:text-blue-400"
                  onClick={handleWhatsAppRedirect}
                >
                  Privacy Policy
                </li>
                <li
                  className="cursor-pointer hover:text-blue-400"
                  onClick={handleWhatsAppRedirect}
                >
                  Terms of Service
                </li>
                <li
                  className="cursor-pointer hover:text-blue-400"
                  onClick={handleWhatsAppRedirect}
                >
                  Compliance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-gray-800/50 p-6 rounded-xl text-center hover:transform hover:scale-105 transition-transform">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

// Benefit Card Component
const BenefitCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="text-center">
    <div className="flex justify-center mb-4 text-blue-400">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);
