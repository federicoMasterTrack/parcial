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
  constructor(private plantasService: PlantaService) { }

  ngOnInit() {
    this.getPlantas();
  }

  getPlantas(){
    this.plantasService.getPlatas().subscribe((plantas_)=> {
      this.plantas = plantas_;

    });
  }

}
