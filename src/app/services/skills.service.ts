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
      new Skill("Spring Boot", SkillGroup.backend, "Spring Boot", "assets/spring-boot-icon.png", "Spring Boot"),
      new Skill("Spring Security", SkillGroup.backend, "Spring Security", "assets/security-icon.png", "Security"),
      new Skill("Spring Data", SkillGroup.backend, "Spring Data", "assets/spring-data-icon.png", "Spring Data"),
      new Skill("Spring Cloud", SkillGroup.backend, "Spring Cloud", "assets/spring-cloud-icon.png", "Spring Cloud"),
    ]
  }

  frontEndSkills(): Skill[] {
    return [
      new Skill("Angular", SkillGroup.frontend, "Angular", "assets/angular-icon.png", "Angular"),
      new Skill("HTML", SkillGroup.frontend, "HTML", "assets/html-icon.png", "HTML"),
      new Skill("CSS", SkillGroup.frontend, "CSS", "assets/css-icon.png", "CSS"),
      new Skill("Sass", SkillGroup.frontend, "Sass", "assets/sass-icon.png", "Sass"),
      new Skill("Typescript", SkillGroup.frontend, "Typescript", "assets/typescript-icon.png", "Typescript"),

    ];
  }

  othersSKills(): Skill[]{
    return [
      new Skill("SQL", SkillGroup.others, "SQL", "assets/sql-icon.png", "SQL"),
      new Skill("Docker", SkillGroup.others, "Docker", "assets/docker-icon.png", "Docker"),
      new Skill("API Rest", SkillGroup.others, "API Rest", "assets/rest-api.png", "API Rest"),
      new Skill("Cloud Services", SkillGroup.others, "Web Services", "assets/cloud-services.png", "Cloud"),
      new Skill("Git", SkillGroup.others, "GIT", "assets/git-icon.png", "Git"),
      new Skill("Github Workflows", SkillGroup.others, "Github", "assets/github-icon.png", "Github"),
      new Skill("Stored Procedures", SkillGroup.others, "Stored procedures", "assets/stored-procedure-icon.png", "Storec procedure"),
      new Skill("JavaFX", SkillGroup.others, "JavaFX", "assets/javafx-icon.png", "JavaFX"),
      new Skill("JWT", SkillGroup.others, "JWT", "assets/jwt-icon.png", "JWT"),
      new Skill("MongoDB", SkillGroup.others, "MongoDB", "assets/mongo-icon.png", "MongoDB"),
      new Skill("RabbitMQ", SkillGroup.others, "RabbitMQ", "assets/rabbitmq-icon.png", "RabbitMQ")
    ];
  }
}
