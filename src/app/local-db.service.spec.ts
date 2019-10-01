import { TestBed } from '@angular/core/testing';

import { InMemPostService } from './in-mem-post.service';

describe('InMemPostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemPostService = TestBed.get(InMemPostService);
    expect(service).toBeTruthy();
  });
});
