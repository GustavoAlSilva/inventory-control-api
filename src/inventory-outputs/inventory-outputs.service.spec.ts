import { Test, TestingModule } from '@nestjs/testing';
import { InventoryOutputsService } from './inventory-outputs.service';

describe('InventoryOutputsService', () => {
  let service: InventoryOutputsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InventoryOutputsService],
    }).compile();

    service = module.get<InventoryOutputsService>(InventoryOutputsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
