import { Request, Response } from "express";
import responseMessages from "../common/response.messages";
import utility, { Validation } from "../common/utility";
import { ICommonController, IPayAuth } from "../interfaces/response_interfaces";
import Services from "../services/policy-holder.services";
import { AddViewModel } from "../view_model/policy-holder";
class ControllersData {

  add = async (req: Request, res: Response<ICommonController>) => {
    try {
      let validatedData: Validation = await utility.validateAndConvert(AddViewModel, req.body);
      if (validatedData.error) {
        return res.status(400).send({
          success: false,
          message: responseMessages.VALIDATION_ERROR,
          data: validatedData.error,
        });
      } else {
        let reqData: AddViewModel = validatedData.data as AddViewModel;
        let user = await Services.add(req, reqData);
        return res.status(user.statusCode).send(user.data);
      }
    } catch (error) {
      return res.status(500).send({
        success: false,
        message: responseMessages.ERROR_ISE,
        error
      });
    }
  };

  getList = async (req: Request, res: Response<ICommonController>) => {
    try {
      let user = await Services.getlist(req);
      return res.status(user.statusCode).send(user.data);
    } catch (error) {
      return res.status(500).send({
        success: false,
        message: responseMessages.ERROR_ISE,
        error
      });
    }
  };

  getDetails = async (req: Request, res: Response<ICommonController>) => {
    try {
      let data = await Services.getDetails(req);
      return res.status(data.statusCode).send(data.data);
    } catch (error) {
      console.log("Error", error);
      return res.status(500).send({
        success: false,
        message: responseMessages.ERROR_ISE,
        error
      });
    }
  };


}



export default new ControllersData();
