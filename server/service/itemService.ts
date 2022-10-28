import { Request} from 'express';
import { items } from '../database';
import {ItemSchema} from '../validator/validate'



interface reqItemsTypes {
id: number,
title : string,
description : string
}

class ItemService {


 async createItems(req : Request){
  const result = await ItemSchema.validateAsync(req.body)
  const reqItems : reqItemsTypes = {
  id:result.id,
  title:result.title,
  description : result.description
}
 return items.create(reqItems);
 }

async readItems(){
 return items.findAll();
 }

async readItemById(req :Request ) {
  const id = req.params.id;
return items.findOne({where : {id : id}})
}

async updateItem(req : Request){
const id = req.params.id;
return items.update(req.body, {where : {id : id}})

}

async deleteItems(req :Request){
  try {
    const id = req.params.id;
    await items.destroy({where: {id}})
  } catch (err) {
    throw new Error("id not Found!")
  }
}
}

export default new ItemService();


    