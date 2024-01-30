import { useMDXComponent } from "next-contentlayer/hooks";

interface RenderMDXProps {
  blog?: any;
  project?: any;
}

export const RenderMDX = ({ blog, project }: RenderMDXProps) => {
  const MDXContent = useMDXComponent(blog.body.code);
  // const ProjectMDXContent = useMDXComponent(project?.body.code);

  return (
    <div>
      <MDXContent />
      {/* <ProjectMDXContent /> */}
    </div>
  );
};
