import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../utils/authValidator";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { authApi } from "../../api/authApi";

function RegisterPage({ resetForm }) {
  const { handleSubmit, register, formState, reset } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const { isSubmitting, errors } = formState;

  useEffect(() => {
    reset();
  }, [resetForm]);

  const hdlRegis = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const resp = await authApi.post("/register", data);
      toast.success(resp.data.message);
      document.getElementById("register-form").close();
      reset();
    } catch (error) {
      const errMsg = error.response?.data?.error || error.message;
      toast.error(errMsg);
    }
  };

  return (
    <>
      <div className="text-3xl text-center opacity-70">
        Create a new account
      </div>
      <div className="divider opacity-60"></div>
      <form onSubmit={handleSubmit(hdlRegis)}>
        <fieldset disabled={isSubmitting}>
          <div className="flex flex-col gap-5 p-4 pt-3">
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
            <div className="flex gap-2">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="First name"
                  className="input input-bordered w-full"
                  {...register("firstName")}
                />
                {errors.firstName && (
                  <p className="text-sm text-error">
                    {errors.firstName?.message}
                  </p>
                )}
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Last name"
                  className="input input-bordered w-full"
                  {...register("lastName")}
                />
                {errors.lastName && (
                  <p className="text-sm text-error">
                    {errors.lastName?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-full">
                <input
                  type="password"
                  placeholder="New password"
                  className="input input-bordered w-full"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-sm text-error">
                    {errors.password?.message}
                  </p>
                )}
              </div>
              <div className="w-full">
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="input input-bordered w-full"
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                  <p className="text-sm text-error">
                    {errors.confirmPassword?.message}
                  </p>
                )}
              </div>
            </div>
            {!isSubmitting && (
              <button className="btn btn-xl bg-[#e67e22] border-0 text-xl hover:bg-[#d35400] cursor-pointer">
                Sign up
              </button>
            )}
            {isSubmitting && (
              <button className="btn btn-xl bg-[#e67e22] border-0 text-xl hover:bg-[#d35400] cursor-pointer">
                <span className="loading loading-spinner loading-xl"></span>
                Sign up
              </button>
            )}
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default RegisterPage;
