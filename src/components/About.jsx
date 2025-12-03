import { SkillBadge } from './SkillBadge'
import { Book, Code, Cpu, ExternalLink, Gamepad, Palette, Users } from 'lucide-react'
export const AboutSection = () => {
  const skills = [
    {
      category: 'Game Engines',
      items: [
        {
          name: 'Unity',
          level: 5,
          color: 'bg-blue-500',
        },
        {
          name: 'Unreal Engine',
          level: 3,
          color: 'bg-blue-500',
        },
      ],
    },
    {
      category: 'Programming',
      items: [
        {
          name: 'C#',
          level: 5,
          color: 'bg-green-500',
        },
        {
          name: 'C++',
          level: 3,
          color: 'bg-green-500',
        },
        {
          name: 'Python',
          level: 5,
          color: 'bg-green-500',
        },
      ],
    },
    {
      category: 'Game Design',
      items: [
        {
          name: 'Level Design',
          level: 5,
          color: 'bg-pink-500',
        },
        {
          name: 'Mechanics',
          level: 5,
          color: 'bg-pink-500',
        },
        {
          name: 'Narrative',
          level: 5,
          color: 'bg-pink-500',
        },
      ],
    },
  ]
  return (
    <section id="about" className="py-20 bg-[#111826] w-full">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Me</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 mb-16">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">
              Who I Am
            </h3>
            <p className="text-gray-300 mb-6">
                  I discovered my passion for game development at 17, during high school. What started as a joke quickly became serious. I began with visual scripting, then switched fully to C# after my first university year at USM.

                  With over two years of Unity experience before university, I always pushed projects beyond requirements—doing everything solo, from logic to programming. I love challenges, learn fast, and constantly aim to improve.

                  Coming from a small village, I maintained top grades at university through hard work. Outside of game dev, I enjoy sports and storytelling, though I chose game creation as my main path.


            </p>
            <p className="text-gray-300">
              I specialize in developing games that combine compelling
              narratives with innovative gameplay mechanics. My goal is to
              create experiences that resonate with players and leave a lasting
              impression.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-700 p-6 rounded-lg">
                <Gamepad className="h-10 w-10 text-purple-400 mb-4" />
                <h4 className="text-xl font-semibold mb-2 text-white">Game Development</h4>
                <p className="text-gray-300">
                  Full-cycle development from concept to deployment
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <Code className="h-10 w-10 text-green-400 mb-4" />
                <h4 className="text-xl font-semibold mb-2 text-white">Programming</h4>
                <p className="text-gray-300">
                  Clean, efficient code with a focus on performance
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <Palette className="h-10 w-10 text-pink-400 mb-4" />
                <h4 className="text-xl font-semibold mb-2 text-white">Art & Design</h4>
                <p className="text-gray-300">
                  Visually appealing assets and interfaces
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <Users className="h-10 w-10 text-blue-400 mb-4" />
                <h4 className="text-xl font-semibold mb-2 text-white">
                  Player Experience
                </h4>
                <p className="text-gray-300">
                  Focused on creating memorable player journeys
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-purple-400">
            My Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-gray-700 p-6 rounded-lg"
              >
                <h4 className="text-xl font-semibold mb-4 text-center text-white">
                  {skillGroup.category}
                </h4>
                <div className="space-y-4 text-white">
                  {skillGroup.items.map((skill) => (
                    <SkillBadge
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={skill.color}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
