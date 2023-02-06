import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'Ngx-Input-Text';

  form!: FormGroup

  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({     
      text: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(150),
        ]),
      ],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
        ]),
      ],
      mask: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ]),
      ],
      number: [
        '',
        Validators.compose([
          Validators.required,
          Validators.min(0),
          Validators.max(100),
        ]),
      ],
      date: [
        '',
        Validators.compose([
          Validators.required,
        ]),
      ],
      time: [
        '',
        Validators.compose([
          Validators.required,
        ]),
      ],
      obs: [
        '',
        Validators.compose([
          Validators.required,
        ]),
      ],
    
    });
  }

}
