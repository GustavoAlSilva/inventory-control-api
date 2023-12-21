import { Injectable } from '@nestjs/common';
import { CreateInventoryOutputDto } from './dto/create-inventory-output.dto';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundError } from '../errors';

@Injectable()
export class InventoryOutputsService {
  constructor(private prismaService: PrismaService) {}

  async create(createInventoryOutputDto: CreateInventoryOutputDto) {
    const product = await this.prismaService.product.findUnique({
      where: { id: createInventoryOutputDto.product_id },
    });

    if (!product) {
      throw new NotFoundError('Product not found');
    }

    if (product.quantity === 0) {
      throw new Error('Product out of inventory');
    }

    if (createInventoryOutputDto.quantity > product.quantity) {
      throw new Error('Insufficient product quantity');
    }

    const result = await this.prismaService.$transaction([
      this.prismaService.inventoryOutput.create({
        data: {
          productId: createInventoryOutputDto.product_id,
          quantity: createInventoryOutputDto.quantity,
          date: createInventoryOutputDto.date,
        },
      }),
      this.prismaService.product.update({
        where: { id: createInventoryOutputDto.product_id },
        data: {
          quantity: {
            decrement: createInventoryOutputDto.quantity,
          },
        },
      }),
    ]);

    return result[0];
  }

  findAll() {
    return this.prismaService.inventoryOutput.findMany();
  }

  async findOne(id: number) {
    try {
      return await this.prismaService.inventoryOutput.findUniqueOrThrow({
        where: { id },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundError(`Inventory Output with ID ${id} not found`);
      }
      throw error;
    }
  }
}
