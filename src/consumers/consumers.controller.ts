import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ConsumerClass } from './shared/consumer.class';
import { ConsumersService } from './shared/consumers.service';

@Controller('consumers')
export class ConsumersController {
  constructor (private consumersService: ConsumersService) { }

  @Get()
  async getAll (): Promise<ConsumerClass[]> {
    return this.consumersService.getAll()
  }

  @Get(':id')
  async getById (@Param('id') id: number): Promise<ConsumerClass> {
    return this.consumersService.getById(id)
  }

  @Get('consumer/:fullName')
  async getByState (@Param('fullName') fullName: string): Promise<ConsumerClass[]> {
    return this.consumersService.getByName(fullName)
  }

  @Post()
  async create (@Body() consumer: ConsumerClass): Promise<ConsumerClass> {
    return this.consumersService.create(consumer)
  }

  @Put(':id')
  async update (@Param('id') id: number, @Body() consumer: ConsumerClass): Promise<ConsumerClass> {
    consumer.id = id
    return this.consumersService.update(consumer)
  }

  @Delete(':id')
  async delete (@Param('id') id: number) {
    this.consumersService.delete(id)
  }
}

//TODO Retornar status Code de acordo com o retorno. Validar response