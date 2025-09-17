function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="flex flex-col items-center mt-12 font-sans">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        My GitHub Pages React App 🚀
      </h1>
      <p className="text-xl mb-4">Counter: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
      >
        Increase
      </button>
    </div>
  );
}
