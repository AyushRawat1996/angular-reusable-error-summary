import { Component } from "@angular/core";
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup
} from "@angular/forms";

/** @title Form field with error messages */
@Component({
  selector: "form-field-error-example",
  templateUrl: "form-field-error-example.html",
  styleUrls: ["form-field-error-example.css"]
})
export class FormFieldErrorExample {
  email = new FormControl("", [Validators.required, Validators.email]);
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      email: [
        ,
        [
          Validators.required,
          Validators.email,
          Validators.pattern(new RegExp(/^[a-zA-Z][a-zA-Z\s]*[a-zA-Z]$/))
        ]
      ],
      name: []
    });
  }
}

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
