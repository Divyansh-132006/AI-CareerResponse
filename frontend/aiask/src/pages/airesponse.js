import { useState } from 'react';

function AiResponse() {
    const [goal, setgoal] = useState('');
    const [skills, setskills] = useState('');
    const [roadmap, setroadmap] = useState('');
    const [error, setError] = useState('');
    const [query, setquery] = useState('');
    const [answer, setAnswer] = useState('');
    const [loading, setLoading] = useState(false);
    const [showAskAnything, setShowAskAnything] = useState(false);
    const [file, setFile] = useState(null);


    const handleGenerate = async () => {
        if (!goal || !skills) {
            return alert("Form khali hai babu");
        }
        try {
            const response = await fetch('https://ai-careerresponse.onrender.com/api/ai/roadmap', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ goal, skills })

            });
            const data = await response.json();
            setroadmap(data.roadmap);
        }
        catch (errro) {
            console.error('Error:', error);
            setError('Failed to generate roadmap. Please try again.');
        }
    }

    const handleAsk = async () => {
        if (!prompt) return alert("Pehle sawal toh daal!");
        setLoading(true);
        try {
            const res = await fetch("https://ai-careerresponse.onrender.com/api/ai/ask", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ query }),
            });
            const data = await res.json();
            setAnswer(data.answer);
        } catch (err) {
            setAnswer("AI response failed 😓");
        } finally {
            setLoading(false);
        }
    };

    const handleResumeAnalyze = async () => {
        if (!file) return alert("Upload your resume!");

        const formData = new FormData();
        formData.append("resume", file);

        setLoading(true);
        try {
            const res = await fetch("https://ai-careerresponse.onrender.com/api/ai/resume", {
                method: "POST",
                body: formData,
            });
            const data = await res.json();
            setroadmap(data.feedback);
        } catch (err) {
            alert("Resume Analysis Failed");
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 flex flex-col items-center text-white p-4 relative">
            {showAskAnything ? (
                <div className="bg-white text-gray-800 px-6 py-4 rounded-xl shadow-xl mt-20 w-full max-w-2xl">
                    <h1 className="text-3xl font-bold mb-4 text-purple-700">Ask Anything 🤖</h1>
                    <textarea
                        rows="4"
                        value={query}
                        onChange={(e) => setquery(e.target.value)}
                        placeholder="Type your question..."
                        className="w-full border rounded p-2 mb-4 text-black"
                    />
                    <button
                        onClick={handleAsk}
                        className="bg-purple-600 text-white font-semibold px-4 py-2 rounded hover:bg-purple-700 w-full"
                    >
                        {loading ? "Thinking..." : "Ask"}
                    </button>

                    {answer && (
                        <div className="bg-white text-gray-800 mt-8 p-6 rounded-xl w-full shadow-md whitespace-pre-wrap">
                            <h3 className="text-lg font-bold mb-2 text-green-600">💬 AI Says:</h3>
                            {answer}
                        </div>
                    )}
                </div>
            ) : (
                <>
                    <div className="bg-white text-center text-gray-800 px-6 py-4 rounded-xl shadow-xl mt-8 w-full max-w-2xl animate-floatY">
                        <h1 className="text-3xl font-bold mb-2">Find Your Career Path here</h1>
                        <p className="text-sm mb-4">AI powered career suggestions</p>
                        <div className='flex justify-center gap-2 mb-4 text-sm font-semibold'>
                            <span className="text-green-500">● Personalized</span>
                            <span className="text-blue-500">● AI-Powered</span>
                            <span className="text-purple-500">● Step-by-Step</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 mt-6 w-full max-w-2xl">
                        <h2 className="text-xl font-bold text-purple-600 mb-2">Tell me your career aspirations</h2>
                        <p className="text-gray-500 text-sm mb-6">Our AI will create a personalized roadmap just for you</p>
                        <label className="block mb-2 font-semibold text-gray-800">What's your career goal</label>
                        <input
                            type="text"
                            className="w-full border rounded p-2 mb-4 text-gray-800"
                            placeholder="e.g., Become a Software Engineer at Google"
                            value={goal}
                            onChange={(e) => setgoal(e.target.value)}
                        />
                        <label className="block mb-2 font-semibold text-gray-800">What skills do you currently have?</label>
                        <textarea
                            rows="3"
                            className="w-full border rounded p-2 mb-4 text-gray-800"
                            placeholder="e.g., HTML, CSS, React, teamwork..."
                            value={skills}
                            onChange={(e) => setskills(e.target.value)}
                        />
                         <input
                        type="file"
                        name="resume"
                        accept=".pdf"
                        onChange={(e) => setFile(e.target.files[0])}
                        className="mb-4 text-sm"
                    />
                    <button
                        onClick={handleResumeAnalyze}
                        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                    >
                        Analyze Resume
                    </button>
                        <button
                            onClick={handleGenerate}
                            className="bg-purple-600 text-white font-semibold px-4 py-2 rounded hover:bg-purple-700 w-full"
                        >
                            Generate Roadmap
                        </button>
                    </div>
                   


                    {roadmap && (
                        <div className="bg-white text-gray-800 mt-8 p-6 rounded-xl w-full max-w-3xl shadow-md whitespace-pre-wrap">
                            <h3 className="text-lg font-bold mb-2 text-green-600">🧠 AI Roadmap:</h3>
                            {roadmap}
                        </div>
                    )}
                </>
            )}

            <button
                onClick={() => setShowAskAnything(!showAskAnything)}
                className="absolute top-4 right-4 z-50 bg-white text-purple-600 font-bold px-4 py-2 rounded shadow hover:bg-purple-200 transition "
            >
                {showAskAnything ? "Back to Roadmap" : "Ask Anything"}
            </button>
            <div className="flex gap-2  absolute top-16 right-4 z-50">
                <button
                    onClick={() => window.location.href = '/signup'}
                    className=" bg-white text-purple-600 font-bold px-4 py-2 rounded shadow hover:bg-purple-200 transition "
                >
                    Signup
                </button>

                <button
                    onClick={() => window.location.href = '/login'}
                    className=" bg-white text-purple-600 font-bold px-4 py-2 rounded shadow hover:bg-purple-200 transition "
                >
                    Login
                </button>
            </div>
        </div>
    );

}

export default AiResponse;



