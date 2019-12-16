import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabPendientesPage } from './tab-pendientes.page';

describe('TabPendientesPage', () => {
  let component: TabPendientesPage;
  let fixture: ComponentFixture<TabPendientesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabPendientesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabPendientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
