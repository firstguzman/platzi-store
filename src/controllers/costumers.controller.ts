import { Body, Controller, Post } from '@nestjs/common';

@Controller('costumers')
export class CostumersController {
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Create action',
      payload,
    };
  }
}
