import bd from '../bases/mibase.js';
import { DataTypes } from 'sequelize';


    const datos = bd.define('aprendiz', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
        },
        nombre: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        apellido: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        
      });
    

export default datos;