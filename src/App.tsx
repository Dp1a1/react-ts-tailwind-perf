import { memo, useCallback, useState } from "react";

interface CardProps {
  title: string;
  description: string;
  dark: boolean;
}

const Card = memo(({ title, description, dark }: CardProps) => (
  <div className={`rounded-2xl shadow-md p-6 transition-shadow hover:shadow-lg ${dark ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}>
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className={`text-sm ${dark ? "text-gray-300" : "text-gray-500"}`}>{description}</p>
  </div>
));

const items = [
  { id: 1, title: "Performance", description: "React.memo and useCallback prevent unnecessary re-renders." },
  { id: 2, title: "TypeScript", description: "Strict typing catches bugs at compile time." },
  { id: 3, title: "Tailwind CSS", description: "Utility-first CSS keeps styles co-located with markup." },
  { id: 4, title: "Dark Mode", description: "User-preferred color scheme with a single state toggle." },
];

export default function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);
  const increment = useCallback(() => setCount((c) => c + 1), []);
  const toggleDark = useCallback(() => setDark((d) => !d), []);

  return (
    <main className={`min-h-screen p-8 transition-colors ${dark ? "bg-gray-900" : "bg-gray-100"}`}>
      <div className="flex justify-between items-center max-w-4xl mx-auto mb-8">
        <h1 className={`text-3xl font-bold ${dark ? "text-indigo-400" : "text-indigo-600"}`}>
          React + TS + Tailwind
        </h1>
        <button
          onClick={toggleDark}
          className="px-4 py-1.5 text-sm rounded-full border border-current transition-colors"
          aria-label="Toggle dark mode"
        >
          {dark ? "Light" : "Dark"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {items.map((item) => (
          <Card key={item.id} title={item.title} description={item.description} dark={dark} />
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          onClick={increment}
          className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
        >
          Count: {count}
        </button>
      </div>
    </main>
  );
}
