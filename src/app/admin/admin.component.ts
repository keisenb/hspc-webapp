import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../_services/dashboard.service';
import { Team } from '../_models/Team';
import { Problem } from '../_models/Problem';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.BeginnerTeams();
    this.AdvancedTeams();
    this.BeginnerProblems();
    this.AdvancedProblems();

  }


  BeginnerTeams() {
    this.dashboardService.BeginnerTeams().subscribe(
      res => {
       // todo set variable to use in html page
        const result: Array<Team> = res.json();
        result.forEach(element => {
          console.log(element.id);
        });
      },
      err => {
        // todo handle errors
      });
  }

  AdvancedTeams() {
    this.dashboardService.Advancedteams().subscribe(
      res => {
       // todo set variable to use in html page
        const result: Array<Team> = res.json();
        result.forEach(element => {
          console.log(element.id);
        });
      },
      err => {
        // todo handle errors
      });
  }

  BeginnerProblems() {
    this.dashboardService.BeginnerProblems().subscribe(
      res => {
       // todo set variable to use in html page
        const result: Array<Problem> = res.json();
        result.forEach(element => {
          console.log(element.id);
        });
      },
      err => {
        // todo handle errors
      });
  }

  AdvancedProblems() {
    this.dashboardService.AdvancedProblems().subscribe(
      res => {
       // todo set variable to use in html page
        const result: Array<Problem> = res.json();
        result.forEach(element => {
          console.log(element.id);
        });
      },
      err => {
        // todo handle errors
      });
  }



}
