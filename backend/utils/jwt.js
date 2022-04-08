const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, "PASSWORD");
    return decoded;
  } catch (error) {
    if (error.name === "TokenExpiredError") {
    }
    if (error.name === "JsonWebTokenError") {
      console.log(error);
    }
    if (error.name === "NotBeforeError") {
      console.log(error);
    }

    console.log(err);
    return false;
  }
};

const makeAccessToken = (id) => {
  try {
    return jwt.sign(
      {
        id,
      },
      "PASSWORD",
      {
        expiresIn: "2h",
      }
    );
  } catch (error) {}
};

const makeRefreshToken = (id) => {
  try {
    return jwt.sign(
      {
        id,
      },
      "PASSWORD",
      {
        expiresIn: "14d",
      }
    );
  } catch (error) {
    console.log(error);
    return "error";
  }
};

module.exports = { verifyToken, makeAccessToken, makeRefreshToken };
