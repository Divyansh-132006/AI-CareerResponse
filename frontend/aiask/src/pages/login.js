import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
      const navigate = useNavigate();
    const [email, setusername] = useState('');
    const [password, setpassword] = useState('');

    const handlelogin = async () => {
        if (!email || !password) return alert("Username and Password are required ");
        try {
            const response = await fetch('https://ai-careerresponse.onrender.com/api/ai/login', {
                method: "Post",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (data.success) {
                navigate('/');
                alert("Login successful");
            } else {
                alert("Login Failed:");

            }
        } catch (error) {
            console.error('Eroor:', error);
            alert("LoginFailed, Please try again.")
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 flex flex-col items-center text-white p-4 relative">
            <div className="bg-white text-center text-gray-800 px-6 py-4 rounded-xl shadow-xl mt-8 w-full max-w-2xl animate-floatY">
                <h2 className="text-xl font-bold text-purple-600 mb-2">Welcome to Career Advisor</h2>
            </div>


            <div className="bg-white rounded-xl shadow-md p-6 mt-6 w-full max-w-2xl">
                <p className="text-gray-500 text-sm mb-6">With AI suggestions, All! things is short out</p>
                <label className="block mb-2 font-semibold text-gray-800">Email</label>
                <input
                    type="text"
                    className="w-full border rounded p-2 mb-2 text-gray-800"
                    placeholder="enter your username"
                    value={email}
                    onChange={(e) => setusername(e.target.value)}
                />
                <label className="block mb-2 font-semibold text-gray-800">Password</label>
                <input
                    type="password"
                    className="w-full border rounded p-1 mb-2 text-gray-800"
                    placeholder="enter your password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                />
                <button
                    onClick={handlelogin}
                    className="bg-purple-600 text-white font-semibold px-4 py-2 rounded hover:bg-purple-700 w-full"
                >
                    Login
                </button>
            </div>
             <button
                 onClick={() => window.location.href = '/'}
        className="absolute top-4 right-4 z-50 bg-white text-purple-600 font-bold px-4 py-2 rounded shadow hover:bg-purple-200 transition "
      >
      AskAnything
      </button>
  
      <button
          onClick={() => window.location.href = '/signup'}
        className="absolute top-16 right-12 z-50 bg-white text-purple-600 font-bold px-4 py-2 rounded shadow hover:bg-purple-200 transition "
      >
        Signup
      </button>
        </div>



    )
}

export default Login;
