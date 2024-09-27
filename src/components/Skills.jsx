
import React from 'react';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faReact, faJsSquare, faHtml5, faCss3Alt, faJava, faPython, faAndroid, faGitAlt, faAws } from '@fortawesome/free-brands-svg-icons';  
import { faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';  

class Skills extends React.Component {  
  render() {  
    return (  
      <div className="container mx-auto px-4 py-8">  
        <h1 className="text-4xl font-bold mb-8 text-center">Skills</h1>  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">  
          {this.renderSkill("React Native", "Mobile Development", faReact, "Intermediate", "text-blue-500")}  
          {this.renderSkill("JavaScript", "Web Development", faJsSquare, "Advanced", "text-yellow-500")}  
          {this.renderSkill("HTML & CSS", "Web Development", [faHtml5, faCss3Alt], "Advanced", "text-orange-500")}  
          {this.renderSkill("Java", "Software Development", faJava, "Intermediate", "text-red-500")}  
          {this.renderSkill("Python", "Data Science", faPython, "Intermediate", "text-yellow-500")}  
          {this.renderSkill("Android Development", "Mobile Development", faAndroid, "Intermediate", "text-green-500")}  
          {this.renderSkill("Git", "Version Control", faGitAlt, "Advanced", "text-orange-500")}  
          {this.renderSkill("AWS", "Cloud Computing", faAws, "Beginner", "text-yellow-500")}  
          {this.renderSkill("SQL", "Database Management", faDatabase, "Advanced", "text-blue-500")}  
          {this.renderSkill("Other Programming Languages", "Various", faCode, "Beginner", "text-gray-500")}  
        </div>  
      </div>  
    );  
  }  

  renderSkill(title, description, icon, level, iconColor) {  
    return (  
      <div className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-lg duration-300 hover:bg-gradient-to-r from-teal-400 to-blue-400">  
        <div className="flex items-center">  
          <div className={`mr-4 ${Array.isArray(icon) ? 'flex' : ''}`}>  
            {Array.isArray(icon) ? (  
              icon.map((i, index) => (  
                <FontAwesomeIcon key={index} icon={i} className={`mr-2 ${iconColor}`} />  
              ))  
            ) : (  
              <FontAwesomeIcon icon={icon} className={iconColor} />  
            )}  
          </div>  
          <div>  
            <h2 className="text-xl font-semibold">{title}</h2>  
            <p className="text-gray-600">{description}</p>  
            <span className="text-gray-600 mt-1">{level}</span>  
          </div>  
        </div>  
      </div>  
    );  
  }  
}  

export default Skills;  
