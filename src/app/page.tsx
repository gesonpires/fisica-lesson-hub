// src/app/page.tsx
import React from "react";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200 px-4">
      {/* 1. Imagem de capa */}
      <div className="w-full max-w-4xl mb-8">
        <Image
          src="/images/logo-fln-capa-maior.png"
          alt="Imagem de capa do FisicaLessonHub"
          width={1500}      // ajuste conforme a proporção da sua imagem
          height={500}      // ajuste conforme a proporção da sua imagem
          className="rounded-lg object-cover shadow-lg"
        />
      </div>

      {/* 2. Título com logo inline 
      <h1 className="flex items-center text-4xl font-bold text-gray-800 mb-4">
        <Image
          src="/images/logo-inline-fln.png"
          alt="Logo FisicaLessonHub"
          width={48}       // largura do logo em pixels
          height={48}      // altura do logo em pixels
          className="mr-3"
        />
        FisicaLessonHub
      </h1>
      */}

      <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
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
