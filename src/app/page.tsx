// src/app/page.tsx
import React from "react";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        FisicaLessonHub
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Em breve: o seu hub de planos de aula de Física! 🚀
      </p>
      <div className="space-x-4">
        <a
          href="mailto:geson.pires@gmail.com"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition"
        >
          Fale conosco
        </a>
        <a
          href="https://www.instagram.com/fisicalessonhub"
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-lg border border-blue-600 px-6 py-3 text-blue-600 hover:bg-blue-50 transition"
        >
          Instagram
        </a>
      </div>
      <footer className="absolute bottom-4 text-sm text-gray-500">
        © {new Date().getFullYear()} FisicaLessonHub. Todos os direitos reservados.
      </footer>
    </main>
  );
}
