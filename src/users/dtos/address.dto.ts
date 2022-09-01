import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateAddressDto {
  @IsString()
  @IsNotEmpty()
  readonly country: string;

  @IsString()
  @IsNotEmpty()
  readonly city: string;

  @IsString()
  @IsNotEmpty()
  readonly street: string;

  readonly address: any;
}

export class UpdateAddressDto extends PartialType(CreateAddressDto) {}
