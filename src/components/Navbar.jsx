import React from 'react';  
import { Link } from 'react-router-dom';  

class Navbar extends React.Component {  
  render() {  
    return (  
      <nav className="bg-white shadow-md">  
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">  
          <h1 className="text-2xl font-bold text-blue-500 transition-transform transform hover:scale-105">  
            My Portfolio  
          </h1>  
          <ul className="flex space-x-6">  
            <li>  
              <Link to="/" className="text-gray-700 hover:text-blue-500 transition duration-300 transform hover:scale-105">  
                Home  
              </Link>  
            </li>  
            <li>  
              <Link to="/about" className="text-gray-700 hover:text-blue-500 transition duration-300 transform hover:scale-105">  
                About  
              </Link>  
            </li>  
            <li>  
              <Link to="/experience" className="text-gray-700 hover:text-blue-500 transition duration-300 transform hover:scale-105">  
                Experience  
              </Link>  
            </li>  
            <li>  
              <Link to="/skills" className="text-gray-700 hover:text-blue-500 transition duration-300 transform hover:scale-105">  
                Skills  
              </Link>  
            </li>  
            <li>  
              <Link to="/interests" className="text-gray-700 hover:text-blue-500 transition duration-300 transform hover:scale-105">  
                Interests  
              </Link>  
            </li>  
            <li>  
              <Link to="/awards" className="text-gray-700 hover:text-blue-500 transition duration-300 transform hover:scale-105">  
                Awards  
              </Link>  
            </li>  
          </ul>  
        </div>  
      </nav>  
    );  
  }  
}  

export default Navbar;