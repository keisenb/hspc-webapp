import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from '../_services/dashboard.service';
import { Team } from '../_models/Team';
import { ToastService } from '../_services/toast.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  constructor(private dashboardService: DashboardService,
    private toastService: ToastService) { }

  private teams$: Array<Team>;
  private markedLoading = false;
  private correctLoading = false;
  private incorrectLoading = false;
  private disabled = true;

  @Input() title = 'Team';
  @Input() beginner = false;
  @Input() questionId: number;

  ngOnInit() {
    this.teams$ = this.GetTeams(this.beginner);
  }

  GetTeams(beginner: boolean): Array<Team> {
    // need to disable correct buttons based on returned values
    if (beginner) {
      this.dashboardService.BeginnerTeams().subscribe(res => {
        const body = <Array<Team>>res.json();
        console.log(body);
        this.teams$ = res.json();
        return body;
      });
    } else {
      this.dashboardService.AdvancedTeams().subscribe(res => {
        const body = <Array<Team>>res.json();
        console.log(body);
        this.teams$ = res.json();
        return body;
      });
    }
    return [];
  }

  markForJudging(id: number) {
    this.markedLoading = true;
    // todo mark a team for judging here
    console.log(id);
    this.dashboardService.MarkTeamForJudging(3, id).subscribe(res => {
      if (res.ok) {
        this.disabled = false;
        this.markedLoading = false;
        this.toastService.toast('Marked for judging', 'fa-check', 'success', '3000');
      }
    },
    err => {
      this.toastService.toast('Error marking team for judging!', 'fa-exclamation-circle', 'danger', '3000');
      this.markedLoading = false;
      console.log(err);
    });

  }

  correctAnswer(id: number) {
    this.correctLoading = true;
    // todo mark a team for correct answer here
    // disable loading
    this.toastService.toast('Correct Answer submitted', 'fa-check', 'success', '3000');
  }

  incorrectAnswer(id: number) {
    this.correctLoading = true;
    // todo mark a team for incorrect answer here
    // disable loading
    this.toastService.toast('Incorrect Answer submitted', 'fa-check', 'success', '3000');
  }

}
