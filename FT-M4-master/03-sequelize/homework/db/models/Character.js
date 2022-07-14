const { DataTypes } = require("sequelize");

const date = new Date();
const localTimezone = date.getTimezoneOffset() * 60 * 1000;
let localTime = date - localTimezone;
localTime = new Date(localTime);

module.exports = (sequelize) => {
  sequelize.define(
    "Character",
    {
      code: {
        type: DataTypes.STRING(5),
        allowNull: false,
        primaryKey: true,
        validate: {
          notHenry(value) {
            if (value.toLowerCase() === "henry")
              throw new Error("Value not allowed!");
          },
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notIn: [["Henry", "SoyHenry", "Soy Henry"]],
        },
      },
      age: {
        type: DataTypes.INTEGER,
        get() {
          const age = this.getDataValue("age");
          return age ? age + " years old" : null;
        },
      },
      race: {
        type: DataTypes.ENUM(
          "Human",
          "Elf",
          "Machine",
          "Demon",
          "Animal",
          "Other"
        ),
        defaultValue: "Other",
      },
      hp: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      mana: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      date_added: {
        type: DataTypes.DATEONLY,
        defaultValue: new Date().toISOString().split("T")[0],
      },
    },
    {
      timestamps: false,
      // createdAt: false,
      // updatedAt: "date_added",
    }
  );
};
