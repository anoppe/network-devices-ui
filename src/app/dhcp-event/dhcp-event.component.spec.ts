import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhcpEventComponent } from './dhcp-event.component';

describe('DhcpEventComponent', () => {
  let component: DhcpEventComponent;
  let fixture: ComponentFixture<DhcpEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhcpEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhcpEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
