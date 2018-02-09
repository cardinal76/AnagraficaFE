import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnListaComponent } from './an-lista.component';

describe('AnListaComponent', () => {
  let component: AnListaComponent;
  let fixture: ComponentFixture<AnListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
