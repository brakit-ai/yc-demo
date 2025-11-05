"use client";
import React from "react";

export default function BrakitPlayground() {
  return (
    <main className="h-screen bg-white flex flex-col overflow-hidden">
      {/* Header */}
      <header className="border-b border-gray-200 py-6 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-semibold text-gray-900 mb-2">
            Brakit Playground
          </h1>
          <p className="text-sm text-gray-600">
            Click the Brakit overlay button → Pick a tool → Click the text below
          </p>
        </div>
      </header>

      {/* Main Grid */}
      <div className="flex-1 p-6 overflow-hidden">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-3 gap-4">
          {/* Text Edit */}
          <div className="border-2 border-gray-300 rounded-2xl p-6 hover:border-blue-500 transition-colors flex flex-col items-center justify-center text-center">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium mb-3">
              ✍️ Text Tool
            </div>
            <div className="mb-3 text-xs text-gray-500">
              1️⃣ Click <span className="font-semibold">Text Tool</span> in
              overlay
            </div>
            <div className="mb-4 text-xs text-gray-500">
              2️⃣ Then click this text 👇
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3 px-4 py-2 bg-blue-50 rounded-lg border-2 border-dashed border-blue-300">
              Edit me to say anything you want
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Type your new text and watch it update in code
            </p>
          </div>

          {/* Font Size */}
          <div className="border-2 border-gray-300 rounded-2xl p-6 hover:border-purple-500 transition-colors flex flex-col items-center justify-center text-center">
            <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium mb-3">
              📏 Font Size Tool
            </div>
            <div className="mb-3 text-xs text-gray-500">
              1️⃣ Click <span className="font-semibold">Font Size Tool</span> in
              overlay
            </div>
            <div className="mb-4 text-xs text-gray-500">
              2️⃣ Then click any text below 👇
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-gray-900 px-3 py-1 bg-purple-50 rounded-lg border-2 border-dashed border-purple-300">
                Make me huge
              </p>
              <p className="text-lg text-gray-600 px-3 py-1 bg-purple-50 rounded-lg border-2 border-dashed border-purple-300">
                or tiny
              </p>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Drag the slider to resize
            </p>
          </div>

          {/* Font Family */}
          <div className="border-2 border-gray-300 rounded-2xl p-6 hover:border-green-500 transition-colors flex flex-col items-center justify-center text-center">
            <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium mb-3">
              🎭 Font Family Tool
            </div>
            <div className="mb-3 text-xs text-gray-500">
              1️⃣ Click <span className="font-semibold">Font Family Tool</span>{" "}
              in overlay
            </div>
            <div className="mb-4 text-xs text-gray-500">
              2️⃣ Then click any text below 👇
            </div>
            <div className="space-y-2">
              <p className="text-xl font-sans text-gray-900 px-3 py-1 bg-green-50 rounded-lg border-2 border-dashed border-green-300">
                Change my font style
              </p>
              <p className="text-xl font-serif text-gray-900 px-3 py-1 bg-green-50 rounded-lg border-2 border-dashed border-green-300">
                to something different
              </p>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Pick Sans, Serif, or Mono
            </p>
          </div>

          {/* Color */}
          <div className="border-2 border-gray-300 rounded-2xl p-6 hover:border-pink-500 transition-colors flex flex-col items-center justify-center text-center col-span-2">
            <div className="inline-block px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium mb-3">
              🎨 Color Tool
            </div>
            <div className="mb-3 text-xs text-gray-500">
              1️⃣ Click <span className="font-semibold">Color Tool</span> in
              overlay
            </div>
            <div className="mb-4 text-xs text-gray-500">
              2️⃣ Then click any colored text below 👇
            </div>
            <p className="text-3xl font-bold text-blue-600 mb-4 px-4 py-2 bg-blue-50 rounded-lg border-2 border-dashed border-blue-300 inline-block">
              Change my color to anything
            </p>
            <div className="flex gap-3 mb-3">
              <div className="bg-red-500 px-4 py-2 rounded-lg text-white font-medium text-sm border-2 border-dashed border-white/30">
                Red
              </div>
              <div className="bg-orange-500 px-4 py-2 rounded-lg text-white font-medium text-sm border-2 border-dashed border-white/30">
                Orange
              </div>
              <div className="bg-yellow-500 px-4 py-2 rounded-lg text-white font-medium text-sm border-2 border-dashed border-white/30">
                Yellow
              </div>
              <div className="bg-green-500 px-4 py-2 rounded-lg text-white font-medium text-sm border-2 border-dashed border-white/30">
                Green
              </div>
              <div className="bg-blue-500 px-4 py-2 rounded-lg text-white font-medium text-sm border-2 border-dashed border-white/30">
                Blue
              </div>
              <div className="bg-purple-500 px-4 py-2 rounded-lg text-white font-medium text-sm border-2 border-dashed border-white/30">
                Purple
              </div>
              <div className="bg-pink-500 px-4 py-2 rounded-lg text-white font-medium text-sm border-2 border-dashed border-white/30">
                Pink
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Pick any color from the palette
            </p>
          </div>

          {/* Delete */}
          <div className="border-2 border-red-300 rounded-2xl p-6 hover:border-red-500 transition-colors bg-red-50 flex flex-col items-center justify-center text-center">
            <div className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium mb-3">
              🗑️ Delete Tool
            </div>
            <div className="mb-3 text-xs text-gray-500">
              1️⃣ Click <span className="font-semibold">Delete Tool</span> in
              overlay
            </div>
            <div className="mb-4 text-xs text-gray-500">
              2️⃣ Then click this element 👇
            </div>
            <div className="text-5xl mb-3">💣</div>
            <p className="text-xl font-bold text-red-600 mb-2 px-4 py-2 bg-red-100 rounded-lg border-2 border-dashed border-red-400">
              Delete me forever
            </p>
            <p className="text-sm text-gray-700 mt-2">
              Confirm to remove from code
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-4 text-center">
        <p className="text-xs text-gray-500">
          Every change updates real source code • Built with Brakit
        </p>
      </footer>
    </main>
  );
}
