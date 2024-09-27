
import React from 'react';  

class About extends React.Component {  
  render() {  
    return (  
      <div className="relative max-w-2xl mx-auto mt-10">  
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>  
      <div className="p-8 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-lg shadow-lg transition-transform transform hover:scale-105">  
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>  
          <p className="text-gray-700 mb-4">  
          A game enthusiast with a passion for programming, especially in web development and mobile applications. With an educational background of Bachelor's 
          Degree in Informatics Engineering Dipa University Makassar (GPA 3.76) and a strong interest in mobile technology, I have a solid programming foundation and 
          determination to understand more deeply the aspects of mobile application development.
          </p> 
          <p className="text-gray-700 mb-4">
          I am currently working as a mobile developer at a startup company, where I have gained valuable experience in mobile application development using React Native.
          I am always eager to learn and improve my skills, and I am excited to continue growing as a developer in the mobile technology industry.
          </p> 
          <div className="mt-6">  
            <h2 className="text-2xl font-semibold text-gray-800">Fun Facts:</h2>  
            <ul className="list-disc list-inside text-gray-600 mt-2">  
            <li>I love experimenting with new programming languages.</li>  
            <li>I enjoy playing RPGs and exploring virtual worlds.</li>  
            <li>I'm always on the lookout for the latest tech gadgets and gaming gear.</li> 
            </ul>  
          </div>  
        </div>  
      </div>  
    );  
  }  
}  

export default About;  
