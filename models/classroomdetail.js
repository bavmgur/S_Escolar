'use strict';
module.exports = (sequelize, DataTypes) => {
  const ClassroomDetail = sequelize.define('ClassroomDetail', {
    tutor: DataTypes.STRING
  }, {});
  ClassroomDetail.associate = function(models) {
    // associations can be defined here
  };
  return ClassroomDetail;
};