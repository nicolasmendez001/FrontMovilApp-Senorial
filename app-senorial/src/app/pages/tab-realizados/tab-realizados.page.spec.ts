import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabRealizadosPage } from './tab-realizados.page';

describe('TabRealizadosPage', () => {
  let component: TabRealizadosPage;
  let fixture: ComponentFixture<TabRealizadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabRealizadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabRealizadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
