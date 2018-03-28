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

  private beginnerTeams$: Array<Team>;
  private advancedTeams$: Array<Team>;
  private beginnerProblems$: Array<Problem>;
  private advancedProblems$: Array<Problem>;

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
         this.beginnerTeams$ = res.json();
      },
      err => {
        // todo handle errors
      });
  }

  AdvancedTeams() {
    this.dashboardService.AdvancedTeams().subscribe(
      res => {
        this.advancedTeams$ = res.json();
      },
      err => {
        // todo handle errors
      });
  }

  BeginnerProblems() {
    this.dashboardService.BeginnerProblems().subscribe(
      res => {
       this.beginnerProblems$ = res.json();
      },
      err => {
        // todo handle errors
      });
  }

  AdvancedProblems() {
    this.dashboardService.AdvancedProblems().subscribe(
      res => {
       this.advancedProblems$ = res.json();
      },
      err => {
        // todo handle errors
      });
  }



}
