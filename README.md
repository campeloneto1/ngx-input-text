# NgxInputText

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## About

Form Input with label, validator and mask using Bootstrap Css

## Getting started

Install de Ngx Input Text using NPM
```
npm install ngx-input-text

```
Import in your NgModel
```typescript
import { NgModule } from '@angular/core';
import { NgxInputTextModule } from 'ngx-input-text';

@NgModule({
  imports: [
    NgxInputTextModule
  ],
})
export class MyModule {}

```

In your component import FormGroup, FormBuilder and Validators, create a form and implement os NgOnInit your form:

```typescript
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export class AppComponent implements OnInit{
 form!: FormGroup

ngOnInit(): void {
    this.form = this.formBuilder.group({     
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(150),
        ]),
      ],
      phone: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
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

```
