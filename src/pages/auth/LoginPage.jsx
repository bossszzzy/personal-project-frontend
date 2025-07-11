import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/authValidator";
import { useEffect } from "react";

function LoginPage({ resetForm }) {
  const { handleSubmit, register, formState, reset } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { isSubmitting, errors } = formState;

  useEffect(() => {
    reset();
  }, [resetForm]);

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
    document.getElementById("login-form").close();
    reset();
  };
  return (
    <>
      <div className="text-3xl text-center opacity-70">Login</div>
      <div className="divider opacity-60"></div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 p-4 pt-3"
      >
        <div className="flex gap-2">
          <div className="w-full">
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered w-full"
              {...register("username")}
            />
            {errors.username && (
              <p className="text-sm text-error">{errors.username?.message}</p>
            )}
          </div>
          <div className="w-full">
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-sm text-error">{errors.password?.message}</p>
            )}
          </div>
        </div>
        <button className="btn btn-xl bg-[#e67e22] border-0 text-xl hover:bg-[#d35400] cursor-pointer">
          Login!
        </button>
      </form>
    </>
  );
}
export default LoginPage;
