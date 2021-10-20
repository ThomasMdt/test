import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent implements OnInit {
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  public form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      km: new FormControl(null, Validators.required),
      age: new FormControl(null, Validators.required),
      weight: new FormControl(null, Validators.required)
    })
  }

  ngOnInit(): void {

  }
  public submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    }
  }

}
