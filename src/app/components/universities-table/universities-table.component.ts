import {Component, OnInit} from '@angular/core';
import {UniversitiesHttpService} from "../../service/universities-http.service";
import {Router} from "@angular/router";
import {University} from "../../entity/university";

@Component({
  selector: 'app-universities-table',
  templateUrl: './universities-table.component.html',
  styleUrl: './universities-table.component.css'
})
export class UniversitiesTableComponent implements OnInit {
  protected universities : University[] = []
  protected enableSpinner : boolean = false
  constructor(private universitiesHttpService: UniversitiesHttpService) {}

  ngOnInit(): void {
    this.loadUniversities();
  }

  private loadUniversities() {
    this.universitiesHttpService.universitiesReplaySubject.subscribe((universities: University[]) => {
      this.universities = universities
    })
  }

  protected onUserClickedCountry(country: string) {
    this.enableSpinner = true;
    this.universitiesHttpService.setUniversitiesByCountry(country)
    setTimeout(()=> {
      this.enableSpinner = false;
    },1800)
  }
}
