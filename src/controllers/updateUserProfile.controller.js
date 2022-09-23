import updateUserProfileService from "../services/updateUserProfile.service";

const updateUserProfileController = (req, res) => {
  try {
    const reqUuid = req.uuid;
    const { uuid } = req.params;
    const isAdm = req.isAdm;
    const user = req.body;
    const updatedUser = updateUserProfileService(reqUuid, uuid, isAdm, user);
    return res.json(updatedUser);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

export default updateUserProfileController;
