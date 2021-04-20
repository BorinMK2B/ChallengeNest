import { Injectable } from '@nestjs/common';
import { CityClass } from './city.class';


@Injectable()
export class CitysService {
  citys: CityClass[] = [
    { id: 1, name: 'Americana', state: 'SP' },
    { id: 2, name: 'Mogi Mirim', state: 'SP' },
    { id: 3, name: 'Passo de Minas', state: 'MG' },
  ]
  getAll () {
    return this.citys
  }

  getByName (name: string) {
    return this.citys.find((value) => { return value.name == name })
  }

  getByState (state: string) {
    return this.citys.filter((value) => { return value.state == state })
  }

}