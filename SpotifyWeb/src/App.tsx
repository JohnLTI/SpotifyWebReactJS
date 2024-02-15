import { Home, Search, Library } from "lucide-react";

export function App() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <nav className="space-y-4">
            <a
              href=""
              className="flex items-center gap-3 text-xs font-semibold text-zinc-300"
            >
              <Home />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-xs font-semibold text-zinc-300"
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-xs font-semibold text-zinc-300"
            >
              <Library />
              Your Library
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6"></main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6"></footer>
    </div>
  );
}
