import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {

  ageSubject$: Subject<number> = new Subject<number>();

  age: number = 0;

  constructor() {
    this.ageSubject$.subscribe(age => this.age = age);
  }

  next() {
    const age = Math.floor((Math.random() * 100) + 1);
    console.log('Subject', 'Next value', age);
    this.ageSubject$.next(age);
  }

  complete() {
    // const age = Math.floor((Math.random() * 100) + 1);
    console.log('Subject', 'Complete');
    this.ageSubject$.complete();
  }
}
