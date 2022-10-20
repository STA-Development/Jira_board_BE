import { Request,Response} from 'express';
import { appendFile } from 'fs';
import { items } from '../database';



class ItemController {
 async create(req : Request  , res : Response ) {
    try{
    const record = await items.create({ ...req.body });
    return res.json({record , msg:"item has been created successfully"});
    }
    catch(e){
      return res.json({msg: "fail to create" , status: 500, route: "/api/jiraBoardData"})
    }
}

async read(req : Request , res : Response) {
  try{
    const record = await items.findAll()
return res.json(record);
  }
catch(e){
return res.json({msg: "fail to connect" , status: 500, route: "/api/jiraBoardData"})
}
};

async readById(req : Request , res : Response) {
  try{
const {id} = req.params;
const record = await items.findOne({where:{id}})
return res.json(record);
  }
catch(e){
return res.json({msg: "fail to connect" , status: 500, route: "/api/jiraBoardData/:id"})
}
};

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
export default new ItemController();


/*

const read = asyncHandler(async(req : Request  , res : Response ) => {
    try{
    const record = await items.create({ ...req.body });
    return res.json({record , msg:"item has been created successfully"});
    }
    catch(e){
      return res.json({msg: "fail to create" , status: 500, route: "/api/jiraBoardData"})
    }
})
*/