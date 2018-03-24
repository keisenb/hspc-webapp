import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from '../../environments/environment';

@Injectable()
export class DashboardService {

  constructor(private http: HttpService) { }


  public BeginnerTeams() {
    return this.http.get(environment.baseUrl + '/teams/beginner');
  }

  public Advancedteams() {
    return this.http.get(environment.baseUrl + '/teams/advanced');
  }

  public Teams() {
    return this.http.get(environment.baseUrl + '/teams');
  }

  public Team(id: number) {
    return this.http.get(environment.baseUrl + '/teams/' + id);
  }

  public Problems() {
    return this.http.get(environment.baseUrl + '/problems');
  }

  public BeginnerProblems() {
    return this.http.get(environment.baseUrl + '/problems/beginner');
  }

  public AdvancedProblems() {
    return this.http.get(environment.baseUrl + '/problems/advanced');
  }

  public Problem(id: number) {
    return this.http.get(environment.baseUrl + '/problems/' + id);
  }

}
