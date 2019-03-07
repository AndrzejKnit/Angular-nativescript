import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonsService } from './person.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})

export class PersonsComponent implements OnInit, OnDestroy {
 personList: string[];
 private personListSubs: Subscription;
// private personService: PersonsService;

 constructor(private prsService: PersonsService) {
  //this.personList = prsService.persons;
 // this.personService = prsService;
 }

 ngOnInit() {
   this.prsService.fetchPersons();
   this.personListSubs = this.prsService.personChanged.subscribe(persons => {
     this.personList = persons;
   });
   this.prsService.fetchPersons();
 }

 onRemovePerson(personName: string) {
  this.prsService.removePerson(personName);
 }

 ngOnDestroy() {
   this.personListSubs.unsubscribe();
 }
}
