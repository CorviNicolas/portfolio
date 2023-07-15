import { Component } from '@angular/core';
import {Project} from "../../models/project.model";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent {
  projects: Project[] = [];

  constructor() {
    this.projects = [
      new Project("My website", "This is my website", "https://github.com/CorviNicolas/portfolio", "#", true, true),
      new Project("Sample", "Sample", "", "#", false, false)

    ];
  }
}
