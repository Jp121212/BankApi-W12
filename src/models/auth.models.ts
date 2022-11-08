import * as Joi from "joi";

export const RegisterUserSchema = Joi.object({
  name: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  address: Joi.string(),
  phoneCode: Joi.string(),
  phoneNumber: Joi.string(),
});

export const LoginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});
