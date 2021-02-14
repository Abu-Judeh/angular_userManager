import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageuplodeComponent } from './imageuplode.component';

describe('ImageuplodeComponent', () => {
  let component: ImageuplodeComponent;
  let fixture: ComponentFixture<ImageuplodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageuplodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageuplodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
