import {Injectable} from '@angular/core';
import {Skill} from "../models/skill.model";
import {SkillGroup} from "../models/skill-group.model";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills: Skill[] = [];
  constructor() {
    this.skills = this.backendSkills().concat(this.frontEndSkills()).concat(this.othersSKills());
  }

  getSkills(): Skill[] {
    return this.skills;
  }

  backendSkills(): Skill[] {
    return [
      new Skill("Java", SkillGroup.backend, "Java developer", "assets/java-icon.png", "Java"),
      new Skill("Spring Framework", SkillGroup.backend, "Spring Framework", "assets/spring-icon.png", "Spring"),
      new Skill("Spring Boot", SkillGroup.backend, "Spring Boot", "assets/spring-boot-icon.png", "Spring Boot")
    ]
  }

  frontEndSkills(): Skill[] {
    return [
      new Skill("Angular", SkillGroup.frontend, "Angular", "assets/angular-icon.png", "Angular"),
      new Skill("HTML", SkillGroup.frontend, "HTML", "assets/html-icon.png", "HTML"),
      new Skill("CSS", SkillGroup.frontend, "CSS", "assets/css-icon.png", "CSS"),
      new Skill("Typescript", SkillGroup.frontend, "Typescript", "assets/typescript-icon.png", "Typescript"),

    ];
  }

  othersSKills(): Skill[]{
    return [
      new Skill("Oracle Database", SkillGroup.others, "Oracle Database", "assets/oracle-icon.png", "Oracle"),
      new Skill("Docker", SkillGroup.others, "Docker", "assets/docker-icon.png", "Docker"),
      new Skill("API Rest", SkillGroup.others, "API Rest", "assets/rest-api.png", "API Rest"),
      new Skill("AWS", SkillGroup.others, "Amazon Web Services", "assets/aws-icon.png", "AWS"),
      new Skill("Git", SkillGroup.others, "GIT", "assets/git-icon.png", "Git"),
      new Skill("Github Workflows", SkillGroup.others, "Github", "assets/github-icon.png", "Github")

    ];
  }
}
