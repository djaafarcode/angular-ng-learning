/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BoucleComponent } from './boucle.component';

describe('BoucleComponent', () => {
  let component: BoucleComponent;
  let fixture: ComponentFixture<BoucleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoucleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoucleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
