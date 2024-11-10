import Logo from "@/app/assets/AR.png";
import Image from "next/image";
import SymLaw from "@/app/assets/symboloflaw.png";
import Bg from "@/app/assets/law-firm-bg.jpg";
const HeroTemp = () => {
  return (
    <>
      <section className="relative bg-gray-900 text-white h-[calc(100vh-120px)] overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <Image
            src={Bg}
            alt="law firm background"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
            className="opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-gray-900/90"></div>
        </div>
        {/* content */}
        <div className="grid grid-cols-2 max-w-7xl h-full mx-auto mb-10">
          <div className="w-full z-10 flex flex-col justify-center items-start">
            <h1 className="text-4xl font-bold text-gray-200 mb-4">
              Trusted Tax Law Experts in Bangladesh
            </h1>
            <p className="text-gray-400 mb-4">
              Providing expert tax law services with a focus on compliance,
              dispute resolution, and personalized consulting.
            </p>
            <ul className="list-disc ms-10 text-gray-400 font-normal">
              <li>Tax filing</li>
              <li>Legal consultation</li>
              <li>Vat Calculation</li>
            </ul>
            <div className="mt-10">
              <button className="btn btn-warning">
                Get A Free Consultation
              </button>
            </div>
          </div>
          <div className="relative flex flex-grow justify-end items-end w-full max-h-full overflow-hidden">
            <div className="h-full w-full relative">
              <Image
                // src="https://image.similarpng.com/very-thumbnail/2021/06/Law-firm-logo-icon-design-5.png"
                src={SymLaw}
                alt="Law Firm Logo"
                fill
                style={{
                  objectFit: "cover",
                }}
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroTemp;
