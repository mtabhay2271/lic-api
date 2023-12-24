import { getModelForClass, Index, mongoose, prop, Ref } from "@typegoose/typegoose";
import { UserModel } from "./users";

export class PolicyHolderModel {
    @prop()
    name!: string;

    @prop()
    fName: string;

    @prop()
    mName: string;

    @prop()
    sName: string;

    @prop()
    dob: string;

    @prop()
    mob: number;

    @prop()
    email!: string;


    @prop()
    address: string;


    @prop()
    uid: number;

    @prop()
    pan: string;

    @prop()
    edu: string;

    @prop()
    work: string;


    @prop()
    hight: number;


    @prop()
    weight: number;


    @prop()
    fAge: number;


    @prop()
    mAge: number;


    @prop()
    spAge: number;


    @prop()
    childAge: number;

    @prop()
    childAge2: number;


    @prop()
    childAge3: number;


    @prop()
    childAge4: number;


    @prop()
    bAge1: number;


    @prop()
    bAge2: number;

    @prop()
    sAge1: number;


    @prop()
    sAge2: number;


    @prop()
    planNo: number;


    @prop()
    amount: number;

    @prop()
    typeOfEmi: string;

    @prop()
    bank: string;


    @prop()
    accNo: number;

    @prop()
    idfscCode: string;


    @prop()
    policyNo: number;


    @prop()
    sumAssured: number;


    @prop()
    nomYear: number;

    @prop()
    termRider: number;

    @prop()
    slipNun1: number;

    @prop()
    doc: string;

    @prop()
    dom: string;

    @prop()
    dlp: string;

    @prop()
    nominee: string;

    @prop()
    uin: string;

    @prop()
    nextDue: string

    @prop({
        ref: UserModel,
        type: mongoose.Types.ObjectId,
    })
    userId: Ref<UserModel>;
}

const PolicyHolder = getModelForClass(PolicyHolderModel, {
    schemaOptions: {
        collection: "policy-holder",
        timestamps: true,
    },
});

export default PolicyHolder;
