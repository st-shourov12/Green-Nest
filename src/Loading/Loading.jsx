import React from 'react';
import { FadeLoader } from "react-spinners";

const Loading = () => {
    

  return (
    <div className="min-h-[60vh] bg-green-100 flex justify-center items-center">
      
          <FadeLoader color="#3498db" height={15} width={5} radius={2} margin={2} />
          <p style={{ marginTop: "15px", color: "#555", fontSize: "18px" }} className='text-xl text-black text-bold'>Loading...</p>
        
    </div>
  );
}

export default Loading;