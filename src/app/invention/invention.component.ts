import { Component, OnInit } from '@angular/core';
import { Invention } from '../model/invention';
import { Router } from '@angular/router';
import { InventionService } from '../service/invention.service';

@Component({
  selector: 'app-invention',
  templateUrl: "./invention.html",
  styleUrls: ["./invention.css"],
})
export class InventionComponent implements OnInit {
inventions: Invention[];
  constructor(
    private router: Router,
    private inventionsService: InventionService
  ) { }

  ngOnInit(): void {
    this.getInventions();
  }

  getInventions(): void {
    this.inventions = this.inventionsService.getInventions();
  }

  navigateToDetails(invention: Invention): void {
    this.inventionsService.setSelectedInvention(invention);
    this.router.navigateByUrl("invention/detail");
  }

}
