import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnCreateComponent } from './an-create.component';

describe('AnCreateComponent', () => {
  let component: AnCreateComponent;
  let fixture: ComponentFixture<AnCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
