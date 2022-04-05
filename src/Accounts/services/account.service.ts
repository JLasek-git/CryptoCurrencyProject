import { UserLoginDataModel } from "../models/UserLoginDataModel";

export async function loginUser(
  userLogin: UserLoginDataModel
): Promise<boolean> {
  return new Promise((resolve) => {
    const userData: UserLoginDataModel = {
      login: "admin",
      password: "admin",
    };

    if (JSON.stringify(userData) === JSON.stringify(userLogin)) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
}
