import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ProjectService } from '../project.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Project } from '../project.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  projectId: string = null;
  projectToDisplay: Project;

  constructor(private projectService: ProjectService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
    this.projectService.getProjectById(this.projectId).subscribe(dataLastEmittedObserver => {
      this.projectToDisplay = new Project(
        dataLastEmittedObserver.url,
        dataLastEmittedObserver.categories,
        dataLastEmittedObserver.creator,
        dataLastEmittedObserver.creatorImage,
        dataLastEmittedObserver.date,
        dataLastEmittedObserver.deadline,
        dataLastEmittedObserver.description,
        dataLastEmittedObserver.goal,
        dataLastEmittedObserver.location,
        dataLastEmittedObserver.title,
      dataLastEmittedObserver.likes)
    });
  }

  likeProject() {
    console.log("liked");
    this.projectService.likeProject(this.projectId);
  }

  fundProjectOne() {
    console.log("funded");
    this.projectService.fundProject(this.projectId, 1);
  }
  fundProjectFive() {
    console.log("funded");
    this.projectService.fundProject(this.projectId, 5);
  }
  fundProjectTen() {
    console.log("funded");
    this.projectService.fundProject(this.projectId, 10);
  }
  fundProjectTwenty() {
    console.log("funded");
    this.projectService.fundProject(this.projectId, 20);
  }
  fundProjectFifty() {
    console.log("funded");
    this.projectService.fundProject(this.projectId, 50);
  }
  fundProjectHundred() {
    console.log("funded");
    this.projectService.fundProject(this.projectId, 100);
  }

}
