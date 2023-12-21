import { Test, TestingModule } from '@nestjs/testing';
import { InventoryOutputsController } from './inventory-outputs.controller';
import { InventoryOutputsService } from './inventory-outputs.service';

describe('InventoryOutputsController', () => {
  let controller: InventoryOutputsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InventoryOutputsController],
      providers: [InventoryOutputsService],
    }).compile();

    controller = module.get<InventoryOutputsController>(InventoryOutputsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
