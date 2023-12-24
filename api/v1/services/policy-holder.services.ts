import { Request } from "express";
import { ICommonServices, IPayAuth } from "../interfaces/response_interfaces";
import _ from "lodash";
import responseMessages from "../common/response.messages";
import { AddViewModel } from "../view_model/policy-holder";
import Users from "../models/users";


class dataServicesData {

  add = async (req: Request, reqData: AddViewModel): Promise<ICommonServices> => {
    try {
      let payload = req.user as IPayAuth;
      let data: any = await Users.findByIdAndUpdate(payload.userId, { $set: { ...reqData } });
      if (data) {
        // console.log(data);
        return {
          statusCode: 200,
          data: {
            success: true,
            message: "Bank details added",
            data
          }
        };
      } else {
        return { statusCode: 200, data: { success: false, message: responseMessages.USER_DETAILS_FOUND_NOT } };
      }
    } catch (error) {
      console.log(error);
      return { statusCode: 500, data: { success: false, message: responseMessages.ERROR_OCCURRE } };
    }
  };

  getDetails = async (userId: string): Promise<ICommonServices> => {
    try {
      let data: any = await Users.findById(userId, { bank: 1, accountHolderName: 1, ifscCode: 1 }).lean();
      if (data) {
        // console.log(data);
        return {
          statusCode: 200,
          data: {
            success: true,
            message: "Bank Details found",
            data
          }
        };
      } else {
        return { statusCode: 200, data: { success: false, message: responseMessages.USER_DETAILS_FOUND_NOT } };
      }
    } catch (error) {
      console.log(error);
      return { statusCode: 500, data: { success: false, message: responseMessages.ERROR_OCCURRE } };
    }
  };


}
export default new dataServicesData();

