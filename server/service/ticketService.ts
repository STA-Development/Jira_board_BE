import { JiraColumns } from "../database/jiraColumnDatabase";
import { Tickets } from "../database/ticketDatabase";
import { ReqItemsTypes } from "./../libs/types";
class TicketServie {
  async createItems(ticket: ReqItemsTypes) {
    return Tickets.create(ticket);
  }

  async readItems() {
    return Tickets.findAll({ include: JiraColumns });
  }
  async readOneItem(id: string) {
    return Tickets.findOne({ where: { id } });
  }

  async updateItem(JiraColumnId: number, id: number) {
    return Tickets.update({ JiraColumnId: JiraColumnId }, { where: { id } });
  }
  async deleteItems(id: number) {
    try {
      await Tickets.destroy({ where: { id } });
    } catch (err) {
      throw new Error("id not Found!");
    }
  }
}

export default new TicketServie();
