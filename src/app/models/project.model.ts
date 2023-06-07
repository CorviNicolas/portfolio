export class Project {
  title: string;
  description: string;
  linkToRepo: string;
  linkToProject: string;
  isRepoPublic: boolean;
  isProjectPublic: boolean;

  constructor(title: string, description: string, linkToRepo: string,
              linkToProject: string, isRepoPublic: boolean, isProjectPublic: boolean) {
    this.title = title;
    this.description = description;
    this.linkToRepo = linkToRepo;
    this.linkToProject = linkToProject;
    this.isRepoPublic = isRepoPublic;
    this.isProjectPublic = isProjectPublic;
  }
}
