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

In your component ts, import FormGroup, FormBuilder and Validators, create a form and implement os NgOnInit your form:

```typescript
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export class AppComponent implements OnInit{
 form!: FormGroup

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
      mask: [
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
Then, in your Component HTML file put this:

```html
<form [formGroup]="form" >
          <div class="row">
            <ngx-input-text class="col-sm-4" formControlName="text"  type="text" label="Text" id="text"  />
            <ngx-input-text class="col-sm-4" mask="(00) 0 0000-0000" formControlName="mask"  type="text" label="Text with mask" id="mask"  />
            <ngx-input-text class="col-sm-4" formControlName="email"  type="email" label="Email" id="email"  />
          </div>
          <div class="row">
            <ngx-input-text class="col-sm-4" formControlName="number"  type="number" label="Number" id="number"  />
            <ngx-input-text class="col-sm-4" formControlName="date"  type="date" label="Date" id="date"  />
            <ngx-input-text class="col-sm-4" formControlName="time"  type="time" label="Time" id="time"  />
          </div>
          <div class="row">
            <ngx-input-text class="col-sm-12" formControlName="obs"  type="textarea" label="Description" id="obs"  />
          </div>
      </form>
```
