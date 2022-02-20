import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-territory',
  templateUrl: './territory.component.html',
  styleUrls: ['./territory.component.css']
})
export class TerritoryComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
   this.navigateToTerritoryLanding();
  }


  navigateToTerritoryLanding() {
    this.router.navigate(["/settings/territory/landing"]);
    }
}
