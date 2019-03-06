import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class PersonsService {
  personChanged = new Subject<string[]>();
  persons: string[] = ['Max', 'Manuel', 'Anna'];

  addPerson(name: string) {
    this.persons.push(name);
    this.personChanged.next(this.persons);
  }

  removePerson(name: string) {
    this.persons = this.persons.filter(person => {
      return person !== name;
    });
    this.personChanged.next(this.persons);
  }
}
