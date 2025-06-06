import { TestBed } from '@angular/core/testing';

import { CadastroService } from './CadastroService.service';

describe('ServiceService', () => {
  let service: CadastroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
