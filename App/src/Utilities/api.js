import axios from "axios";
const API_BASE_URL = "http://localhost:5000/api/users";

const StudentLogIn = async(data, navigate) => {
    try {
      const res = await axios.post(`${API_BASE_URL}/login`, {
        name: data.name,
        password: data.password
      });
  
      console.log("Login success:", res.data);
      localStorage.setItem("student", JSON.stringify(res.data.user));
      alert("Login successful!");
      navigate('/'); 
      window.location.reload();
    } catch (err) {
      console.error("Error:", err.response?.data || err.message);
      alert(err.response?.data?.error || "Login failed");
    } 
  };

  const AddStudent = async (data) => {
    try {
      const res = await axios.post( `${API_BASE_URL}` , data);
      console.log("Saved:", res.data);
      alert("Student saved successfully!");
      setData({ name: "", password: "", department: "", semester: "" });
    } catch (err) {
      console.error("Error:", err.response?.data || err.message);
    }
  };

  const GetStudent = async (name) => {
    try {
      const res = await axios.get(`${API_BASE_URL , name}`);
      console.log("User data fetched:", res.data);
      return res.data;
    } catch (err) {
      console.error("Error fetching user:", err.response?.data || err.message);
      return null;
    }
  };


export { StudentLogIn , AddStudent , GetStudent  };