import  Sequelize  from "sequelize";

const bd = new Sequelize('rider','root','1234',{
    host: 'localhost',
    dialect: 'mysql'   
})

export default bd;