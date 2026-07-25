import Card from "./components/Card";
import Counter from "./components/Counter";

export default function App() {
  return (
    <div className="font-bold text-2xl min-h-screen bg-zinc-900 text-white">
      <Card name="Headphones" price={5000} />
      <Counter/>
    </div>
  );
}
