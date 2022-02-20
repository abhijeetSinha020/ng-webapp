import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log("Settings Module Loaded");
    this.navigateToSettingsLanding();
  }

  navigateToSettingsLanding() {
  this.router.navigate(["/settings/landing"]);
  }
}
