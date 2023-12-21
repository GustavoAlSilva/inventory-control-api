import { Test, TestingModule } from '@nestjs/testing';
import { InventoryInputsService } from './inventory-inputs.service';

describe('InventoryInputsService', () => {
  let service: InventoryInputsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InventoryInputsService],
    }).compile();

    service = module.get<InventoryInputsService>(InventoryInputsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
