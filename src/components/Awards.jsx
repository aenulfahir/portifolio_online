
import React from 'react';  

class Awards extends React.Component {  
  render() {  
    return (  
      <div className="p-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg max-w-2xl mx-auto mt-10 transition-transform transform hover:scale-105">  
        <h1 className="text-4xl font-bold text-white mb-6 text-center">Awards & Achievements</h1>  
        <ul className="list-disc list-inside text-gray-200">  
          <li className="hover:text-yellow-300 transition-colors">🏆 Best Developer at Home - 2023</li> 
          <li className="hover:text-yellow-300 transition-colors">🥇 Master of Snack Breaks - 2022</li>  
          <li className="hover:text-yellow-300 transition-colors">🎖️ Champion of Zoom Call Backgrounds - 2023</li>  
        </ul>  
      </div>  
    );  
  }  
}  

export default Awards;  
