import { Module } from '@nestjs/common';
import { ExampleController } from './example.controller'; // Importa el controlador
import { ExampleService } from './example.service'; // Importa el servicio

@Module({
  controllers: [ExampleController], // Registra el controlador aquí
  providers: [ExampleService], // Registra el servicio aquí
})
export class ExampleModule {}
