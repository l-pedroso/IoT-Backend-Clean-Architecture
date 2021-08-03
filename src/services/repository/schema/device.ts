import { Schema, model } from "mongoose";

interface IDevice {
    deviceId: string;
    deviceName: string;
    typeId: string;
    authToken: string;
    userEmail: string;
}

const deviceSchema = new Schema<IDevice>({

    deviceId: {
        type: String,
        required: true,
    },

    deviceName: {
        type: String,
        required: true,
    },

    typeId: {
        type: String,
        required: true,
    },

    authToken: {
        type: String,
        required: true,
    },

    userEmail: {
        type: String,
        required: true,
    }
});

const deviceModel = model<IDevice>('devices', deviceSchema);
export default deviceModel;