import React, { useState } from 'react';
import '../css/ProfileList.css'; // Import CSS file
import ProfileCard from './ProfileCard';

function ProfileList() {
  // Dummy profile data
  const profiles = [
    { 
      id: 1, 
      name: 'Ashish Hiwale', 
      description: 'I am a Student at MITAOE,Pursuing my Btech in Electronic Engineering', 
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuDsaTfW7aIiYOh0vLzRXH8oEMIAeyPI6T53oaujVV_g&s',
      address: 'Bhusawal', 
      lat: 21.05053487889386,  
      lng: 75.79779381275934,
      mapUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1755.0322329304959!2d75.79896289713209!3d21.069074030452352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd9a61556423e47%3A0x47f833853d8103a6!2sBhusawal%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713481377655!5m2!1sen!2sin"`
    
      
    },
    { 
      id: 2, 
      name: 'Sushant Bansode', 
      description: 'I am a student at MITAOE,pursuing my Btech in Mechanical Engineering',
      photo: 'https://media.licdn.com/dms/image/D4D03AQHBPV6UVBedmw/profile-displayphoto-shrink_800_800/0/1694682990445?e=2147483647&v=beta&t=ygusCOkh6LHMCwreydcLi7IZGHQYJ7mZ6lQH5lgLymo',
      address: 'Pune', 
      lat: 18.669, 
      lng: 73.8866,
      mapUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1783.288612354412!2d75.22050433551668!3d19.94245395196027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb911e4bbd7a77%3A0xa6231b78dd0f5a8a!2sDaulatabad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713481622431!5m2!1sen!2sin" width="600" height="450" style="border:0;`
    },
    { 
      id: 3, 
      name: 'Aditi Bondre', 
      description: 'I am a employee at L&T fearm working as a sales manager.',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwA8sFB9m-CcmHuZNmtVaGcq7n19KoA5udtRqezHdcBQ&s',
      address: 'London', 
      lat: 18.675, 
      lng: 73.893,
      mapUrl:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2494.9428421490084!2d72.99416648375733!3d19.159392778886208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf523dd8b5ab%3A0x9de9a7f73961da61!2sAiroli%2C%20Navi%20Mumbai%2C%20Maharashtra%20400708!5e0!3m2!1sen!2sin!4v1713481767581!5m2!1sen!2sin" width="600" height="450" style="border:0;
      `
    },
    { 
      id: 4, 
      name: 'Sukanya Mathapati', 
      description: 'I am a Student at MITAOE,Pursuing my Btech in Electronic Engineering',
      photo: 'https://media.licdn.com/dms/image/D4D03AQElW_iUsFom0Q/profile-displayphoto-shrink_800_800/0/1686015531138?e=2147483647&v=beta&t=DXqCG7eM32HUCIGvie4C3qrKScmb6rUTTmHgZa90G8E',
      address: 'Wakad Pune', 
      lat: 18.671, 
      lng: 73.895,
      mapUrl: `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d793.380459568772!2d74.42752866510595!3d17.987384835591016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1713481987302!5m2!1sen!2sin" width="600" height="450" style="border:0; `
    }
  ];

  const [openMapId, setOpenMapId] = useState(null); // State to track the ID of the profile whose map is open

  const handleToggleMap = (profileId) => {
    setOpenMapId(profileId === openMapId ? null : profileId); // Toggle the openMapId state
  };

  return (
    <div className="profile-list">
      {profiles.map(profile => (
        <ProfileCard key={profile.id} profile={profile} isOpenMap={profile.id === openMapId} onToggleMap={handleToggleMap} />
      ))}
    </div>
  );
}

export default ProfileList;
