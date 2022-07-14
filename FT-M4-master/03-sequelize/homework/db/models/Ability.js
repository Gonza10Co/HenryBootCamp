const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Ability",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: "compositeIndex",
      },
      description: {
        type: DataTypes.TEXT,
      },
      mana_cost: {
        type: DataTypes.FLOAT,
        allowNull: false,
        unique: "compositeIndex",
        validate: {
          min: 10,
          max: 250,
        },
      },
      summary: {
        type: DataTypes.VIRTUAL,
        get() {
          return `${this.name} (${Math.floor(
            this.mana_cost
          )} points of mana) - Description: ${this.description}`;
        },
        set() {
          throw new Error("Do not try to set the `fullName` value!");
        },
      },
    },
    {
      timestamps: false,
    }
  );
};
