export default function Aa() {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-gradient-to-br from-blue-100 via-white to-pink-100 p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <header className="w-full flex justify-center items-center py-4">
                <h1 className="text-3xl sm:text-5xl font-bold text-blue-700 drop-shadow">
                    Bienvenido a GitFlow
                </h1>
            </header>
            <main className="flex flex-col items-center justify-center gap-8">
                <div className="bg-white/80 rounded-xl shadow-lg p-8 max-w-xl text-center">
                    <p className="text-lg sm:text-xl text-gray-700 mb-4">
                        ¡Organiza tu flujo de trabajo con estilo y eficiencia!
                    </p>
                    <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
                        Empezar
                    </button>
                </div>
            </main>
            <footer className="w-full flex justify-center items-center py-2 text-gray-500 text-sm">
                © 2025 GitFlow. Todos los derechos reservados.
            </footer>
        </div>
    );
}