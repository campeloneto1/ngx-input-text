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

In your component, import FormGroup, FormBuilder and Validators, create a form and implement os NgOnInit your form:

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
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
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

```
Then, in your HTML file put this:

```html
<form [formGroup]="form" style="width: 100%;">
          <div class="row">
            <ngx-input-text class="col-sm-4" formControlName="name"  tipo="text" label="Name" id="name"  />
            <ngx-input-text class="col-sm-4" mascara="(00) 0 0000-0000" formControlName="phone"  tipo="text" label="Phone with mask" id="phone"  />
            <ngx-input-text class="col-sm-4" formControlName="email"  tipo="email" label="Email" id="email"  />
          </div>
          <div class="row">
            <ngx-input-text class="col-sm-4" formControlName="number"  tipo="number" label="Number" id="number"  />
            <ngx-input-text class="col-sm-4" formControlName="date"  tipo="date" label="Date" id="date"  />
            <ngx-input-text class="col-sm-4" formControlName="time"  tipo="time" label="Time" id="time"  />
          </div>
          <div class="row">
            <ngx-input-text class="col-sm-12" formControlName="obs"  tipo="textarea" label="Description" id="obs"  />
          </div>
      </form>
```
