export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();
  console.log(token, "token");
  res
    .status(statusCode)
    .cookie("token", token, {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      sameSite: "Strict",
      httpOnly: true,
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};
