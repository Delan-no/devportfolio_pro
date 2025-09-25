import React from 'react';
import Icon from '../../../components/AppIcon';
import { useLanguage } from '../../../contexts/LanguageContext';

const SkillsSection = () => {
  const { t } = useLanguage();
  const skillCategories = [
    {
      title: t('skills.frontend'),
      icon: "Monitor",
      color: "bg-blue-500",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "TypeScript", level: 90, icon: "🔷" },
        { name: "Next.js", level: 85, icon: "▲" },
        { name: "Vue.js", level: 80, icon: "💚" },
        { name: "Tailwind CSS", level: 95, icon: "🎨" },
        { name: "SASS/SCSS", level: 85, icon: "💄" }
      ]
    },
    {
      title: t('skills.backend'),
      icon: "Server",
      color: "bg-emerald-500",
      skills: [
        { name: "Node.js", level: 90, icon: "🟢" },
        { name: "Express.js", level: 85, icon: "🚀" },
        { name: "Python", level: 80, icon: "🐍" },
        { name: "PostgreSQL", level: 85, icon: "🐘" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "Redis", level: 75, icon: "🔴" }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: "Cloud",
      color: "bg-purple-500",
      skills: [
        { name: "AWS", level: 80, icon: "☁️" },
        { name: "Docker", level: 85, icon: "🐳" },
        { name: "Kubernetes", level: 70, icon: "⚙️" },
        { name: "CI/CD", level: 80, icon: "🔄" },
        { name: "Terraform", level: 75, icon: "🏗️" },
        { name: "Nginx", level: 80, icon: "🌐" }
      ]
    },
    {
      title: t('skills.tools'),
      icon: "Wrench",
      color: "bg-orange-500",
      skills: [
        { name: "Git", level: 95, icon: "📝" },
        { name: "Jest", level: 85, icon: "🧪" },
        { name: "Figma", level: 80, icon: "🎨" },
        { name: "Jira", level: 85, icon: "📋" },
        { name: "GraphQL", level: 75, icon: "📊" },
        { name: "Socket.io", level: 80, icon: "🔌" }
      ]
    }
  ];

  const SkillBar = ({ skill }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="font-medium text-slate-700">{skill.name}</span>
        </div>
        {/* <span className="text-sm text-slate-500">{skill.level}%</span> */}
      </div>
      {/* <div className="w-full bg-slate-200 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div> */}
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center`}>
                  <Icon name={category.icon} size={20} color="white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-slate-900 mb-8">
            Certifications & Formations
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={24} color="#3b82f6" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">AWS Solutions Architect</h4>
              <p className="text-sm text-slate-600">Amazon Web Services - 2023</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="BookOpen" size={24} color="#10b981" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">React Advanced Patterns</h4>
              <p className="text-sm text-slate-600">Meta - 2024</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} color="#8b5cf6" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Cybersecurity Fundamentals</h4>
              <p className="text-sm text-slate-600">ANSSI - 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;