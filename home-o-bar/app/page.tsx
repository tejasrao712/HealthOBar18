import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import Home from "./home/page";

export default function HomePage() {
  return (
    <main className="home-container">
      <Home />
    </main>
  );
}

