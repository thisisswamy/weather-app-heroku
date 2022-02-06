import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenot-found',
  templateUrl: './pagenot-found.component.html',
  styleUrls: ['./pagenot-found.component.css']
})
export class PagenotFoundComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  onClick(){
    this._router.navigate(['/login']);

  }
}
