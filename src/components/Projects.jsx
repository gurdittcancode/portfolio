import { Link, Github } from 'lucide-react';

export const Project = ({ name, description, link, github, tools }) => {
  return (
    <div className="flex flex-col box-border max-w-[480px] gap-4 border-[4px] border-black p-6 rounded-xl">
      <div className="text-3xl font-bold flex justify-between">
        <span>{name}</span>
        <div>
          <a href={link} target="_blank">
            <Link
              className="inline-block mr-4"
              strokeWidth={'2.5px'}
              size={30}
            />
          </a>
          <a href={github} target="_blank">
            <Github className="inline-block" strokeWidth={'2.5px'} size={30} />
          </a>
        </div>
      </div>
      <div className="text-lg md:text-xl">{description}</div>
      <div className="tools mt-2">
        {tools.map((tool) => {
          return (
            <span
              key={tool}
              className="border p-3 rounded-xl bg-black text-white mr-2">
              {tool}
            </span>
          );
        })}
      </div>
    </div>
  );
};

const projectList = [
  {
    name: 'Image Gallery',
    description:
      'An image gallery app built with Next.js 14 and React-Bootstrap. It fetches images from Unsplash.com and caches them using dynamic, static and ISR caching. It also utilises server components and client-side data fetching',
    link: 'https://nextjs-image-gallery-pink.vercel.app/',
    github: 'https://github.com/gurdittcancode/nextjs-image-gallery',
    tools: ['Next.js', 'TypeScript', 'Bootstrap'],
  },
  {
    name: 'To-do List',
    description:
      'A tool which helps users keep track of their daily tasks so that they can live a productive life',
    link: 'https://typescript-todo-list-tau.vercel.app/',
    github: 'https://github.com/gurdittcancode/typescript-todo-list',
    tools: ['React', 'TailwindCSS', 'TypeScript'],
  },
  {
    name: 'Weather App',
    description:
      'An app that displays the live weather of a geographical location using the OpenWeather API',
    link: 'https://weather-app-six-rho-55.vercel.app/',
    github: 'https://github.com/gurdittcancode/react-weather-app',
    tools: ['React', 'TailwindCSS', 'JavaScript'],
  },
];

export const Projects = () => {
  return (
    <div className="mt-20">
      <p className="text-5xl font-bold text-center">Projects</p>
      <div className="flex flex-wrap mt-8 md:mt-16 gap-10">
        {projectList.map((project) => {
          return <Project key={project} {...project} />;
        })}
      </div>
    </div>
  );
};
