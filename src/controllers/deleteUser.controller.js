import deleteUserService from "../services/deleteUser.service";

const deleteUserController = (req, res) => {
  try {
    const isAdm = req.isAdm;
    const email = req.email;
    const { uuid } = req.params;
    const deletedUser = deleteUserService(uuid, isAdm, email);
    return res.json(deletedUser);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

export default deleteUserController;
