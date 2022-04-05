import { UserLoginDataModel } from "../models/UserLoginDataModel";

export async function loginUser(
  userLogin: UserLoginDataModel
): Promise<boolean> {
  return new Promise((resolve) => {
    if (userLogin.login === "admin" && userLogin.password === "admin") {
      if (userLogin.isRememberChecked) {
        localStorage.setItem("userData", JSON.stringify(userLogin));
      }
      resolve(true);
    } else {
      resolve(false);
    }
  });
}
