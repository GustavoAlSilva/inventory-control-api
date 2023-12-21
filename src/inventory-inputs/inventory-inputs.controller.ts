import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { InventoryInputsService } from './inventory-inputs.service';
import { CreateInventoryInputDto } from './dto/create-inventory-input.dto';

@Controller('inventory-inputs')
export class InventoryInputsController {
  constructor(
    private readonly inventoryInputsService: InventoryInputsService,
  ) {}

  @Post()
  create(@Body() createInventoryInputDto: CreateInventoryInputDto) {
    return this.inventoryInputsService.create(createInventoryInputDto);
  }

  @Get()
  findAll() {
    return this.inventoryInputsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inventoryInputsService.findOne(+id);
  }
}
