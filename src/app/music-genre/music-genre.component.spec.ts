import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicGenreComponent } from './music-genre.component';

describe('MusicGenreComponent', () => {
  let component: MusicGenreComponent;
  let fixture: ComponentFixture<MusicGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicGenreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MusicGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
