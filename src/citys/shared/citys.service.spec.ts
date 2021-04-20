import { Test, TestingModule } from '@nestjs/testing';
import { CitysService } from './citys.service';

describe('CitysService', () => {
  let provider: CitysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CitysService],
    }).compile();

    provider = module.get<CitysService>(CitysService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
