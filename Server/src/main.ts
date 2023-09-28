import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as express from 'express';
import helmet from "helmet";
import * as csurf from 'csurf';
import * as dotenv from 'dotenv';
import * as cookieParser from 'cookie-parser'; 

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);

  // Configurar middleware
  app.use(morgan('dev'));
  app.use(cors());
  app.use(helmet());

  // Configurar cookieParser antes de csurf
  app.use(cookieParser());

  // Configurar csurf como middleware global
  const csrfProtection = csurf({ cookie: true });
  app.use(csrfProtection);

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Manejo de errores 
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({
      statusCode: 500,
      message: 'Internal server error',
    });
  });

  const port = process.env.PORT || 3001; // Puerto configurable
  await app.listen(port);
}

bootstrap();
