import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pokeform',
  templateUrl: './pokeform.component.html',
  styleUrls: ['./pokeform.component.css']
})
export class PokeformComponent {

  pokeForm: FormGroup;

  constructor(
    private builderForm: FormBuilder
  ) { 
    this.pokeForm = this.builderForm.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.email,
        Validators.required
      ])],
      password: ['', Validators.required]
    });
  }

    sendRequest(pokeFormValues) {
      console.log(pokeFormValues);
    }
}
