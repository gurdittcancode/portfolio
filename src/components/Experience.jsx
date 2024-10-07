import { EXPERIENCES } from "../constants";

export default function Experience() {
  return (
    <div className="mt-12 w-10/12 md:w-4/5 max-w-[750px] flex flex-col border-b-4 border- border-b-cyan-500 border-dotted pb-8">
      <h2 className="text-3xl text-cyan-500 font-bold">experience</h2>
      <div className="flex flex-col w-full mt-7">
        {EXPERIENCES.map((exp, idx) => (
          <div
            key={idx}
            className="mt-2 w-full border-2 border-cyan-500 border-dashed px-4 py-5"
          >
            <div className="flex w-full justify-between mb-3">
              <div>
                <div className="text-xl text-cyan-500 font-bold">
                  {exp.placeOfWork}
                </div>
                <span className="text-lg font-semibold">{exp.position}</span>
              </div>
              <div>{exp.tenure}</div>
            </div>
            <p className="text-md">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
