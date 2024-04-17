import { TestBed } from '@angular/core/testing';
import { FavoriteHabbitService } from './favorite-habbit.service';

describe('FavouriteHabbitService', () => {
  let service: FavoriteHabbitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteHabbitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});