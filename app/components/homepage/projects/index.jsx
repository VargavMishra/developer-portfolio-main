import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {

  return (
    <section id='projects' aria-labelledby="projects-heading" className="relative z-50  my-12 lg:my-24">
      <div className="sticky top-10">
        <div aria-hidden="true" className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <h2 id="projects-heading" className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md font-bold uppercase">
            Projects - SaaS & Full Stack Work
          </h2>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <ol className="flex flex-col gap-6 list-none m-0 p-0" aria-label="Featured projects">
          {projectsData.slice(0, 4).map((project, index) => (
            <li
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Projects;
