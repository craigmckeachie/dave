import { Component, OnInit } from '@angular/core';
import { DecedentService } from '../shared/decedent.service';
import { Decedent } from '../shared/decedent.model';

@Component({
  selector: 'app-decedent-detail',
  templateUrl: './decedent-detail.component.html',
  styleUrls: ['./decedent-detail.component.css']
})
export class DecedentDetailComponent implements OnInit {
  decedent: Decedent;
  errorMessage: string;
  constructor(private decedentService: DecedentService) { }

  ngOnInit() {
    this.decedentService
      .findById(5)
      .subscribe(d => this.decedent = d);
      // , e => this.errorMessage = e
  }

}


