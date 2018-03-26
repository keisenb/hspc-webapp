import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedTeamListComponent } from './advanced-team-list.component';

describe('AdvancedTeamListComponent', () => {
  let component: AdvancedTeamListComponent;
  let fixture: ComponentFixture<AdvancedTeamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedTeamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedTeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
