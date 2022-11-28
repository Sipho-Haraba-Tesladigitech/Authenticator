import { TestBed } from '@angular/core/testing';

import { CognitoAPIService } from './cognito-api.service';

describe('CognitoAPIService', () => {
  let service: CognitoAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CognitoAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
