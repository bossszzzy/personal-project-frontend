function RegisterPage() {
  return (
    <>
      <div className="text-3xl text-center opacity-70">
        Create a new account
      </div>
      <div className="divider opacity-60"></div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-5 p-4 pt-3"
      >
        <input
          type="text"
          placeholder="Username"
          className="input input-bordered w-full"
        />
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="First name"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Last name"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex gap-2">
          <input
            type="password"
            placeholder="New password"
            className="input input-bordered w-full"
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="input input-bordered w-full"
          />
        </div>
        <button className="btn btn-xl bg-[#e67e22] border-0 text-xl hover:bg-[#d35400] cursor-pointer">
          Sign up
        </button>
      </form>
    </>
  );
}
export default RegisterPage;
