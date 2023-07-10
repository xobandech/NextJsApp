"use server";
import { prisma } from "@/db";
export const handleRegistration = async (data: FormData) => {
  "use server";
  const password = data.get("password")?.valueOf() as string;
  const confirmPassword = data.get("confirmPassword")?.valueOf();
  const username = data.get("username")?.valueOf() as string;
  if (password === confirmPassword) {
    await prisma.user.create({ data: { password, username } });
    console.log("success");
  }
};

export const handleLogin = async (data: FormData) => {
  "use server";
  const password = data.get("password")?.valueOf() as string;
  const username = data.get("username")?.valueOf() as string;
  try {
    prisma.user.findUnique({ where: { username: username } }).then((user) => {
      if (password === user?.password) {
        console.log("Succesfull login");
      }
    });
  } catch (e) {
    console.log(e);
  }
};

export async function getUsers() {
  "use server";
  return prisma.user.findMany();
}
