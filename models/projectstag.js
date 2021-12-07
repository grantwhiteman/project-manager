'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectsTag extends Model {
    static associate(models) {
      // define association here
    }
  };
  ProjectsTag.init({
    ProjectId: DataTypes.INTEGER,
    TagId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProjectsTag',
  });
  return ProjectsTag;
};