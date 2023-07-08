const AuthPage = () => {
  return (
    <>
      <div>
        <h1>Login or register</h1>
        <div className="flex justify-around">
          <form action="" className="flex flex-col" >
            <header>Login</header>
            <input type="text" name="username" />
            <label htmlFor="username">Username</label>
            <input type="text" name="password" />
            <label htmlFor="password">Password</label>
            <button type="submit" className="outline outline-2 outline-white bg-[#443]">Submit</button>
          </form>
          <form action="" className="flex flex-col">
            <header>Register</header>
            <input type="text" name="username" />
            <label htmlFor="username">Username</label>
            <input type="text" name="password" />
            <label htmlFor="password">Password</label>
            <input type="text" name="confirmPassword" />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <button type="submit" className="outline outline-2 outline-white bg-[#443]">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
