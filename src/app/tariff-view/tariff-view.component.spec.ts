import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffViewComponent } from './tariff-view.component';

describe('TariffViewComponent', () => {
  let component: TariffViewComponent;
  let fixture: ComponentFixture<TariffViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TariffViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TariffViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
