import { Injectable } from '@nestjs/common';
import { ConsumerClass } from './consumer.class';

@Injectable()
export class ConsumersService {
  consumers: ConsumerClass[] = [
    { id: 1, fullName: 'Alison Jader', gender: 'MALE', birthdate: '10/02/1988', age: 18, city: 1 }
  ]

  getAll () {
    return this.consumers
  }

  getById (id: number) {
    return this.consumers.find((value) => { return value.id == id })
  }

  getByName (fullName: string) {
    return this.consumers.filter((value) => { return value.fullName == fullName })
  }

  create (consumer: ConsumerClass) {
  //TODO Validar inputs. Inclusive o campo city
    let lastId = 0
    if (this.consumers.length > 0) {
      lastId = this.consumers[this.consumers.length - 1].id
    }
    consumer.id = lastId + 1
    this.consumers.push(consumer)
    return consumer
  }

  update (consumer: ConsumerClass) {
    //TODO validar campos existente que serão utilizados para realizar o update
    const existConsumer = this.getById(consumer.id)
    if (existConsumer) {
      existConsumer.id = consumer.id
      existConsumer.fullName = consumer.fullName
      existConsumer.gender = consumer.gender
      existConsumer.birthdate = consumer.birthdate
      existConsumer.age = consumer.age
      existConsumer.city = consumer.city
    }
    return consumer
  }


  delete (id: number) {
    const index = this.consumers.findIndex((value) => {return value.id == id })
    console.log(index)
    this.consumers.splice(index, 1)

  }

}
