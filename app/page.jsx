import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/** text */}
          <div className="text-center xl:text-left order-2 xl:order-none ">
            <span className="text-xl ">Software Developer | AI Enthusiast</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent">Mohamed Hamouda</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            Harnessing advanced technical skills and a strong theoretical foundation to drive innovative solutions in software engineering and AI.
            </p>
            {/** buttons and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/Mohamed_Hamouda_Resume.pdf"
                download="Mohamed_Hamouda_Resume.pdf"
                className="uppercase flex items-center gap-2 justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary h-[56px] px-8 tracking-[2px]"
              >
                <span>Download Resume</span>
                <FiDownload className="text-xl" />
              </a>
              <div className="mb-8 xl:mb-0 ">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/** photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
