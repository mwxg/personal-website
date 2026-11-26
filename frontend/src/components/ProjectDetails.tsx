"use client";

import { useId, useRef } from "react";

type ProjectDetailsProps = {
  title: string;
  techStack: string;
  description: string;
};

export default function ProjectDetails({ title, techStack, description }: ProjectDetailsProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  return (
    <>
      <button
        type="button"
        className="project-details-button"
        aria-haspopup="dialog"
        onClick={() => dialogRef.current?.showModal()}
      >
        Project details<span className="sr-only"> for {title}</span>
      </button>
      <dialog ref={dialogRef} className="project-details-dialog" aria-labelledby={titleId}>
        <h3 id={titleId}>{title}</h3>
        <p className="project-details-stack">{techStack}</p>
        <p>{description}</p>
        <form method="dialog">
          <button type="submit" className="project-details-button">Close</button>
        </form>
      </dialog>
    </>
  );
}
