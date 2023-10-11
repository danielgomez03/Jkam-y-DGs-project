import { DataTypes } from 'sequelize';
import { Table, Column, Model } from 'sequelize-typescript'; // Asegúrate de tener instalado sequelize-typescript

@Table({
  tableName: 'User', // El nombre de la tabla en tu base de datos
  timestamps: false, // Si tu tabla tiene campos de timestamps (created_at, updated_at)
})
export class User extends Model {
  @Column({
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataTypes.STRING,
  })
  username: string;
}

