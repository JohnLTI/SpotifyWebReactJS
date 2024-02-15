import {
  Home,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";

export function App() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <nav className="space-y-4 mt-10">
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

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40 p-2">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-2">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10 mb-10">Good Night</h1>

          <div className="grid grid-cols-3 gap-4">
            <a
              href=""
              className="bg-white/5 group rounded gap-4 flex items-center overflow-hidden hover:bg-white/10 transition-colors"
            >
              <img src="/album.png" width={104} height={104} alt="Foto album" />
              <strong>Synthesis</strong>
              <button className="w-12 h-12 items-center justify-center pl-2.5 p-2 bg-green-600 text-black flex rounded-full ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group rounded gap-4 flex items-center overflow-hidden hover:bg-white/10 transition-colors"
            >
              <img src="/album.png" width={104} height={104} alt="Foto album" />
              <strong>Synthesis</strong>
              <button className="w-12 h-12 items-center justify-center pl-2.5 p-2 bg-green-600 text-black flex rounded-full ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group rounded gap-4 flex items-center overflow-hidden hover:bg-white/10 transition-colors"
            >
              <img src="/album.png" width={104} height={104} alt="Foto album" />
              <strong>Synthesis</strong>
              <button className="w-12 h-12 items-center justify-center pl-2.5 p-2 bg-green-600 text-black flex rounded-full ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group rounded gap-4 flex items-center overflow-hidden hover:bg-white/10 transition-colors"
            >
              <img src="/album.png" width={104} height={104} alt="Foto album" />
              <strong>Synthesis</strong>
              <button className="w-12 h-12 items-center justify-center pl-2.5 p-2 bg-green-600 text-black flex rounded-full ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group rounded gap-4 flex items-center overflow-hidden hover:bg-white/10 transition-colors"
            >
              <img src="/album.png" width={104} height={104} alt="Foto album" />
              <strong>Synthesis</strong>
              <button className="w-12 h-12 items-center justify-center pl-2.5 p-2 bg-green-600 text-black flex rounded-full ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group rounded gap-4 flex items-center overflow-hidden hover:bg-white/10 transition-colors"
            >
              <img src="/album.png" width={104} height={104} alt="Foto album" />
              <strong>Synthesis</strong>
              <button className="w-12 h-12 items-center justify-center pl-2.5 p-2 bg-green-600 text-black flex rounded-full ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>
          <h2 className="font-semibold text-2xl mt-10">Made for John Lucas</h2>
          <div className="grid grid-cols-5 gap-4 mt-4">
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <img
                src="/album.png"
                className="w-full"
                width={104}
                height={104}
                alt="Foto album"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">Evanescense</span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6"></footer>
    </div>
  );
}
