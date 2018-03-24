import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private titleService: Title, private http: Http) { }

  baseUrl = environment.baseUrl;

  ngOnInit() {
    this.titleService.setTitle( 'Judgr - Dashboard' );

  }




}
