import joi from "joi";

export default joi.object({
  isOnlinePlan: joi.boolean().required(),
  hasHotel: joi.boolean().required(),
  payentConfirmed: joi.equal(true).required(),
  userId: joi.number().required(),
});
