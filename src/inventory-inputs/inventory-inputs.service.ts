import { Injectable } from '@nestjs/common';
import { CreateInventoryInputDto } from './dto/create-inventory-input.dto';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundError } from '../errors';

@Injectable()
export class InventoryInputsService {
  constructor(private prismaService: PrismaService) {}

  async create(createInventoryInputDto: CreateInventoryInputDto) {
    const product = await this.prismaService.product.findUnique({
      where: { id: createInventoryInputDto.product_id },
    });

    if (!product) {
      throw new NotFoundError('Product not found');
    }

    const result = await this.prismaService.$transaction([
      this.prismaService.inventoryInput.create({
        data: {
          productId: createInventoryInputDto.product_id,
          quantity: createInventoryInputDto.quantity,
          date: createInventoryInputDto.date,
        },
      }),
      this.prismaService.product.update({
        where: { id: createInventoryInputDto.product_id },
        data: {
          quantity: {
            increment: createInventoryInputDto.quantity,
          },
        },
      }),
    ]);

    return result[0];
  }

  findAll() {
    return this.prismaService.inventoryInput.findMany();
  }

  async findOne(id: number) {
    try {
      return await this.prismaService.inventoryInput.findUniqueOrThrow({
        where: { id },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundError(`Inventory Input with ID ${id} not found`);
      }
      throw error;
    }
  }
}
