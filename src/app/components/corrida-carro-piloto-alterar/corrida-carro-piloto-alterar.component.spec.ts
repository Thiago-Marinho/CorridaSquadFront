import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorridaCarroPilotoAlterarComponent } from './corrida-carro-piloto-alterar.component';

describe('CorridaCarroPilotoAlterarComponent', () => {
  let component: CorridaCarroPilotoAlterarComponent;
  let fixture: ComponentFixture<CorridaCarroPilotoAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorridaCarroPilotoAlterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorridaCarroPilotoAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
