import { CircleArrowRight, Sparkles } from "lucide-react";
import { RESUME_URL } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero() {
  useGSAP(() => {
    gsap.fromTo(
      "#hero",
      {
        y: -10,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
      },
    );
  }, []);

  return (
    <div
      id="hero"
      className="w-10/12 md:w-4/5 max-w-[750px] flex-col items-center border-b-4 border- border-b-cyan-500 border-dotted pb-8"
    >
      <div>
        <div className="flex">
          <div className="w-full lg:w-1/2 flex flex-col gap-y-3">
            <div className="border-b-4 border- border-b-cyan-500 border-dotted py-6 flex flex-col">
              <h1 className="text-5xl text-white font-bold">
                hi, i&apos;m gurditt{" "}
                <Sparkles size={40} className="inline-block" />
              </h1>
              <span className="text-cyan-500 font-bold text-2xl mt-3">
                full stack engineer from delhi, india
              </span>
            </div>
            <span className="text-gray-500 font-semibold text-xl">
              rearranging 0s and 1s to create beautiful, minimalist websites and
              products for the last 1.5 years. here to serve your web
              development needs
            </span>
            <span className="font-semibold text-xl text-white mt-3">
              actively looking for internships and full-time roles as a
              full-stack engineer
            </span>
            <span className="text-gray-500 text-xl mt-3">
              hire me <CircleArrowRight className="inline-block mr-2" />
              <a href={RESUME_URL} className="text-cyan-500">
                resume
              </a>
            </span>
          </div>
          <div className="w-1/2 hidden lg:block">
            {" "}
            <img
              src="/gurditt.jpeg"
              alt="hero image"
              className=" w-5/6 mx-auto transition-all duration-300 ease-in-out border-3 border-transparent hover:border-white hover:shadow-lg hover:shadow-white rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="text-lg font-semibold mt-6">
        in my coding journey, i gained 3 months of experience as an SDE intern,
        and i won a category prize in{" "}
        <a
          href="https://devpost.com/software/newsdoor"
          className="text-cyan-500"
        >
          UBC Hacks 3.0
        </a>{" "}
        in my first semester of college. i was also a core team member at
        <a href="https://mlsacbvp.vercel.app/" className="text-cyan-500">
          {" "}
          MLSAC-BVP
        </a>
      </div>
    </div>
  );
}
