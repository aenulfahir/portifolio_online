import React from 'react';  

class Home extends React.Component {  
  render() {  
    return (  
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">  
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>  
        <p className="text-lg text-center max-w-md">  
          Hi, I am Aenul, a Mobile Developer based in Indonesia.
        </p>  
      </div>  
    );  
  }  
}  

export default Home;