import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudResourcesComponent } from './cloud-resources.component';

describe('CloudResourcesComponent', () => {
  let component: CloudResourcesComponent;
  let fixture: ComponentFixture<CloudResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
