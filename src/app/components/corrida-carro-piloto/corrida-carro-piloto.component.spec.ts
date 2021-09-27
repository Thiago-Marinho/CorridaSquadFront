import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorridaCarroPilotoComponent } from './corrida-carro-piloto.component';

describe('CorridaCarroPilotoComponent', () => {
  let component: CorridaCarroPilotoComponent;
  let fixture: ComponentFixture<CorridaCarroPilotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorridaCarroPilotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorridaCarroPilotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
