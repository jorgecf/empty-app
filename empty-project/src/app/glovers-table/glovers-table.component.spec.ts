import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from 'protractor';

import { GloversTableComponent } from './glovers-table.component';

describe('GloversTableComponent', () => {
  let component: GloversTableComponent;
  let fixture: ComponentFixture<GloversTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GloversTableComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GloversTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a warning if no glovers present', () => {
    fixture = TestBed.createComponent(GloversTableComponent);
    const element = fixture.nativeElement;

    expect(element.query(By.css(".empty-warning")).content).toBe("No glovers");

    fixture.componentInstance.gloversList = [{ id: 1, name: "One glover" }];

    expect(element.querySelector(".empty-warning").content).toBeUndefined();
    expect(element.querySelector("#glovers-table").content).toBeDefined();
  });

  it('should remove users', () => {
    fixture = TestBed.createComponent(GloversTableComponent);
    const element = fixture.nativeElement;
    fixture.componentInstance.gloversList = [{ id: 1, name: "One glover" }];

    const button: HTMLButtonElement = element.querySelector("#remove-button-0");
    expect(button).toBeDefined();

    fixture.componentInstance.removeGlover(1);
    expect(element.query(By.css(".empty-warning")).content).toBe("No glovers");
    expect(button).toBeDefined();
  });
});
