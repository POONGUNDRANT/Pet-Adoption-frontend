import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShelterAuthContext } from "../../context/ShelterAuthContext";
import Header from "../../components/Header";

const ShelterRegister = () => {
  const { createShelter, loading } = useContext(ShelterAuthContext); 
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await createShelter(username, email, password); 
    } catch (err) {
      setError("Registration failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="h-[100vh] w-[100%] bg-[#fff]">
      <Header />
      <div className="mt-14">
        <div>
          <section className="max-w-lg p-6 mx-auto bg-white rounded-md shadow-md">
            <h2 className="text-lg font-semibold text-[#B71C1C] capitalize text-center">
              Sign Up as Shelter
            </h2>

            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

            <form onSubmit={handleRegister}>
              <div className="flex flex-col gap-4 mt-4">
                {/* Shelter Name */}
                <div>
                  <label
                    className="text-[#B71C1C] font-medium"
                    htmlFor="shelterName"
                  >
                    Shelter Name
                  </label>
                  <input
                    id="shelterName"
                    type="text"
                    placeholder="Enter your shelter name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-[#B71C1C] bg-[#FFCDD2] border border-[#B71C1C] rounded-md focus:border-[#D32F2F] focus:ring-[#D32F2F] focus:ring-opacity-40 focus:outline-none focus:ring"
                    required
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label
                    className="text-[#B71C1C] font-medium"
                    htmlFor="emailAddress"
                  >
                    Email Address
                  </label>
                  <input
                    id="emailAddress"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-[#B71C1C] bg-[#FFCDD2] border border-[#B71C1C] rounded-md focus:border-[#D32F2F] focus:ring-[#D32F2F] focus:ring-opacity-40 focus:outline-none focus:ring"
                    required
                  />
                </div>

                {/* Password */}
                <div>
                  <label
                    className="text-[#B71C1C] font-medium"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-[#B71C1C] bg-[#FFCDD2] border border-[#B71C1C] rounded-md focus:border-[#D32F2F] focus:ring-[#D32F2F] focus:ring-opacity-40 focus:outline-none focus:ring"
                    required
                  />
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-between items-center mt-6">
                <button
                  type="submit"
                  className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#D32F2F] rounded-md hover:bg-[#B71C1C] focus:outline-none focus:bg-[#B71C1C]"
                  disabled={loading}
                >
                  {loading ? "Signing up..." : "Sign up"}
                </button>

                {/* Already have an account */}
                <Link
                  to="/shelterlogin"
                  className="text-sm text-[#B71C1C] underline hover:text-[#D32F2F] transition-colors"
                >
                  Already have an account?
                </Link>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShelterRegister;
