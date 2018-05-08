import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styles: []
})
export class PlanComponent implements OnInit {

  plan:number;

  constructor(
    private _activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this._activatedRoute.params
        .subscribe(params =>{

          this.plan = params.id;
          console.log(this.plan);
        })
  }

}
