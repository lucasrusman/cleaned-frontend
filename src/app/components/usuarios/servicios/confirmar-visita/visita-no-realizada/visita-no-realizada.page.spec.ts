import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisitaNoRealizadaPage } from './visita-no-realizada.page';

describe('VisitaNoRealizadaPage', () => {
  let component: VisitaNoRealizadaPage;
  let fixture: ComponentFixture<VisitaNoRealizadaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitaNoRealizadaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisitaNoRealizadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
