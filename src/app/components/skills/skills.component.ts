import {Component, OnInit} from '@angular/core';
import {Skill} from "../../models/skill.model";
import {SkillGroup} from "../../models/skill-group.model";
import {SkillsService} from "../../services/skills.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit{
  skills: Skill[] = [];

  constructor(private skillsService: SkillsService) {
  }

  ngOnInit(): void {
    this.skills = this.skillsService.getSkills();
  }

  protected readonly SkillGroup = SkillGroup;

  getSkillsByGroup(group: SkillGroup): Skill[] {
    let result: Skill[] =  this.skills.filter( s => s.group === group);
    console.log(result);
    return result;
  }
}
