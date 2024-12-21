function App() {
  return (
    <div className="flex w-full min-h-screen flex-col justify-between items-center bg-off-white">
      <header className="flex w-full h-auto px-4 py-4 justify-between items-center bg-white shadow-sm">
        <div className="text-black text-4xl font-bold font-['Khand']">LOGO</div>
        <div className="w-10 h-10 flex-shrink bg-blue-600"></div>
      </header>
      <footer className="flex w-full h-auto px-4 py-5 justify-around items-center flex-wrap content-center bg-white shadow-sm">
        <div className="w-12 h-12 bg-blue-600"></div>
        <div className="w-12 h-12 bg-blue-600"></div>
        <div className="w-12 h-12 bg-blue-600"></div>
      </footer>
    </div>
  );
}

export default App;
