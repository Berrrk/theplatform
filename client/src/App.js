import './App.css';
const BASE_URL = 'https://theplatform-v90n.onrender.com';
fetch(`${BASE_URL}/api/endpoint`);

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}