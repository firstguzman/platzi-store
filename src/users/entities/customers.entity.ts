import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Address, AddressSchema } from './address.entity';

@Schema()
export class Customer {
  @Prop({ required: true })
  name: string;

  @Prop()
  lastName: string;

  @Prop({ required: true })
  phone: string;

  @Prop({
    type: [AddressSchema],
  })
  address: Types.Array<Address>;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
