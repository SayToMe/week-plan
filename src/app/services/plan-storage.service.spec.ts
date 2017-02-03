/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlanStorageService } from './plan-storage.service';

describe('PlanStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanStorageService]
    });
  });

  it('should ...', inject([PlanStorageService], (service: PlanStorageService) => {
    expect(service).toBeTruthy();
  }));
});
