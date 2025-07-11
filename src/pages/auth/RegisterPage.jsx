import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../utils/authValidator";
import { useEffect } from "react";

function RegisterPage({ resetForm }) {
  const { handleSubmit, register, formState, reset } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const { isSubmitting, errors } = formState;
  
  useEffect(() => {
    reset();
  }, [resetForm]);

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
    document.getElementById("register-form").close();
    reset();
  };

  return (
    <>
      <div className="text-3xl text-center opacity-70">
        Create a new account
      </div>
      <div className="divider opacity-60"></div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 p-4 pt-3"
      >
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
              <p className="text-sm text-error">{errors.firstName?.message}</p>
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
              <p className="text-sm text-error">{errors.lastName?.message}</p>
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
              <p className="text-sm text-error">{errors.password?.message}</p>
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
        <button className="btn btn-xl bg-[#e67e22] border-0 text-xl hover:bg-[#d35400] cursor-pointer">
          Sign up
        </button>
      </form>
    </>
  );
}

export default RegisterPage;
