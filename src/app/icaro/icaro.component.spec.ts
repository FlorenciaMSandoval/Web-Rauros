import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcaroComponent } from './icaro.component';

describe('IcaroComponent', () => {
  let component: IcaroComponent;
  let fixture: ComponentFixture<IcaroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcaroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcaroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
