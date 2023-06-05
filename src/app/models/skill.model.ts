import {SkillGroup} from "./skill-group.model";

export class Skill {
  title: string;
  group: SkillGroup;
  description: string;
  icon: string;
  altIcon: string;


  constructor(title: string, group: SkillGroup, description: string, icon: string, altIcon:string) {
    this.title = title;
    this.group = group;
    this.description = description;
    this.icon = icon;
    this.altIcon = altIcon;
  }
}
