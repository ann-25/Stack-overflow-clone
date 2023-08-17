import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  //req- checks whether there is a token
  //res- checks whether the token is valid or not
  //next -if it's valid allows a next function.

  try {
    const token = req.headers.authorization.split(" ")[1];
    let decodeData = jwt.verify(token, process.env.JWT_SECRET); // validating the users with a secret. here the secret is 'test'
    req.userId = decodeData?.id;

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;