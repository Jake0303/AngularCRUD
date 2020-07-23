import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesUpdateComponent } from './articles-update.component';

describe('ArticlesUpdateComponent', () => {
  let component: ArticlesUpdateComponent;
  let fixture: ComponentFixture<ArticlesUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
