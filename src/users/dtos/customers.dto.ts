import {
  IsString,
  IsNotEmpty,
  IsPhoneNumber,
  ValidateNested,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { CreateAddressDto } from './address.dto';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  readonly phone: string;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreateAddressDto)
  readonly address: CreateAddressDto[];
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
