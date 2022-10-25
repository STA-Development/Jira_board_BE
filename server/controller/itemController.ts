import { Request,Response} from 'express';
import ItemService from '../service/itemService';
import { items } from '../database';

class ItemController {

async create(req : Request  , res : Response ){
try {
const record = await ItemService.createItems(req);
console.log(record);
return res.json({record, msg : "Item has been created successfully"});
}
catch {
  return res.json({msg: "fail to create" , status: 500, route: "/api/jiraBoardData"});
}
}


async read(req : Request , res : Response){
  try{
    const record = await ItemService.readItems();
 return res.json(record);
  }
catch(e){
return res.json({msg: "fail to connect" , status: 500, route: "/api/jiraBoardData"})
}
}

async readById(req : Request , res : Response) {
  try{
    
    const record = await ItemService.readItemById(req);
return res.json(record);
  }
  catch(e) {
    return res.json({msg: "fail to connect" , status: 500, route: "/api/jiraBoardData/:id"})
  }
}

async update(req : Request , res : Response){
try{
const record = await ItemService.updateItem(req);
return res.json(record);
}
catch {
  return res.json({msg: "fail to connect" , status: 500, route: "/api/jiraBoardData/:id"})
}

}
async deleteItems(req :Request , res : Response){
return ItemService.deleteItems(req , res);
}
}
export default new ItemController();
