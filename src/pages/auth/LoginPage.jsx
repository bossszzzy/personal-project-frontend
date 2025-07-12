import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/authValidator";
import { useEffect } from "react";
import useUserStore from "../../store/userStore";
import { toast } from "react-toastify";

function LoginPage({ resetForm }) {
  const login = useUserStore((state) => state.login);

  const { handleSubmit, register, formState, reset } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { isSubmitting, errors } = formState;

  useEffect(() => {
    reset();
  }, [resetForm]);

  const hdlLogin = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const resp = await login(data);
      document.getElementById("login-form").close();
      toast.success(resp.data.message);
      reset();
    } catch (error) {
      const errMsg = error.response?.data?.error || error.message
      toast.error(errMsg)
    }
  };
  return (
    <>
      <div className="text-3xl text-center opacity-70">Login</div>
      <div className="divider opacity-60"></div>
      <form onSubmit={handleSubmit(hdlLogin)}>
        <fieldset disabled={isSubmitting}>
          <div className="flex flex-col gap-5 p-4 pt-3">
            <div className="flex gap-2">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Username"
                  className="input input-bordered w-full"
                  {...register("username")}
                />
                {errors.username && (
                  <p className="text-sm text-error">
                    {errors.username?.message}
                  </p>
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
                  <p className="text-sm text-error">
                    {errors.password?.message}
                  </p>
                )}
              </div>
            </div>
            {!isSubmitting && (
              <button className="btn btn-xl bg-[#e67e22] border-0 text-xl hover:bg-[#d35400] cursor-pointer">
                Login!
              </button>
            )}
            {isSubmitting && (
              <button className="btn btn-xl bg-[#e67e22] border-0 text-xl hover:bg-[#d35400] cursor-pointer">
                <span className="loading loading-spinner loading-xl"></span>
                Login!
              </button>
            )}
          </div>
        </fieldset>
      </form>
    </>
  );
}
export default LoginPage;
