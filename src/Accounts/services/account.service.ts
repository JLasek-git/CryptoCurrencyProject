import { UserLoginDataModel } from "../models/UserLoginDataModel";
import { UserRegisterDataModel } from "../models/UserRegisterDataModel";

const usersArray: UserLoginDataModel[] = [
  {
    login: "admin",
    password: "admin",
    isRememberChecked: false,
  },
];

export async function loginUser(
  userLogin: UserLoginDataModel
): Promise<boolean> {
  return new Promise((resolve) => {
    const foundUser = usersArray.find((user) => user.login === userLogin.login);

    if (foundUser) {
      if (foundUser.password === userLogin.password) {
        if (userLogin.isRememberChecked) {
          localStorage.setItem("userData", JSON.stringify(userLogin));
        }
        resolve(true);
      }
    }
    resolve(false);
  });
}

export async function registerNewUser(
  newUserData: UserRegisterDataModel
): Promise<void> {
  return new Promise((resolve) => {
    const newUser: UserLoginDataModel = {
      login: newUserData.login,
      password: newUserData.login,
    };

    usersArray.push(newUser);
    resolve();
  });
}
