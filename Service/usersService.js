const emailMiddleware = require('../Middlewares/emailMiddleware');

const model = require('../Models/User');

const create = async (name, roles, email, password) => {
  const emailExists = await model.getByEmail({ email });
  const validatEmail = emailMiddleware.validateEmail(email);
  if (!name || !roles || !email || !password) {
    return {
      error: true,
      code: 'invalid_data',
      message: 'Invalid entries. Try again.',
      statusCode: 400,
    };
  }
  if (emailExists) {
    return {
      error: true,
      code: 'duplicate',
      message: 'Email already registered',
      statusCode: 409,
    };
  }
  if (!validatEmail) {
    return {
      error: true,
      code: 'invalid_data',
      message: 'Invalid entries. Try again.',
      statusCode: 400,
    };
  }

  return model.create(name, roles, email, password);
};

module.exports = {
  create,
};
