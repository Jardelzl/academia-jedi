import { TestBed } from '@angular/core/testing';

import { EstudanteService } from './estudante.service';

describe('HeroiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstudanteService = TestBed.get(EstudanteService);
    expect(service).toBeTruthy();
  });
});
