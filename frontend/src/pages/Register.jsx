import { useState } from "react";
import { registerUser } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");
  const [loading, setLoading] =
  useState(false);  
  const [error, setError] =
  useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser({
        name,
        email,
        password,
      });
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      setError("Error occurred while registering");
      console.log(error);
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
          Create Account
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(
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
          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="
            w-full
            bg-black
            text-white
            py-3
            rounded-xl
            "
          >
            {loading
              ? "Registering..."
              : "Register"}
              
          </button>
        </form>

        <p className="mt-5 text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-black font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;