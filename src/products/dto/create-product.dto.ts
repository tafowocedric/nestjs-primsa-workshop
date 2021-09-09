import {
  IsNotEmpty,
  IsOptional,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @IsOptional()
  @MaxLength(255)
  description?: string;

  @Min(1.0)
  price: number;

  @IsNotEmpty()
  @MinLength(5)
  sku: string;

  published?: boolean;
}
