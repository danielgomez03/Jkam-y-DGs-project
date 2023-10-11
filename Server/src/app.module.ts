import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize'; // Asegúrate de importar SequelizeModule
import { UserModule } from './modules/user/user.module'; // Asegúrate de importar UserModule
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExampleModule } from './modules/example/example.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    }),
    UserModule, // Registra el módulo de usuarios
    ExampleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

