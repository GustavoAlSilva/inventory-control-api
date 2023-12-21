import { Module } from '@nestjs/common';
import { InventoryInputsService } from './inventory-inputs.service';
import { InventoryInputsController } from './inventory-inputs.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [InventoryInputsController],
  providers: [InventoryInputsService],
})
export class InventoryInputsModule {}
