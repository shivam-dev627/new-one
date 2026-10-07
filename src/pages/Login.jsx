// import { useForm } from "react-hook-form";
// import "./Login.css";


// export default function Login() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//     alert("Login successful!");
//   };

//   return (
//     <div className="login-container">
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit(onSubmit)}>

//         {/* Username */}
//         <div className="form-group">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             {...register("username", { required: true })}
//           />
//           {errors.username && <span className="error">Username is required</span>}
//         </div>



// {/* password */}
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             {...register("password", { required: true, minLength: 6 })}
//           />
//           {errors.password && <span className="error">Password is required</span>}
//           {errors.password?.type === "minLength" && (
//             <span className="error">Password must be at least 6 characters</span>
//           )}
//         </div>


// {/* Submit Button */}
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }


import { useForm } from "react-hook-form";
import "./login.css";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Login successful!");
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h1>Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="form-group">
            <label htmlFor="username">Username</label>

            <input
              type="text"
              id="username"
              {...register("username", {
                required: true,
              })}
            />

            {errors.username && (
              <span className="error">
                Username is required
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>

            <input
              type="password"
              id="password"
              {...register("password", {
                required: true,
                minLength: 6,
              })}
            />

            {errors.password?.type === "required" && (
              <span className="error">
                Password is required
              </span>
            )}

            {errors.password?.type === "minLength" && (
              <span className="error">
                Password must be at least 6 characters
              </span>
            )}
          </div>

          <button type="submit">
            Login
          </button>

        </form>
      </div>
    </div>
  );
}

