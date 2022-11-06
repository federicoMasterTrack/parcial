import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantasComponent } from './plantas.component';

@NgModule({
  exports: [PlantasComponent],
  imports: [
    CommonModule
  ],
  declarations: [PlantasComponent]
})
export class PlantasModule { }
