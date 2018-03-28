import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { DashboardService } from '../_services/dashboard.service';
import { Problem } from '../_models/Problem';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private problems$: Array<Problem>;
  private problemId: number;
  private problemName: string;

  constructor(private titleService: Title, private http: Http, private dashboardService: DashboardService) { }

  selected = false;

  ngOnInit() {
    this.titleService.setTitle( 'Judgr - Dashboard' );
    this.GetProblems();

  }


  showList() {
    console.log('working');
    this.GetProblems();
    this.selected = !this.selected;
  }

  GetProblems() {
    // need to disable correct buttons based on returned values
    this.dashboardService.Problems().subscribe(res => {
      console.log(res.json());
      this.problems$ = res.json();
    });
  }

  showProblem(id: number, name: string) {
    this.selected = true;
    this.problemId = id;
    this.problemName = name;
  }

}
