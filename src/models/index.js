import Sequelize from 'sequelize';
 
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: 'postgres',
  },
);

const models = {
  User: require('./user')(sequelize, Sequelize.DataTypes),
  Message: require('./message')(sequelize, Sequelize.DataTypes),
};

console.log(models.User)
 
Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});
 
export { sequelize };
 
export default models;