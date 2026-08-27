import { ArrowUpRight } from "lucide-react";

export default function ProjectPreview({ project }) {
  return (
    <div className={`project-preview ${project.theme || ""}`}>
      <div className="preview-image-wrap">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} website preview`}
            className="preview-image"
          />
        ) : (
          <div className="preview-placeholder">
            <span>{project.name}</span>
            <small>Project preview</small>
          </div>
        )}
      </div>

      <div className="preview-footer">
        <span>VIEW PROJECT</span>
        <ArrowUpRight size={16} />
      </div>
    </div>
  );
}
