import getUserProfileService from "../services/getUserProfile.service";

const getUserProfileController = (req, res) => {
  const uuid = req.uuid;

  const user = getUserProfileService(uuid);

  return res.json(user);
};

export default getUserProfileController;
