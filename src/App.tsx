import { memo, useCallback, useState } from "react";

interface CardProps {
  title: string;
  description: string;
}

const Card = memo(({ title, description }: CardProps) => (
  <div className="rounded-2xl shadow-md p-6 bg-white hover:shadow-lg transition-shadow">
    <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
    <p className="text-gray-500 text-sm">{description}</p>
  </div>
));

const items = [
  { id: 1, title: "Performance", description: "React.memo and useCallback prevent unnecessary re-renders." },
  { id: 2, title: "TypeScript", description: "Strict typing catches bugs at compile time." },
  { id: 3, title: "Tailwind CSS", description: "Utility-first CSS keeps styles co-located with markup." },
];

export default function App() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1), []);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
        React + TS + Tailwind
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {items.map((item) => (
          <Card key={item.id} title={item.title} description={item.description} />
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
