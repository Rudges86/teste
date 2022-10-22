import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEletronicosComponent } from './lista-eletronicos.component';

describe('ListaEletronicosComponent', () => {
  let component: ListaEletronicosComponent;
  let fixture: ComponentFixture<ListaEletronicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEletronicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEletronicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
