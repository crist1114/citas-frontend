import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia crearse', () => {
    expect(component).toBeInstanceOf(HomeComponent);
  });

  it('deberia cargar titulo OdontoCeiba', () => {

    const debugHome : DebugElement = fixture.debugElement;
    const elementHome : HTMLElement = debugHome.nativeElement;
    const titulo = elementHome.querySelector('h1').textContent;
    expect(titulo).toBe('OdontoCeiba');
  });

  it('deberia cargar descripcion Lorem', () => {

    const debugHome : DebugElement = fixture.debugElement;
    const elementHome : HTMLElement = debugHome.nativeElement;
    const lorem = elementHome.querySelector('p').textContent;
    expect(lorem).toContain('Lorem ipsum dolor sit amet consectetur');
  });

  it('deberia crear mat-card', () => {

    const debugHome : DebugElement = fixture.debugElement;
    const elementHome : HTMLElement = debugHome.nativeElement;
    const card = elementHome.querySelector('mat-card');
    expect(card).toBeDefined();
  });



});
