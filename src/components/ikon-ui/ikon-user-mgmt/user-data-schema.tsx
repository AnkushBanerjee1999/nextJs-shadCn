// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type UserData = {
  userId: string;
  userName: string;
  userEmail: string;
  userType: string;
  userLogin: string;
  userActive: boolean;
  userPhone: string;
  groupNames: Array<string>;
};
