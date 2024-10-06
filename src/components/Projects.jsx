import { PROJECTS } from "../constants";
import { SquareArrowOutUpRight } from "lucide-react";

export default function Projects() {
  return (
    <div className="mt-12 w-4/5 max-w-[1000px] flex flex-col">
      <h2 className="text-4xl text-cyan-500 font-bold">projects</h2>
      <div className="flex flex-wrap gap-7 mt-7">
        {PROJECTS.map((proj, idx) => (
          <div key={idx} className="max-w-[220px]">
            <div className="text-xl text-white transition-all duration-150 group hover:text-cyan-500 hover:cursor-pointer">
              <a href={proj.link ? proj.link : "#"}>
                {proj.name}
                <SquareArrowOutUpRight
                  className="inline-block ml-1 group-hover:animate-wiggle"
                  size={20}
                />
              </a>
            </div>
            <div>
              <a href={proj.github} className="text-cyan-500">
                github
              </a>
            </div>
            <div className="mt-3">{proj.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
