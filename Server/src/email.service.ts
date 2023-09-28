// import { Injectable } from '@nestjs/common';
// import * as nodemailer from 'nodemailer';
// import emailConfig from './email.config';

// @Injectable()
// export class EmailService {
//   private transporter;

//   constructor() {
//     this.transporter = nodemailer.createTransport(emailConfig);
//   }

//   async sendEmail(to: string, subject: string, text: string): Promise<void> {
//     const mailOptions = {
//       from: 'tucorreo@tudominio.com',
//       to,
//       subject,
//       text,
//     };

//     try {
//       await this.transporter.sendMail(mailOptions);
//       console.log('Correo electrónico enviado con éxito');
//     } catch (error) {
//       console.error('Error al enviar el correo electrónico:', error);
//     }
//   }
// }
