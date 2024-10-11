import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  // Log the doctors data to check if it's being fetched properly
  console.log(doctors); // This will show you the data being fetched

  return (
    <div>
      <p>My appointments</p>
      <div>
        {doctors.slice(0, 2).map((item, index) => (
          <div key={index}>
            <div>
              {/* Log the image URL for each doctor */}
              <img src={item.image} alt="" className="w-32 h-32 object-cover" />
              {console.log(item.image)} {/* This will log each image URL */}
            </div>
            <div>
              <p>{item.name}</p>
              <p>{item.speciality}</p>
              <p>Address</p>
              <p>{item.address.line1}</p>
              <p>{item.address.line1}</p>
              <p>
                <span>Date & Time:</span> 25, July, 2024 | 8:30 PM
              </p>
            </div>
            <div></div>
            <div>
              <button>Pay Online</button>
              <button>Cancel Appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
