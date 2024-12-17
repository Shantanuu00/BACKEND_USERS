const {Sequelize}=require("sequelize");
//imports sequelize
const config=require("../config/config.js")[process.env.NODE_ENV || "development"];
//selects appropriate configuration
const sequelize =new Sequelize(
    config.database,
    config.username,
    config.password,
    //passed from .env file
    {
        host:config.host,
        dialect:"postgres",
        port:config.port,
        logging:config.logging,
    }
)

module.exports=sequelize;
//this is imported for other files where you need to interacts with database
