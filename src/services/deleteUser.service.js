import users from "../database";
import getUserProfileService from "./getUserProfile.service";

const deleteUserService = (uuid, isAdm, email) => {
  const userIndex = users.find((user) => user.uuid === uuid);
  if (userIndex === -1) {
    throw new Error("User not found");
  }

  if (!isAdm && users[userIndex].email !== email) {
    throw new Error(
      "You can update only your profile, unless you are an admin"
    );
  }

  users.splice(userIndex, 1);

  return { message: "User deleted with success" };
};

export default deleteUserService;
