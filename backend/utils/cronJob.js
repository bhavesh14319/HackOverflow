const nodeCron = require('node-cron');
const { Op } = require('sequelize');
const All_Models = require('./allModels');


exports.UpdateLog = async () =>{

    const exceptionLog = await allModels.Exception_Log_Model.findAll({
        where:{
            sealinkLogId : {[Op.eq]:null}
        },
        order:[['checkOut','desc']]
});

    const entryLog = await allModels.log_Model.findAll({
        where:{
            checkOut : {[Op.eq]:null}
        },
        order:[['checkIn','desc']]
});

    // check if entry exit matches 
    // some way to match in minimum time



}