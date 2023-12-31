import { Request } from "express";
import { ICommonServices, IPayAuth } from "../interfaces/response_interfaces";
import _ from "lodash";
import responseMessages from "../common/response.messages";
import { AddViewModel } from "../view_model/policy-holder";
import PolicyHolder from "../models/policy-holder";


class ServicesData {

  add = async (req: Request, reqData: AddViewModel): Promise<ICommonServices> => {
    try {
      let payload = req.user as IPayAuth;
      let data: any = await PolicyHolder.create({ ...reqData, userId: payload.userId });
      if (data) {
        // console.log(data);
        return {
          statusCode: 200,
          data: {
            success: true,
            message: "Policy holder added",
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

  getlist = async (req: Request): Promise<ICommonServices> => {
    try {
      let payload = req.user as IPayAuth;

      //pagination
      let pageNumber: any = req?.query?.pageNumber ? req?.query?.pageNumber : 1;
      let pageSize: any = req?.query?.pageSize ? req.query.pageSize : 100;
      let skip = pageSize * (parseInt(pageNumber) - 1);

      //sorting
      let sort: any = req?.query?.sort ? req?.query?.sort : "createdAt";
      let sortType: any = req?.query?.sortType ? req?.query?.sortType : -1;
      if (sort == "name") {
        sort = { name: sortType }
      } else if (sort == "policyNo") {
        sort = { policyNo: sortType }
      } else if (sort == "typeOfEmi") {
        sort = { typeOfEmi: sortType }
      } else if (sort == "nextDue") {
        sort = { nextDue: sortType }
      } else {
        sort = { createdAt: sortType }
      }

      //serching
      // let findQuery = req?.query?.search
      // if (findQuery) {
      //   findQuery = { userId: payload.userId, name: { $regex: findQuery, $options: 'i' } }
      // } else {
      //   findQuery = { userId: payload.userId }
      // }

      // console.log(findQuery);


      let data: any = await PolicyHolder.find({ userId: payload.userId }, { name: 1, policyNo: 1, nextDue: 1, typeOfEmi: 1, createdAt: 1 }).sort(sort).skip(skip).limit(parseInt(pageSize) + 1).lean();
      if (data) {
        let isNext = false;
        if (data.length > pageSize) {
          isNext = true;
          data.pop();
        }
        let metaData = {
          pageSize,
          pageNumber,
          isNext,
        };

        return {
          statusCode: 200,
          data: {
            success: true,
            message: "Policy Holder list found",
            data: { data, metaData }
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


  getDetails = async (req: Request): Promise<ICommonServices> => {
    try {
      let payload = req.user as IPayAuth;
      let data: any = await PolicyHolder.findById(req.params.id).lean();
      if (data) {
        // console.log(data);
        return {
          statusCode: 200,
          data: {
            success: true,
            message: "Policy Holder Details found",
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

  update = async (req: Request, reqData: AddViewModel): Promise<ICommonServices> => {
    try {
      let payload = req.user as IPayAuth;
      let data: any = await PolicyHolder.findByIdAndUpdate(req.params.id, { $set: { ...reqData, userId: payload.userId } });
      if (data) {
        // console.log(data);
        return {
          statusCode: 200,
          data: {
            success: true,
            message: "Policy holder updated",
            data
          }
        };
      } else {
        return { statusCode: 200, data: { success: false, message: responseMessages.USER_DETAILS_FOUND_NOT } };
      }
    } catch (error) {
      console.log(">>",error);
      return { statusCode: 500, data: { success: false, message: responseMessages.ERROR_OCCURRE } };
    }
  };
}
export default new ServicesData();

