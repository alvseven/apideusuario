import users from "../database";

const getUserProfileService = (uuid) => {
  const userFound = users.find((user) => user.uuid == uuid);

  if (!userFound) {
    return { message: "User not found" };
  }

  return { ...userFound, password: undefined };
};

export default getUserProfileService;
