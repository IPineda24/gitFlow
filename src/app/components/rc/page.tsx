export default function Rc() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center gap-4">
                <h1 className="text-3xl font-bold text-purple-700">¡Hola, soy Rodrigo!</h1>
                <p className="text-gray-600 text-lg text-center">
                    Bienvenido a mi página. Aquí puedes encontrar información sobre mí y mis proyectos.
                </p>
                <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition">
                    Contáctame
                </button>
            </div>
        </div>
    );
}