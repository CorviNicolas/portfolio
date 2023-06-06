import {Component, OnInit} from '@angular/core';
import {Skill} from "../../models/skill.model";
import {SkillGroup} from "../../models/skill-group.model";
import {SkillsService} from "../../services/skills.service";
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        query('mat-grid-tile',[style({transform: 'translateY(-100%)'}),
        stagger(25, animate('200ms ease-in', style({transform: 'translateY(0%)'})))
      ])]),
      transition(':leave', [
        query('mat-grid-tile', animate('200ms ease-in', style({transform: 'translateY(-100%)'})))
      ])
    ])
  ]
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];
  selectedSkills: Skill[] = [];
  gridColumnQuantity: number = 0;

  constructor(private skillsService: SkillsService) {
  }

  ngOnInit(): void {
    this.skills = this.skillsService.getSkills();
    this.selectedSkills = this.skills;
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

  chipListChange(event:any){
    let selected: SkillGroup | string | any = event.value;
    if(selected === undefined || selected === 'All'){
      this.selectedSkills = this.skills;
    } else {
      this.selectedSkills = this.getSkillsByGroup(selected);
    }
  }
}
