const dbConnection = require("./dbConnection");
const allModels = require("./allModels");

const All_Model_Relationship = async () => {
  allModels.Exception_Log_Model.belongsTo(allModels.log_Model);
  allModels.log_Model.hasMany(allModels.Exception_Log_Model);

  try {
    await dbConnection.sync();
    console.log("Set Relation Sync Database");
  } catch (err) {
    console.log(err);
  }
};

module.exports = All_Model_Relationship();
