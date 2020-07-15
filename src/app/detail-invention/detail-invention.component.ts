import { Component, OnInit } from '@angular/core';
import { Invention } from '../model/invention';
import { Router } from '@angular/router';
import { InventionService } from "../service/invention.service";

@Component({
  selector: 'app-detail-invention',
  templateUrl: "./detail-invention.html",
  styleUrls: ["./detail-invention.css"],
})
export class DetailInventionComponent implements OnInit {
selectedInvention: Invention;
  invention: Invention;
  
// detailInvention: Invention;
  constructor(
    private router: Router,
    private inventionsService: InventionService
  ) { }

  ngOnInit(): void {
    this.getSelectedInvention();
  }

  getSelectedInvention(): void {
    this.selectedInvention = this.inventionsService.getSelectedInvention();
  }

  // getDetailInvention(): void {
  //   this.detailInvention = this.inventionsService.getDetailInvention();
  // }

  navigateToList(): void {
    this.router.navigateByUrl("invention");
  }

}
