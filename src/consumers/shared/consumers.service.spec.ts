import { Test, TestingModule } from '@nestjs/testing';
import { ConsumersService } from './consumers.service';

describe('ConsumersService', () => {
  let provider: ConsumersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsumersService],
    }).compile();

    provider = module.get<ConsumersService>(ConsumersService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
