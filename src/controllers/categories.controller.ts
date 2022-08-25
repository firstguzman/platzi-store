import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':categoryId')
  getOne(@Param('categoryId') categoryId: string) {
    return `category ${categoryId}`;
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Create action',
      payload,
    };
  }
}
