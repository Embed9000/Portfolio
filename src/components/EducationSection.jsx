import React from 'react'
import { GraduationCap, Award, BookOpen } from 'lucide-react'
export const EducationSection = () => {
  const education = [
    {
      type: 'degree',
      title: "Bachelor's degree",
      institution: 'Constantin Stamati Theoretical',
      year: '2023',
      description:
        'High School Graduated.',
    },
    {
      type: 'degree',
      title: 'The profession of the future: Game design',
      institution: 'State University of Moldova (USM)',
      year: 'Currently in 3nd year of a 3-year program',
      description:
        'Specialized in Game Design, scripting and animation programming, as well as UI and sound design.',
    },
  ]
  const courses = [
    {
      title: 'Startup 101',
      provider: 'Yep Moldova',
      year: '2022',
      skills: ["Entrepreneurship",'Innovation'],
    },
    {
      title: 'Future Creatives – Startup Training',
      provider: 'Mediacor (USM)',
      year: '2025',
      skills: ['AI Programming', 'Behavior Trees', 'Pathfinding Algorithms'],
    },

  ]
  return (
    <section id="education" className="py-20 bg-[#101829] w-full text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & Courses
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="h-8 w-8 text-purple-500 mr-3" />
              <h3 className="text-2xl font-semibold">Formal Education</h3>
            </div>
            <div className="space-y-8">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-700 rounded-lg p-6 relative"
                >
                  {item.type === 'degree' ? (
                    <GraduationCap className="absolute top-6 right-6 h-12 w-12 text-purple-500/20" />
                  ) : (
                    <Award className="absolute top-6 right-6 h-12 w-12 text-purple-500/20" />
                  )}
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <div className="flex items-center text-purple-400 mb-2">
                    <span>{item.institution}</span>
                    <span className="mx-2">•</span>
                    <span>{item.year}</span>
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Courses & Certifications */}
          <div>
            <div className="flex items-center mb-8">
              <BookOpen className="h-8 w-8 text-purple-500 mr-3" />
              <h3 className="text-2xl font-semibold">
                Courses & Certifications
              </h3>
            </div>
            <div className="space-y-6">
              {courses.map((course, index) => (
                <div key={index} className="bg-gray-700 rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-2">{course.title}</h4>
                  <div className="flex items-center text-purple-400 mb-4">
                    <span>{course.provider}</span>
                    <span className="mx-2">•</span>
                    <span>{course.year}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {course.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-600 text-gray-300 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationSection