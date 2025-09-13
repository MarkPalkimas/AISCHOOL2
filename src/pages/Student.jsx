import { useState } from "react";

export default function Student() {
  const [code, setCode] = useState("");
  const [joined, setJoined] = useState(false);

  const handleJoin = () => {
    if (code.trim() !== "") {
      setJoined(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {!joined ? (
        <>
          <h1 className="text-4xl font-bold mb-4">Enter Teacher Code</h1>
          <input
            type="text"
            placeholder="Teacher Code"
            className="border px-4 py-2 rounded-lg mb-4"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button
            onClick={handleJoin}
            className="px-6 py-2 bg-black text-white rounded-lg hover:opacity-80"
          >
            Join Class
          </button>
        </>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome to ClassAI</h1>
          <p className="text-gray-600 mt-2">
            You are now connected to your teacher's AI.
          </p>
        </div>
      )}
    </div>
  );
}
