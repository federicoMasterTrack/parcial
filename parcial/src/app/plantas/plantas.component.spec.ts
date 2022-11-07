/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


import { PlantasComponent } from './plantas.component';

import { PlantaService } from './planta.service';
import { Planta } from './Planta';

describe('PlantasComponent', () => {
  let component: PlantasComponent;
  let fixture: ComponentFixture<PlantasComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantasComponent ],
      providers: [ PlantaService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantasComponent);
    component = fixture.componentInstance;
    component.plantas = [
      new Planta(1,"Lengua de vaca","Interior", 140, "Templado, cálido","Tierra orgánica con buen drenaje, arena, cascarilla de arroz"),
      new Planta(2,"Chachafruto","Exterior", 1000, "Todos","Tierra orgánica con buen drenaje, arena, cascarilla de arroz"),
      new Planta(3,"Lengua de vaca","Interior", 140, "Templado, cálido","Tierra orgánica con buen drenaje, arena, cascarilla de arroz")

    ]
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });




});
