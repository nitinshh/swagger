module.exports = (Sequelize, Sequelize, DataTypes) =>{
    return Sequelize.define("user", {
        ...require('./cors')(Sequelize, DataTypes),

        firstName: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING(10),
            allowNull: flase
        }
    }, {
        tableName: "user",
    }
    );
};