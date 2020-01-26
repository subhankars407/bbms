import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNGOComponent } from './add-ngo.component';

describe('AddNGOComponent', () => {
  let component: AddNGOComponent;
  let fixture: ComponentFixture<AddNGOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNGOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNGOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
