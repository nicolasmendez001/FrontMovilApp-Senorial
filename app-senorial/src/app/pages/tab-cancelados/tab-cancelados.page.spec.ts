import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabCanceladosPage } from './tab-cancelados.page';

describe('TabCanceladosPage', () => {
  let component: TabCanceladosPage;
  let fixture: ComponentFixture<TabCanceladosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabCanceladosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabCanceladosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
