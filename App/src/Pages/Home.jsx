import React, { useEffect, useState } from "react";

const Home = () => {
  const [studentName, setStudentName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("student");
    console.log(storedName);
    if (storedName) {
      setStudentName(storedName);
    }
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome, {studentName ? studentName : "Guest"} 👋</p>
    </div>
  );
};

export default Home;
