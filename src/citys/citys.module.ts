import { Module } from '@nestjs/common';
import { CitysController } from './citys.controller';
import { CitysService } from './shared/citys.service';

@Module({
  controllers:[CitysController],
  providers:[CitysService]
})
export class CitysModule {}
