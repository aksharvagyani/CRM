/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CRMComponent } from './crm.component';

describe('CRMComponent', () => {
  let component: CRMComponent;
  let fixture: ComponentFixture<CRMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
