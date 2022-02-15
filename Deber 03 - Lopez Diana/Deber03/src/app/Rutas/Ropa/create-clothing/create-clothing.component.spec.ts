import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClothingComponent } from './create-clothing.component';

describe('CreateClothingComponent', () => {
  let component: CreateClothingComponent;
  let fixture: ComponentFixture<CreateClothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateClothingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
