import { Type } from 'class-transformer';
import { IsDate, IsInt, IsNotEmpty, IsPositive } from 'class-validator';

export class CreateInventoryInputDto {
  @IsPositive()
  @IsInt()
  @IsNotEmpty()
  product_id: number;

  @IsPositive()
  @IsInt()
  @IsNotEmpty()
  quantity: number;

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  date: Date;
}
