import { useState } from 'preact/hooks';

export default function Greeting({messages}) {
  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];
  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button 
        onClick={() => setGreeting(randomMessage())}
        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        New Greeting
      </button>
    </div>
  );
}