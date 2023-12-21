import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { InventoryOutputsService } from './inventory-outputs.service';
import { CreateInventoryOutputDto } from './dto/create-inventory-output.dto';

@Controller('inventory-outputs')
export class InventoryOutputsController {
  constructor(
    private readonly inventoryOutputsService: InventoryOutputsService,
  ) {}

  @Post()
  create(@Body() createInventoryOutputDto: CreateInventoryOutputDto) {
    return this.inventoryOutputsService.create(createInventoryOutputDto);
  }

  @Get()
  findAll() {
    return this.inventoryOutputsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inventoryOutputsService.findOne(+id);
  }
}
