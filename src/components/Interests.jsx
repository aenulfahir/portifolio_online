
import React from 'react';  

class Interests extends React.Component {  
  render() {  
    return (  
      <div className="p-8 bg-white rounded-lg shadow-lg max-w-2xl mx-auto mt-10 relative overflow-hidden">  
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-30 rounded-lg"></div>  
        <h1 className="text-4xl font-bold text-gray-800 relative z-10 mb-4">My Interests</h1>  
        <p className="text-gray-700 relative z-10">  
          I enjoy coding, reading tech blogs, and contributing to open-source projects. In my free time, I love exploring new technologies and frameworks.  
        </p>  
        <ul className="list-disc list-inside text-gray-700 mt-4 relative z-10">  
          <li>🌐 Exploring Web Development</li>  
          <li>📚 Reading Tech Blogs</li>  
          <li>💻 Contributing to Open Source</li>  
          <li>🚀 Learning New Frameworks</li>  
        </ul>  
      </div>  
    );  
  }  
}  

export default Interests;  
