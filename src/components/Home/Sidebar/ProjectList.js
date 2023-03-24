import { useGetProjectsQuery } from "../../../features/porjects/projectsApi";
import Project from "./Project";

const ProjectList = ({ handleFilterKey }) => {
  const { data: projects } = useGetProjectsQuery();

  return (
    <div>
      <h3 className="text-xl font-bold">Projects</h3>
      <div className="mt-3 space-y-4">
        {projects?.length &&
          projects.map((p) => (
            <Project key={p.id} getFilterKey={handleFilterKey} project={p} />
          ))}
      </div>
    </div>
  );
};

export default ProjectList;
