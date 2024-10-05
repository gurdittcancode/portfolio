import { CircleArrowRight } from "lucide-react";
import { RESUME_URL } from "../constants";

export default function Hero() {
  return (
    <div className="w-2/3 flex-col items-center">
      <div>
        <div className="flex ">
          <div className="w-full lg:w-1/2 flex flex-col gap-y-3">
            <div className="border-b-4 border-  border-b-cyan-500 border-dotted py-6 flex flex-col">
              <h1 className="text-5xl text-white font-bold">
                hi, i&apos;m gurditt :)
              </h1>
              <span className="text-cyan-500 font-bold text-3xl mt-2">
                full stack engineer from india
              </span>
            </div>
            <span className="text-gray-500 font-semibold text-xl">
              rearranging 0s and 1s to create beautiful websites and products
              for the last 1.5 years. here to serve your web development needs
            </span>
            <span className="font-semibold text-xl text-white">
              actively looking for internships and full-time roles as a
              full-stack engineer
            </span>
            <span className="text-gray-500 text-xl">
              hire me <CircleArrowRight className="inline-block mr-2" />
              <a href={RESUME_URL} className="text-cyan-500">
                resume
              </a>
            </span>
          </div>
          <img src="" alt="hero image" className="hidden lg:block w-1/2" />
        </div>
      </div>
    </div>
  );
}
