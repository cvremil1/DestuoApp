import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoldDesignPage } from './sold-design.page';

describe('SoldDesignPage', () => {
  let component: SoldDesignPage;
  let fixture: ComponentFixture<SoldDesignPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SoldDesignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
