import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserV1Component } from './create-user-v1.component';

describe('CreateUserV1Component', () => {
  let component: CreateUserV1Component;
  let fixture: ComponentFixture<CreateUserV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
