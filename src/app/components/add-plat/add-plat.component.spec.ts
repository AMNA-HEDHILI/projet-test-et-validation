import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlatComponent } from './add-plat.component';

describe('AddPlatComponent', () => {
  let component: AddPlatComponent;
  let fixture: ComponentFixture<AddPlatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
