import { Component, OnInit } from '@angular/core';
import { Planta } from './Planta';
import { PlantaService } from './planta.service';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})
export class PlantasComponent implements OnInit {
  plantas: Planta[]=[];
  TPExterior: number=0;
  TPInterior: number=0;
  constructor(private plantasService: PlantaService) { }

  ngOnInit() {
    this.getPlantas();
  }

  getPlantas(){
    this.plantasService.getPlatas().subscribe((plantas_)=> {
      this.plantas = plantas_;
      this.TPInterior =this.plantas.filter(value => value.tipo === "Interior").length;
      this.TPExterior =this.plantas.filter(value => value.tipo === "Exterior").length;

    });
  }

}
