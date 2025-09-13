import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center px-10 py-6 border-b">
        <h1 className="text-2xl font-bold">ClassAI</h1>
        <div>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-black text-white px-5 py-2 rounded-lg hover:opacity-80">
                Log In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>

      {/* Hero */}
      <main className="flex flex-1 flex-col justify-center items-center text-center px-6">
        <h2 className="text-5xl font-extrabold mb-6">The Future of Classroom AI</h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-10">
          Teachers upload class information. Students access an AI trained
          on that material to ask questions, review lessons, and learn faster.
        </p>
        <div className="flex gap-6">
          <button
            onClick={() => navigate("/teacher")}
            className="px-6 py-3 rounded-lg bg-black text-white text-lg hover:opacity-80"
          >
            I'm a Teacher
          </button>
          <button
            onClick={() => navigate("/student")}
            className="px-6 py-3 rounded-lg border border-black text-lg hover:bg-gray-100"
          >
            I'm a Student
          </button>
        </div>
      </main>

      <footer className="text-center py-6 border-t text-gray-500 text-sm">
        © {new Date().getFullYear()} ClassAI. All rights reserved.
      </footer>
    </div>
  );
}
