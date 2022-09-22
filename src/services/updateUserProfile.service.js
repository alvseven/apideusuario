import users from "../database";

const updateUserProfileService = (uuid, email, isAdm, user) => {
  const userIndex = users.findIndex((user) => user.uuid == uuid);

  if (userIndex === -1) {
    throw new Error("User not found");
  }

  if (!isAdm && users[userIndex].email !== email) {
    throw new Error(
      "You can update only your profile, unless you are an admin"
    );
  }

  const date = new Date();
  const formatedDate = date.toLocaleDateString();

  const updatedUser = {
    name: user?.name,
    email: user?.email,
    updatedOn: formatedDate,
  };

  users[userIndex] = { ...users[userIndex], ...updatedUser };

  return {
    ...users[userIndex],
    password: undefined,
  };
};

export default updateUserProfileService;
