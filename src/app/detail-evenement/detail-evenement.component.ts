import { Component, OnInit } from '@angular/core';
import { Evenement } from '../model/evenement';
import { Router } from '@angular/router';
import { EvenementService } from '../service/evenement.service';

@Component({
  selector: 'app-detail-evenement',
  templateUrl: "./detail-evenement.html",
  styleUrls: ["./detail-Evenement.css"],
})
export class DetailEvenementComponent implements OnInit {
selectedEvenement: Evenement;
  constructor(
    private routeur: Router,
    private evenementsService: EvenementService
  ) { }

  ngOnInit(): void {
    this.getSelectedEvenement();
  }

  getSelectedEvenement(): void {
    this.selectedEvenement = this.evenementsService.getSelectedEvenement();
  }

  navigateToList(): void {
    this.routeur.navigateByUrl("evenement");
  }

}
