import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAllOrdersComponent } from './user-all-orders.component';

describe('UserAllOrdersComponent', () => {
  let component: UserAllOrdersComponent;
  let fixture: ComponentFixture<UserAllOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAllOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAllOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
