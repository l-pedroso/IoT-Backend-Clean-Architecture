import { Schema, model } from "mongoose";

interface IUser {
    firstName: string;
    lastName: string;
    email: string;
}

const userSchema = new Schema<IUser>({

    firstName: {
        type: String,
    },

    lastName: {
        type: String,
    },

    email: {
        type: String,
        required: true,
    },
});

const userModel = model<IUser>('users', userSchema);
export default userModel;