import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Create action',
      payload,
    };
  }
}
