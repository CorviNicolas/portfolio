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
      new Skill("Spring Boot", SkillGroup.backend, "Sring Boot", "assets/spring-boot-icon.png", "Spring Boot")
    ]
  }

  frontEndSkills(): Skill[] {
    return [
      new Skill("frontendSkill", SkillGroup.frontend, "skill de frontend", "icono", "angular"),
    ];
  }

  othersSKills(): Skill[]{
    return [
      new Skill("otherSkill", SkillGroup.others, "other skill", "icon", "SQL")
    ];
  }
}
