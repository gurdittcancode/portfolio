const className =
  "bg-white text-black border-2 border-black rounded-lg py-2 px-3 hover:bg-black hover:text-white  transition-all duration-150";

export default function Contact() {
  return (
    <div className="mt-12 w-10/12 md:w-4/5 max-w-[750px] flex flex-col pb-8">
      <h2 className="text-3xl text-cyan-500 font-bold">contact</h2>
      <div className="mt-3">
        <p className="font-semibold text-lg">
          if you are hiring for internships/full-time roles or you simply want
          to collaborate with me, just shoot me an email at{" "}
          <a
            className="text-cyan-500"
            href="mailto:gurdittsingh1508@gmail.com"
            target="_blank"
          >
            gurdittsingh1508@gmail.com
          </a>
        </p>
        <p className="my-2">
          if you just wanna chat or follow my coding journey, feel free to check
          out my socials
        </p>
        <div className="flex flex-wrap gap-4 mt-6">
          <span>
            <a
              href="https://linkedin.com/in/contactgurditt"
              target="_blank"
              className={className}
            >
              linkedin
            </a>
          </span>
          <span>
            <a
              href="https://x.com/gurdittcancode"
              target="_blank"
              className={className}
            >
              twitter
            </a>
          </span>
          <span>
            <a
              href="https://github.com/gurdittcancode"
              target="_blank"
              className={className}
            >
              github
            </a>
          </span>
          <span>
            <a
              href="https://leetcode.com/u/gurdittcancode"
              target="_blank"
              className={className}
            >
              leetcode
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
