import deleteUserService from "../services/deleteUser.service";

const deleteUserController = (req, res) => {
  try {
    const reqUuid = req.uuid;
    const { uuid } = req.params;
    const isAdm = req.isAdm;
    const deletedUser = deleteUserService(reqUuid, uuid, isAdm);
    return res.json(deletedUser);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

export default deleteUserController;
