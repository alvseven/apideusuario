import userLoginService from "../services/userLogin.service";

const userLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await userLoginService(email, password);
    return res.json({ token });
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

export default userLoginController;
