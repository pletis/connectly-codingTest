"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("social_logins", "user_id", {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: "users",
        },
        key: "id",
      },
      allowNull: false,
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("social_logins", "user_id");
  },
};
