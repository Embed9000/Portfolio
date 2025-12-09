export function createProject(data) {
  return {
    title: data.title,
    slug: data.slug,
    description: data.description,
    videoUrl: data.videoUrl,
    thumbnailUrl: data.thumbnailUrl,
    projectUrl: data.projectUrl ?? "#",
    details: data.details ?? [],
    about: data.about ?? "",
    projectInfo: data.projectInfo ?? [],
    introduction: data.introduction ?? "",
    workImpact: data.workImpact ?? "",
    projectDeveleloping: data.projectDeveleloping ?? [],
  };
}
