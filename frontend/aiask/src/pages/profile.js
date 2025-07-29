import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

 useEffect(() => {
  const storedUser = localStorage.getItem("user");

  if (!storedUser) {
    alert("Please login first.");
    navigate("/login");
    return;
  }

  try {
    const parsedUser = JSON.parse(storedUser);
    setUser(parsedUser);
  } catch (error) {
    console.error("Failed to parse user:", error);
    localStorage.removeItem("user");
    navigate("/login");
  }
}, [navigate]);

  if (!user) return <div className="text-center p-10 text-white">Loading profile...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-gray-800">
        <h1 className="text-xl font-bold mb-4">👤 Profile</h1>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>

        <button
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/login");
          }}
          className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
