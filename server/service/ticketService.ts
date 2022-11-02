import { Request } from 'express';
import { items } from '../database';
import { ItemSchema } from '../validator/validate';

interface ReqItemsTypes {
  id: number;
  title: string;
  description: string;
}

class TicketServie {
  async createItems(req: Request) {
    const result = await ItemSchema.validateAsync(req.body);
    const reqItems: ReqItemsTypes = {
      id: result.id,
      title: result.title,
      description: result.description
    };
    return items.create(reqItems);
  }

  async readItems() {
    return items.findAll();
  }

  async updateItem(req: Request) {
    const id = req.params.id;
    return items.update(req.body, { where: { id: id } });
  }

  async deleteItems(req: Request) {
    try {
      const id = req.params.id;
      await items.destroy({ where: { id } });
    } catch (err) {
      throw new Error('id not Found!');
    }
  }
}

export default new TicketServie();
