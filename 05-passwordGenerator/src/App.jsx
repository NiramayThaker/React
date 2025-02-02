import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pswd, setPswd] = useState('');

  // useRef hook
  const pswdRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '~`!@#$%^&*()_+=-<,>.?/|\\;:[{]}';

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPswd(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyToClipboard = useCallback(() => {
    if (pswd) {
      pswdRef.current?.select()
      navigator.clipboard.writeText(pswd);
      // alert('Password copied to clipboard!');
    }
  }, [pswd]);

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
      <div className="w-full max-w-md p-6 bg-gray-700 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-orange-500">Password Generator</h1>

        <div className="mb-4 flex items-center gap-2">
          <input
            type="text"
            value={pswd}
            readOnly
            className="w-full py-2 px-3 rounded bg-gray-600 text-white outline-none border border-gray-500 focus:border-orange-500"
            placeholder="Your generated password"
            ref={pswdRef}
          />
          <button
            onClick={copyToClipboard}
            className="py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
          >
            Copy
          </button>
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Password Length ({length})</label>
          <input
            type="range"
            min="8"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full py-2 px-3 rounded bg-gray-600 text-white outline-none border border-gray-500 focus:border-orange-500"
          />
        </div>

        <div className="mb-4 flex items-center justify-between">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={(e) => setNumberAllowed(e.target.checked)}
              className="accent-orange-500"
            />
            Include Numbers
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={(e) => setCharAllowed(e.target.checked)}
              className="accent-orange-500"
            />
            Include Special Characters
          </label>
        </div>

        {/* <button
          onClick={passwordGenerator}
          className="w-full py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition"
        >
          Generate Password
        </button> */}
      </div>
    </div>
  );
}

export default App;
