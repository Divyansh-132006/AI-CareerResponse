// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// function Login() {
//     const navigate = useNavigate();
//     const [email, setusername] = useState('');
//     const [password, setpassword] = useState('');

//     const [showMenu, setShowMenu] = useState(false);

   


//     const handlelogin = async () => {
//         if (!email || !password) return alert("Username and Password are required ");
//         try {
//             const response = await fetch('https://ai-careerresponse.onrender.com/api/ai/login', {
//                 method: "Post",
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ email, password })
//             });
//             const data = await response.json();
//             if (data.success) {
//                 navigate('/');
//                 alert("Login successful");
//             } else {
//                 alert("Login Failed:");

//             }
//         } catch (error) {
//             console.error('Eroor:', error);
//             alert("LoginFailed, Please try again.")
//         }
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 flex flex-col items-center text-white p-4 relative">
//             <div className="bg-white text-center text-gray-800 px-6 py-4 rounded-xl shadow-xl mt-8 w-full max-w-2xl animate-floatY">
//                 <h2 className="text-xl font-bold text-purple-600 mb-2">Welcome to Career Advisor</h2>
//             </div>


//             <div className="bg-white rounded-xl shadow-md p-6 mt-6 w-full max-w-2xl">
//                 <p className="text-gray-500 text-sm mb-6">With AI suggestions, All! things is short out</p>
//                 <label className="block mb-2 font-semibold text-gray-800">Email</label>
//                 <input
//                     type="text"
//                     className="w-full border rounded p-2 mb-2 text-gray-800"
//                     placeholder="enter your username"
//                     value={email}
//                     onChange={(e) => setusername(e.target.value)}
//                 />
//                 <label className="block mb-2 font-semibold text-gray-800">Password</label>
//                 <input
//                     type="password"
//                     className="w-full border rounded p-1 mb-2 text-gray-800"
//                     placeholder="enter your password"
//                     value={password}
//                     onChange={(e) => setpassword(e.target.value)}
//                 />
//                 <button
//                     onClick={handlelogin}
//                     className="bg-purple-600 text-white font-semibold px-4 py-2 rounded hover:bg-purple-700 w-full"
//                 >
//                     Login
//                 </button>
//             </div>



//             <div className="absolute top-4 right-4 z-50">
//                 {/* Toggle Button */}
//                 <button
//                     onClick={() => setShowMenu(!showMenu)}
//                     className="bg-white text-purple-600 font-bold px-4 py-2 rounded shadow hover:bg-purple-200 transition"
//                 >
//                     {showMenu ? "Close Menu" : "☰ Menu"}
//                 </button>

//                 {/* AskAnything + Signup Buttons */}
//                 {showMenu && (
//                     <div className="flex flex-col items-end gap-2 mt-2">
//                         <button
//                             onClick={() => window.location.href = '/'}
//                             className="bg-white text-purple-600 font-bold px-4 py-2 rounded shadow hover:bg-purple-200 transition"
//                         >
//                             AskAnything
//                         </button>

//                         <button
//                             onClick={() => window.location.href = '/signup'}
//                             className="bg-white text-purple-600 font-bold px-4 py-2 rounded shadow hover:bg-purple-200 transition"
//                         >
//                             Signup
//                         </button>
//                     </div>
//                 )}
//             </div>

//         </div>



//     )
// }


// export default Login;


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate();
    const [email, setusername] = useState('');
    const [password, setpassword] = useState('');

    const [showMenu, setShowMenu] = useState(false);




    const handlelogin = async () => {
        if (!email || !password) return alert("Username and Password are required ");
        try {
            const response = await fetch('https://ai-careerresponse.onrender.com/api/ai/login', {
                method: "Post",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (data.success && typeof data.user === 'object' && data.user !== null) {
                console.log("✅ Saving user to localStorage:", data.user);
                localStorage.setItem("user", JSON.stringify(data.user));
                alert("Login successful");
                navigate('/');
            } else {
                console.error("❌ Login failed or user is missing:", data);
                alert("Login failed or invalid user object.");
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
                    type="email"
                    className="w-full border rounded p-2 mb-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setusername(e.target.value)}
                />

                <label className="block mb-2 font-semibold text-gray-800">Password</label>
                <input
                    type="password"
                    className="w-full border rounded p-2 mb-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                />

                <button
                    onClick={handlelogin}
                    className="bg-purple-600 text-white font-semibold px-4 py-2 rounded hover:bg-purple-700 w-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                    Login
                </button>
            </div>

            {/* Fixed Mobile Menu */}
            <div className="fixed top-4 right-4 z-[9999]">
                <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="bg-white text-purple-600 font-bold px-4 py-2 rounded-lg shadow-lg hover:bg-purple-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                    {showMenu ? "✕" : "☰"}
                </button>

                {/* Mobile Menu Dropdown */}
                {showMenu && (
                    <>
                        {/* Backdrop overlay for mobile */}
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 -z-10 md:hidden"
                            onClick={() => setShowMenu(false)}
                        />

                        {/* Menu Items */}
                        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                            <div className="py-2">
                                <button
                                    onClick={() => {
                                        window.location.href = '/';
                                        setShowMenu(false);
                                    }}
                                    className="w-full text-left px-4 py-3 text-purple-600 hover:bg-purple-50 transition-colors duration-150 font-medium"
                                >
                                    🏠 Home
                                </button>

                                <button
                                    onClick={() => {
                                        window.location.href = '/signup';
                                        setShowMenu(false);
                                    }}
                                    className="w-full text-left px-4 py-3 text-blue-600 hover:bg-blue-50 transition-colors duration-150 font-medium"
                                >
                                    📝 Sign Up
                                </button>

                                <div className="border-t border-gray-200 my-1"></div>

                                <div className="px-4 py-2 text-xs text-gray-500 uppercase tracking-wide font-semibold">
                                    Need Help?
                                </div>

                                <button
                                    onClick={() => {
                                        // Add forgot password logic here
                                        setShowMenu(false);
                                    }}
                                    className="w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 transition-colors duration-150 font-medium"
                                >
                                    🔑 Forgot Password?
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>



    )
}

export default Login;
