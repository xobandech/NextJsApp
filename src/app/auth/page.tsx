"use client";
import { User } from "@/types/User";
import { useEffect, useState } from "react";
import { handleLogin, handleRegistration, getUsers } from "./serverFunctions";

const AuthPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers()
      .then((users) => {
        setUsers(users);
        console.log(users);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <>
      <div>
       
        <h1>Login or register</h1>
        <div className="flex justify-around">
          <form action={handleLogin} className="flex flex-col">
            <header>Login</header>
            <label htmlFor="username">Username</label>
            <input className="text-black" type="text" name="username" />
            <label htmlFor="password">Password</label>
            <input className="text-black" type="text" name="password" />
            <button
              type="submit"
              className="outline outline-2 outline-white bg-[#443]"
            >
              Log in
            </button>
          </form>
          <form className="flex flex-col" action={handleRegistration}>
            <header>Registration</header>
            <label htmlFor="username">Username</label>
            <input className="text-black" type="text" name="username" />
            <label htmlFor="password">Password</label>
            <input className="text-black" type="text" name="password" />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input className="text-black" type="text" name="confirmPassword" />
            <button
              type="submit"
              className="outline outline-2 outline-white bg-[#443]"
            >
              Sign up
            </button>
          </form>
        </div>
        <div>
        {users.map((user: User) => (
          <div key={user.id}>
            <p>{user.username}</p>
            <p>{user.password}</p>
          </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default AuthPage;
