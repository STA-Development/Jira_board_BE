import { Request,Response} from 'express';
import { items } from '../database';
import {ItemSchema} from '../validator/validate'



interface reqItemsTypes {
  id: Number,
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

async deleteItems(req :Request , res : Response){
  const id = req.params.id;
   items.destroy({where : {id : id}})
  .then(num => {if (num == 1) {
    res.json({
      message: `Item was deleted successfully!`
    });
  } else {
    res.json({
      message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
    });
  }
  }).catch(err => {
    res.status(500).send({
      message: "Could not delete Tutorial with id=" + id
  });
  });
  }

}
/*
async delete(req : Request , res : Response){
  try {
  const {id} = req.params;
  const record = await items.findOne({where : {id}});
  
  if(!record){
    return res.json({msg : 'can not find existing record'});
  }
  const deletedRecord = await record.destroy();
  return res.json({record : deletedRecord});
  }
  catch(e){
  return res.json({
  msg: "fail to read",
  status:500,
  route :"/api/jiraBoardData/:id",
  })
  }
  }
}
*/
export default new ItemService();


    