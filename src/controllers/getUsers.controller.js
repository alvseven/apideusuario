import getUsersService from "../services/getUsers.service";

const getUsersController = (req, res) => {
  const usersList = getUsersService();

  return res.json(usersList);
};

export default getUsersController;
