import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dev-help',
  templateUrl: './dev-help.component.html',
  styleUrls: ['./dev-help.component.css']
})
export class DevHelpComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {

  }

}
