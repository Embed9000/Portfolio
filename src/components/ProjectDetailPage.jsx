import { formatText } from "../utils/formatText";

export default function ProjectDetailPage({ modalProject }) {
  const project = modalProject;

  return (
    <section className="text-white space-y-6 w-full">
      {/* VIDEO MAIN */}
      <div className="flex justify-center rounded-lg overflow-hidden">
        <video
          src={project.videoUrl}
          className="w-full max-w-4xl object-cover"
          loop
          autoPlay
          controls
        />
      </div>

      {/* ABOUT + INFO */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 p-6">
        <article>
          <h3 className="text-2xl font-semibold mb-4 text-purple-400 flex justify-center">
            About
          </h3>
          <p className="text-justify whitespace-pre-line">
            {formatText(project.about)}
          </p>
        </article>

        <article>
          <h3 className="text-2xl font-semibold mb-4 text-purple-400 flex justify-center">
            Project Info
          </h3>
          <ul className="space-y-1 text-center">
            {project.projectInfo.map((item, idx) => (
              <li key={idx}>
                <span className="font-semibold">{item.label}:</span> {item.value}
              </li>
            ))}
          </ul>
        </article>
      </div>

      {/* INTRODUCTION */}
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-semibold mb-4 text-purple-400">Introduction</h3>
        <p className="max-w-6xl text-justify whitespace-pre-line">
          {formatText(project.introduction)}
        </p>
      </div>

      {/* WORK IMPACT */}
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-semibold mb-4 text-purple-400">Team Work / My Work</h3>
        <p className="max-w-6xl text-justify whitespace-pre-line">
          {formatText(project.workImpact)}
        </p>
      </div>

      <div>
        {project.projectDeveleloping.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="text-2xl font-semibold mb-4 text-purple-400">
              {item.label}
            </span>

            {Array.isArray(item.value) ? (
              <div className="flex flex-wrap gap-2 justify-center">
                {item.value.map((val, vIdx) =>
                  typeof val === "string" && val.endsWith(".mp4") ? (
                    <video
                      key={vIdx}
                      src={val}
                      className="w-full max-w-sm my-4"
                      loop
                      autoPlay
                    />
                  ) : (
                    <p
                      key={vIdx}
                      className="max-w-6xl text-justify whitespace-pre-line"
                    >
                      {formatText(val)}
                    </p>
                  )
                )}
              </div>
            ) : (
              <p className="max-w-6xl text-justify whitespace-pre-line">
                {formatText(item.value)}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
