import { Module } from '@nestjs/common';
import { ConsumersController } from './consumers.controller';
import { ConsumersService } from './shared/consumers.service';

@Module({
  controllers:[ConsumersController],
  providers:[ConsumersService]
})
export class ConsumersModule {}
