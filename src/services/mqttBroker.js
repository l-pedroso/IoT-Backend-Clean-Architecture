const axios = require('axios').default;
const MqttBrokerContract = require('../contracts/mqttBroker');


module.exports = class mqttBroker extends MqttBrokerContract{

    constructor(){
        super();
    }

    async add(deviceID, deviceType){
        try{
            const response = await axios({
                method: 'post',
                url: `https://dzeoyy.internetofthings.ibmcloud.com/api/v0002/device/types/${deviceType}/devices`,
                headers: {
                    'Authorization': `Basic ${process.env.MQTT_BROKER_SECRET}`,
                },
                data:{
                    deviceId: deviceID,
                }
            });
            return{
                deviceId: response.data.deviceId,
                deviceType: response.data.typeId,
                deviceToken: response.data.authToken
            }
        }
        catch(e){
            throw e;
        }
    }
}