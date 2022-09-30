const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      id: {
          primaryKey: true,
          autoIncrement: true,
          type: DataTypes.INTEGER
        },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING
  },
  { 
      tableName: 'users',
      timestamps: false,
      underscored: true,
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      foreignKey: 'userId',
      as: 'posts'
    })
  }
  
  return User;
};


module.exports = UserModel;