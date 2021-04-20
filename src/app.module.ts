import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitysModule } from './citys/citys.module';
import { ConsumersModule } from './consumers/consumers.module';

@Module({
  imports: [CitysModule, ConsumersModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
