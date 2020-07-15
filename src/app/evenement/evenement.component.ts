import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evenement } from '../model/evenement';
import { EvenementService } from '../service/evenement.service';

@Component({
  selector: 'app-evenement',
  templateUrl: "./evenement.html",
  styleUrls: ["./evenement.css"]
})
export class EvenementComponent implements OnInit {
evenements: Evenement[];
  constructor(
    private routeur: Router,
    private evenementsService: EvenementService
  ) { }

  ngOnInit(): void {
    this.getEvenements();
  }

  getEvenements(): void {
    this.evenements = this.evenementsService.getEvenements();
  }

  navigateToDetails(evenement: Evenement): void {
    this.evenementsService.setSelectedEvenement(evenement);
    this.routeur.navigateByUrl("evenement/detail");
  }

  returnEventPrehistoire(evenement: Evenement): void {
    return Evenement[1];
  }

}
