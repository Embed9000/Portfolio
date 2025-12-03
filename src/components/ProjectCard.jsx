import React from 'react'
import { ExternalLink } from 'lucide-react'

export const ProjectCard = ({
  title,
  description,
  videoUrl,
  thumbnailUrl,
  projectUrl,
  details = [],
}) => {
  const extractYouTubeId = (url) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    const matches = url.match(regex)
    return matches && matches[1] ? matches[1] : null
  }

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl transition-transform hover:scale-[1.02] group">
      <div className="relative aspect-video overflow-hidden">
        {videoUrl ? (
          videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be') ? (
            <iframe
              src={`https://www.youtube.com/embed/${extractYouTubeId(videoUrl)}`}
              title={title}
              className="w-full h-full object-cover"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loop
            />
          ) : (
            <video
              src={videoUrl}
              poster={thumbnailUrl}
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
              autoPlay
            />
          )
        ) : (
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        )}


        {details.length > 0 && (
          <div className="absolute bottom-0 left-0 w-full flex gap-4 items-center bg-black/60 px-4 py-2 text-gray-200 text-sm">
            {details.map((item, idx) => (
              <span key={idx} className="flex items-center gap-1">
                {item.icon && <span>{item.icon}</span>}
                {item.text}
              </span>
            ))}
          </div>
        )}
      </div>

      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-pink-200">{title}</h3>
          {projectUrl && (
            <button
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors"
              aria-label={`Visit ${title} project`}
            >
              <ExternalLink size={20} />
            </button>
          )}
        </div>
        <p className="text-gray-300 mb-4">{description}</p>
      </div>
    </div>
  )
}
