import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  aboutusForm = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required]),
    ContactNo: new FormControl('', [Validators.required]),
    Message: new FormControl('', [Validators.required]),
    });
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    alert("Form validated and send successfully!");
    this.aboutusForm.reset();
}
}

