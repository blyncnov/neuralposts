import { hash } from "bcryptjs";

export const HashPassword = async (password) => {
  hash(password, 12).then((HashPassword) => {
    return HashPassword;
  });
};
