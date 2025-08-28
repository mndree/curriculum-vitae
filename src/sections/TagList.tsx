import React from 'react';
import './KeyBenefits.css';

const TagList = () => {
  const tags = [
    // Row 1 - React & JavaScript Ecosystem
    [
      { name: "React JS", icon: "⚛️" },
      { name: "React Native", icon: "📱" },
      { name: "Next.js", icon: "➡️" },
      { name: "Expo", icon: "🚀" },
      { name: "TypeScript", icon: "📘" },
      { name: "Redux", icon: "🔄" },
      { name: "Zustand", icon: "🐻" },
      { name: "React Query", icon: "📡" },
      { name: "Material UI", icon: "🎭" },
      { name: "TailwindCSS", icon: "🎨" },
      { name: "Vite", icon: "⚡" },
      { name: "Jest", icon: "🧪" }
    ],

    // Row 2 - ASP.NET Core Ecosystem
    [
      { name: "ASP.NET Core", icon: "💻" },
      { name: "C#", icon: "🔤" },
      { name: "Entity Framework", icon: "📂" },
      { name: "Blazor", icon: "🖥️" },
      { name: "Razor Pages", icon: "📄" },
      { name: "SignalR", icon: "📡" },
      { name: "LINQ", icon: "🔎" },
      { name: "SQL Server", icon: "🗄️" },
      { name: "Identity Server", icon: "🔐" },
      { name: "NuGet", icon: "📦" },
      { name: "Azure", icon: "☁️" }
    ],

    // Row 3 - Laravel Ecosystem
    [
      { name: "Laravel", icon: "🅻" },
      { name: "Filament", icon: "🎛️" },
      { name: "Laravel Jetstream", icon: "🕊️" },
      { name: "Laravel Breeze", icon: "🌬️" },
      { name: "Eloquent ORM", icon: "🗂️" },
      { name: "Blade Templates", icon: "🧩" },
      { name: "Livewire", icon: "⚡" },
      { name: "Inertia.js", icon: "🌐" },
      { name: "Composer", icon: "🎼" },
      { name: "MySQL", icon: "🐬" },
      { name: "Redis", icon: "🟥" },
      { name: "Sanctum", icon: "🛡️" }
    ]
  ];

  return (
    <section className="py-16 bg-black relative overflow-hidden w-full">
      <div className="w-full px-4">
        {/* Section Title */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What I Work With
          </h2>
          <p className="text-gray-400 text-lg">
            From frontend to backend, here are the technologies I use to craft efficient and responsive applications.
          </p>
        </div>

        {/* Tag Rows */}
        <div className="space-y-8 overflow-hidden w-full">
          {tags.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`tag-row-${rowIndex + 1} flex gap-4 items-center w-full`}
            >
              {/* Duplicate tags for seamless animation */}
              {[...row, ...row, ...row].map((tag, tagIndex) => (
                <div
                  key={tagIndex}
                  className="tag-item group flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-gray-900/50 backdrop-blur-sm text-white hover:border-red-500 hover:bg-red-500/10 transition-all duration-300 cursor-pointer whitespace-nowrap flex-shrink-0"
                >
                  <span className="text-sm">{tag.icon}</span>
                  <span className="text-sm font-medium group-hover:text-red-400 transition-colors duration-300">
                    {tag.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TagList;
