import {Component, OnInit} from '@angular/core';
import {Skill} from "../../models/skill.model";
import {SkillGroup} from "../../models/skill-group.model";
import {SkillsService} from "../../services/skills.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];
  gridColumnQuantity: number = 0;

  constructor(private skillsService: SkillsService) {
  }

  ngOnInit(): void {
    this.skills = this.skillsService.getSkills();
    this.setColumnQuantity(window.innerWidth);
  }

  onResize(event: any) {
    this.setColumnQuantity(event.target.innerWidth);
  }

  setColumnQuantity(innerWidth: number): void {
    if(innerWidth <= 500){
      this.gridColumnQuantity = 1;
    } else if (innerWidth >= 500 && innerWidth <= 1000){
      this.gridColumnQuantity = 3;
    } else if (innerWidth >= 1000 && innerWidth <= 1200){
      this.gridColumnQuantity = 4;
    }else if (innerWidth >= 1200 && innerWidth <= 1400){
      this.gridColumnQuantity = 5;
    } else {
      this.gridColumnQuantity = 6;
    }
  }

  protected readonly SkillGroup = SkillGroup;

  getSkillsByGroup(group: SkillGroup): Skill[] {
    let result: Skill[] = this.skills.filter(s => s.group === group);
    console.log(result);
    return result;
  }
}
