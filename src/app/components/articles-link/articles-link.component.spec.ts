import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesLinkComponent } from './articles-link.component';

describe('ArticlesLinkComponent', () => {
  let component: ArticlesLinkComponent;
  let fixture: ComponentFixture<ArticlesLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlesLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlesLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
