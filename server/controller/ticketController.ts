import { Request, Response } from 'express';
import TicketService from '../service/ticketService';

class TicketController {
  async create(req: Request, res: Response) {
    try {
      const record = await TicketService.createItems(req);
      return res.json({
        record,
        msg: 'Thicket has been created successfully',
        status: 201
      });
    } catch {
      return res.json({
        msg: 'fail to create',
        status: 500
      });
    }
  }

  async get(req: Request, res: Response) {
    try {
      const records = await TicketService.readItems();
      return res.json({
        records,
        msg: 'Show Thickets',
        status: 201
      });
    } catch {
      return res.json({
        msg: 'fail to connect',
        status: 500
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const record = await TicketService.updateItem(req);
      return res.json({
        record,
        msg: 'Thicket has updated',
        status: 201
      });
    } catch {
      return res.json({
        msg: 'fail to connect',
        status: 500
      });
    }
  }

  async deleteItems(req: Request, res: Response) {
    const record = await TicketService.deleteItems(req);
    return res.json({
      record,
      msg: 'Thicket Successfully removed',
      status: 201
    });
  }
}
export default new TicketController();
