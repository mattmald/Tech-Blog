const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const User = require("./user");
const Blog = require("./blog");

class Comment extends Model {}

Comment.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull:false,
  },
  blog_id:  {
    type: DataTypes.INTEGER,
    references: {
        model: Blog,
        key: 'id'
      }
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
        model: User,
        key: 'id'
      }
  }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
});

module.exports = Comment;
