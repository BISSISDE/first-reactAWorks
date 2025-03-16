import { useState } from "react";
export default function ThirdTask() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
        height: "10vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <p>{isDark ? "🌙 Қараңғы режим" : "☀️ Жарық режим"}</p>
      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? "☀️ Жарық режимге ауысу" : "🌑 Қараңғы режимге ауысу"}
      </button>
    </div>
  );
}
