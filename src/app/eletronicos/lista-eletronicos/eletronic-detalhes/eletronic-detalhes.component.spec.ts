import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EletronicDetalhesComponent } from './eletronic-detalhes.component';

describe('EletronicDetalhesComponent', () => {
  let component: EletronicDetalhesComponent;
  let fixture: ComponentFixture<EletronicDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EletronicDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EletronicDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
