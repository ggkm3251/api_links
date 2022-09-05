import React, { useEffect, useState } from "react";
import Header from "./Header"

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <main>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={setIsDarkMode} />
    </main>
  )
}

export default App
