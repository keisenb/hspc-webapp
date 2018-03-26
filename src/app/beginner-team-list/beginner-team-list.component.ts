import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from '../_services/dashboard.service';
import { Team } from '../_models/Team';

@Component({
  selector: 'app-beginner-team-list',
  templateUrl: './beginner-team-list.component.html',
  styleUrls: ['./beginner-team-list.component.css']
})
export class BeginnerTeamListComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  private teams$: Array<Team>;

   @Input() title = 'Team';

  ngOnInit() {
    this.teams$ = this.BeginnerTeams();
  }

  BeginnerTeams(): Array<Team> {
    this.dashboardService.BeginnerTeams().subscribe(res => {
      const body = <Array<Team>> res.json();
      console.log(body);
      this.teams$ = res.json();
      return body;
    });
    return [];
  }

}
