import Image from "next/image";
import { FaGavel } from "react-icons/fa"; // Law icon to add visual interest
import Bg from "@/app/assets/law-firm-bg.jpg";

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src={Bg}
          alt="law firm background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-gray-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-screen px-6 text-center md:px-12">
        <div className="mb-6">
          <Image
            src="https://image.similarpng.com/very-thumbnail/2021/06/Law-firm-logo-icon-design-5.png"
            alt="Law Firm Logo"
            width={120}
            height={120}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
        <div className="flex items-center space-x-2 animate-fadeIn">
          <FaGavel className="text-yellow-400 text-2xl sm:text-3xl md:text-4xl" />
          <h1 className="text-4xl font-bold text-gray-200 mb-4">
            Trusted Tax Law Experts in Bangladesh
          </h1>
        </div>
        <p className="text-gray-400 max-w-md mx-auto mb-6">
          Providing expert tax law services with a focus on compliance, dispute
          resolution, and personalized consulting.
        </p>

        {/* Animated Call-to-Action Button */}
        <button className="btn btn-warning mt-8 px-6 animate-glow hover:animate-none">
          Get a Free Consultation
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-10 animate-bounce">
          <span className="text-gray-400 text-xs sm:text-sm md:text-base">
            Scroll down
          </span>
          <div className="w-3 h-3 sm:w-4 sm:h-4 mx-auto mt-2 border-b-2 border-r-2 border-yellow-400 rotate-45"></div>
        </div>
      </div>
    </section>
  );
}
