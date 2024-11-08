import Logo from "@/app/assets/AR.png";
import Image from "next/image";
const HeroTemp = () => {
  return (
    <>
      <section className="relative bg-gray-900 text-white h-[calc(100vh-120px)] overflow-hidden">
        <div className="w-full">
          <div className="ps-10">
            <h1 className="text-4xl font-bold text-gray-200 mb-4">
              Trusted Tax Law Experts in Bangladesh
            </h1>
            <p className="text-gray-400 max-w-md mx-auto mb-4">
              Providing expert tax law services with a focus on compliance,
              dispute resolution, and personalized consulting.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="mb-6">
            <Image
              // src="https://image.similarpng.com/very-thumbnail/2021/06/Law-firm-logo-icon-design-5.png"
              src={Logo}
              alt="Law Firm Logo"
              width="200"
              height="auto"
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroTemp;
