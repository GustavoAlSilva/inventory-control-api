import { Module } from '@nestjs/common';
import { InventoryOutputsService } from './inventory-outputs.service';
import { InventoryOutputsController } from './inventory-outputs.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [InventoryOutputsController],
  providers: [InventoryOutputsService],
})
export class InventoryOutputsModule {}
