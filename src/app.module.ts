import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { InventoryInputsModule } from './inventory-inputs/inventory-inputs.module';
import { InventoryOutputsModule } from './inventory-outputs/inventory-outputs.module';

@Module({
  imports: [ProductsModule, InventoryInputsModule, InventoryOutputsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
