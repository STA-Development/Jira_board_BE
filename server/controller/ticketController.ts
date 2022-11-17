import { Request, Response } from "express";
import TicketService from "../service/ticketService";
import { ItemSchema } from "../validator/validate";
import { ReqItemsTypes } from "../libs/types";
class TicketController {
  async create(req: Request, res: Response) {
    try {
      const result: ReqItemsTypes = await ItemSchema.validateAsync(req.body);

      const record = await TicketService.createItems(result);
      return res.json({
        record,
        msg: "Ticket has been created successfully",
        status: 201,
      });
    } catch {
      return res.json({
        msg: "fail to create",
        status: 500,
      });
    }
  }

  async get(req: Request, res: Response) {
    try {
      const records = await TicketService.readItems();
      return res.json({
        records,
        msg: "Show Tickets",
        status: 200,
      });
    } catch {
      return res.json({
        msg: "fail to connect",
        status: 500,
      });
    }
  }
  async readById(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const records = await TicketService.readOneItem(id);
      return res.json({
        records,
        msg: "Show Thickets By Id",
        status: 201,
      });
    } catch {
      return res.json({
        msg: "fail to connect",
        status: 500,
      });
    }
  }

  async update(req: Request, res: Response) {
    const JiraColumnId = req.body.JiraColumnId;
    const id = +req.params.id;
    const record = await TicketService.updateItem(JiraColumnId, id);
    return res.json({
      record,
      msg: "JiraBoard column Id succsessfully updated",
      status: 200,
    });
  }
  async deleteItems(req: Request, res: Response) {
    const id = +req.params.id;
    const record = await TicketService.deleteItems(id);
    return res.json({
      record,
      msg: "Ticket Successfully removed",
      status: 200,
    });
  }
}
export default new TicketController();
