import { Test, TestingModule } from '@nestjs/testing';
import { InventoryInputsController } from './inventory-inputs.controller';
import { InventoryInputsService } from './inventory-inputs.service';

describe('InventoryInputsController', () => {
  let controller: InventoryInputsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InventoryInputsController],
      providers: [InventoryInputsService],
    }).compile();

    controller = module.get<InventoryInputsController>(InventoryInputsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
