import { TECHNOLOGIES } from "../constants";
import BallCanvas from "./Ball";

export default function Tech() {
  return (
    <div className="mt-12 w-10/12 md:w-4/5 max-w-[750px] flex flex-col border-b-4 border- border-b-cyan-500 border-dotted pb-8">
      <h2 className="text-3xl text-cyan-500 font-bold">what i tinker with</h2>
      <span className="my-2">(try dragging the balls :))</span>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {TECHNOLOGIES.map((tech) => (
          <div className="h-28 w-28" key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </div>
  );
}
