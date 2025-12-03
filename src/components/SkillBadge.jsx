import React from 'react'

export function SkillBadge({ name, level, color }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`px-4 py-2 rounded-lg ${color} shadow-lg mb-2 w-full text-center`}
      >
        {name}
      </div>
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${i < level ? color : 'bg-gray-700'}`}
          />
        ))}
      </div>
    </div>
  )
}
