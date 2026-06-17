import { useState } from "react";
import { loginUser } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } =
        await loginUser({
          email,
          password,
        });

      localStorage.setItem(
        "token",
        data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      navigate("/dashboard");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-[#faf8f5]
      px-6
      "
    >
      <div
        className="
        bg-white
        rounded-3xl
        p-10
        shadow-sm
        w-full
        max-w-md
        "
      >
        <h1
          className="text-4xl font-bold mb-6"
          style={{
            fontFamily: "Outfit",
          }}
        >
          Welcome Back
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="
            w-full
            border
            rounded-xl
            p-3
            "
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="
            w-full
            border
            rounded-xl
            p-3
            "
            required
          />

          <button
            type="submit"
            className="
            w-full
            bg-black
            text-white
            py-3
            rounded-xl
            "
          >
            Login
          </button>
        </form>

        <p className="mt-5 text-gray-500">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-black font-medium"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;