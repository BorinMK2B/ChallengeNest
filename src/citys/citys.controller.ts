import { Controller, Get, Param } from '@nestjs/common';
import { CityClass } from './shared/city.class';
import { CitysService } from './shared/citys.service';

@Controller('citys')
export class CitysController {
  constructor (private citysService: CitysService) { }

  @Get()
  async getAll (): Promise<CityClass[]> {
    return this.citysService.getAll()
  }

  @Get('city/:name')
  async getByName (@Param('name') name: string): Promise<CityClass> {
    return this.citysService.getByName(name)
  }

  @Get('state/:state')
  async getByState (@Param('state') state: string): Promise<CityClass[]> {
    return this.citysService.getByState(state)
  }
}
