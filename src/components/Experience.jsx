
import React from 'react';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faGithub, faReact, faCss3Alt, faGitlab, faAndroid } from '@fortawesome/free-brands-svg-icons';  
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';  

class Experience extends React.Component {  
  render() {  
    return (  
      <div className="container mx-auto px-4 py-8">  
        <h1 className="text-4xl font-bold mb-8">Experience</h1>  
        <div className="space-y-8">  
          <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg duration-300 mx-4 hover:bg-gradient-to-r from-teal-400 to-blue-400">  
            <div className="flex justify-between items-center">  
              <div>  
                <h2 className="text-2xl font-semibold">Trainee of Mobile App Development with React Native</h2>  
                <p className="text-gray-600">Digital Talent Scholarship - Musiman</p>  
                <div className="flex items-center text-gray-600 mt-2">  
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />  
                  <span>Mei 2024 - Jul 2024</span>  
                </div>  
                <div className="flex items-center text-gray-600 mt-2">  
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />  
                  <span>Jarak jauh</span>  
                </div>  
                <div className="flex space-x-2 mt-2">  
                  <FontAwesomeIcon icon={faCss3Alt} className="text-blue-500" />  
                  <FontAwesomeIcon icon={faReact} className="text-blue-500" />  
                  <FontAwesomeIcon icon={faAndroid} className="text-green-500" />  
                </div>  
              </div>  
              <div>  
                <p className="text-gray-600">Onboarding Trainee</p>  
              </div>  
            </div>  
          </div>  
          <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg duration-300 mx-4 hover:bg-gradient-to-r from-teal-400 to-blue-400">  
            <div className="flex justify-between items-center">  
              <div>  
                <h2 className="text-2xl font-semibold">Project-based Virtual Intern : Mobile Apps Developer x Rakamin Academy</h2>  
                <p className="text-gray-600">PT Bank Mandiri (Persero) Tbk - Magang</p>  
                <div className="flex items-center text-gray-600 mt-2">  
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />  
                  <span>Nov 2023 - Des 2023</span>  
                </div>  
                <div className="flex items-center text-gray-600 mt-2">  
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />  
                  <span>Indonesia</span>  
                </div>  
                <div className="flex space-x-2 mt-2">  
                  <FontAwesomeIcon icon={faGitlab} className="text-orange-500" />  
                  <FontAwesomeIcon icon={faAndroid} className="text-green-500" />  
                </div>  
              </div>  
              <div>  
                <p className="text-gray-600">Unit Testing, Gitlab, Android API, dll</p>  
              </div>  
            </div>  
          </div>  
          <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg duration-300 mx-4 hover:bg-gradient-to-r from-teal-400 to-blue-400">  
            <div className="flex justify-between items-center">  
              <div>  
                <h2 className="text-2xl font-semibold">Vocational School Graduate Academy - Junior Mobile Programmer</h2>  
                <p className="text-gray-600">Kementerian Komunikasi dan Informatika Republik Indonesia - Purnawaktu</p>  
                <div className="flex items-center text-gray-600 mt-2">  
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />  
                  <span>Apr 2023 - Jun 2023</span>  
                </div>  
                <div className="flex items-center text-gray-600 mt-2">  
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />  
                  <span>Indonesia</span>  
                </div>  
                <div className="flex space-x-2 mt-2">  
                  <FontAwesomeIcon icon={faGithub} className="text-black" />  
                  <FontAwesomeIcon icon={faAndroid} className="text-green-500" />  
                </div>  
              </div>  
              <div>  
                <p className="text-gray-600">Mobile Security, Pengembangan Software, dll</p>  
              </div>  
            </div>  
          </div>  
          <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg duration-300 mx-4 hover:bg-gradient-to-r from-teal-400 to-blue-400">  
            <div className="flex justify-between items-center">  
              <div>  
                <h2 className="text-2xl font-semibold">Intern</h2>  
                <p className="text-gray-600">Kejaksaan Tinggi Sulawesi Selatan - Magang</p>  
                <div className="flex items-center text-gray-600 mt-2">  
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />  
                  <span>Sep 2022 - Nov 2022</span>  
                </div>  
                <div className="flex items-center text-gray-600 mt-2">  
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />  
                  <span>Makassar, Sulawesi Selatan, Indonesia</span>  
                </div>  
                <div className="flex space-x-2 mt-2">  
                  <FontAwesomeIcon icon={faGithub} className="text-black" />  
                  <FontAwesomeIcon icon={faAndroid} className="text-green-500" />  
                </div>  
              </div>  
              <div>  
                <p className="text-gray-600">Magang Kejaksaan</p>  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    );  
  }  
}  

export default Experience;  
