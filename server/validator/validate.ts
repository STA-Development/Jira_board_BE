import Joi from 'joi';

export const ItemSchema = Joi.object({
title : Joi.string().required(),
description : Joi.string()
})

