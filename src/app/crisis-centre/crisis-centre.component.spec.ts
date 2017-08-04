import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisCentreComponent } from './crisis-centre.component';

describe('CrisisCentreComponent', () => {
  let component: CrisisCentreComponent;
  let fixture: ComponentFixture<CrisisCentreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrisisCentreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisisCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
