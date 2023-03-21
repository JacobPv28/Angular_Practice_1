import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
})
export class InputsComponent implements OnInit {
  public Name: String;
  public LastName: String;
  public Email: String;

  constructor() {
    this.LastName = '';
    this.Name = '';
    this.Email = '';
  }

  ngOnInit(): void {}
}
