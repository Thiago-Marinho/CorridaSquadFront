import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroCorridaPilotoComponent } from './carro-corrida-piloto.component';

describe('CarroCorridaPilotoComponent', () => {
  let component: CarroCorridaPilotoComponent;
  let fixture: ComponentFixture<CarroCorridaPilotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarroCorridaPilotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroCorridaPilotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
