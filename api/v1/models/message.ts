import { getModelForClass, Index, mongoose, prop, Ref } from "@typegoose/typegoose";
import { UserModel } from "./users";

export class MessageModel {
    @prop()
    text: string;

    @prop()
    username: string;
}

const Message = getModelForClass(MessageModel, {
    schemaOptions: {
        collection: "Message",
        timestamps: true,
    },
});

export default Message;
