import React, { useState } from 'react'
import axios from 'axios'

const Log_in = () => {
  const [log, setlog] = useState(true)
  const [MobSignUp, setMobSignUp] = useState(false)

  const [data, setdata] = useState({
    name: "",
    password: "",
    department: "",
    semester: "",
    role:"student"
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/users/login", {
        name: data.name,
        password: data.password
      });

      console.log("Login success:", res.data);
      localStorage.setItem("student", res.data.user.name);
      alert("Login successful!");
    } catch (err) {
      console.error("Error:", err.response?.data || err.message);
      alert(err.response?.data?.error || "Login failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/users/", data);
      console.log("Saved:", res.data);
  
      alert("Student saved successfully!");
  
      setdata({ name: "", password: "", departmentment: "", semester: "" });
    } catch (err) {
      console.error("Error:", err.response?.data || err.message);
    }
  };
  
  return (
    <div>
      <div className="sign-up min-h-[calc(100vh-5rem)] flex items-center ">
        <div className="container mx-3 md:flex justify-around gap-5 md:border rounded-xl drop-shadow-xl bg-white">


          <div className={`${log ? 'Sign_toggle rounded-tr-[20%] rounded-br-[20%]' : 'Sign_toggle rounded-tl-[20%] rounded-bl-[20%] translate-x-[65%]'} hidden md:flex flex-col gap-5 items-center justify-center transition-all duration-500`}>
            <h1 className="Title">Hello, Friend!</h1>
            <h1>Register with your personal details to use all of site features</h1>
            <div className="secondary-btn cursor-pointer" onClick={() => setlog(!log)}>
              {log ? <>SIGN UP</> : <>SIGN IN</>}
            </div>
          </div>

          <div className={`${log ? 'Sign hidden' : 'Sign -ml-[100%]'} transition-all duration-300`}>
            <h1 className="Title">Sign up</h1>
            <h1>Use your email and password</h1>
            <div className="form w-[80%] py-5 flex mx-auto items-center flex-col gap-5">
              <input className="input" name="name" onChange={handleChange} type="text" placeholder="Name" required />

              <div className="w-full relative">
                <input
                  className="input w-full pr-10"
                  name="password"
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                />
                <span
                  className="absolute right-3 top-2 cursor-pointer text-sm text-blue-600"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>

              <input className="input" name="department" onChange={handleChange} type="text" placeholder="departmentment" required />
              <input className="input" name="semester" onChange={handleChange} type="number" placeholder="Semester" required />

              <h1>Already have an account</h1>
              <div className="primary-btn cursor-pointer" onClick={handleSubmit}>SIGN UP</div>
            </div>
          </div>


          {log ? (
            <div className={`${log ? 'Sign translate-x-0' : 'Sign_toggle hidden'} ${MobSignUp ? 'hidden' : 'Sign'} transition-all duration-300`}>
              <h1 className="Title">Sign in</h1>
              <h1>Use your email and password</h1>
              <div className="form w-[80%] py-5 flex mx-auto items-center flex-col gap-5">
                <input className="input" name="name" onChange={handleChange} type="text" placeholder="Name" required />


                <div className="w-full relative">
                  <input
                    className="input w-full pr-10"
                    name="password"
                    onChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    required
                  />
                  <span
                    className="absolute right-3 top-2 cursor-pointer text-sm text-blue-600"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </span>
                </div>

                <h1>Forget your password?</h1>
                
                <div className='flex gap-5'>
                <div className="primary-btn cursor-pointer" onClick={handleLogin}>SIGN IN</div>
                <div className="primary-btn cursor-pointer md:hidden" onClick={() => setMobSignUp(!MobSignUp)}>SIGN UP</div>
                </div>

              </div>
            </div>
          ) : (
            <div></div>
          )}

          <div className={`${MobSignUp ? 'flex' : 'hidden'} md:hidden flex flex-col gap-5 items-center justify-center transition-all duration-300`}>
            <h1 className="Title">Sign up</h1>
            <h1>Use your email and password</h1>
            <div className="form w-[80%] py-5 flex mx-auto items-center flex-col gap-5">
              <input className="input" name="name" onChange={handleChange} type="text" placeholder="Name" required />

              <div className="w-full relative">
                <input
                  className="input w-full pr-10"
                  name="password"
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                />
                <span
                  className="absolute right-3 top-2 cursor-pointer text-sm text-blue-600"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>

              <input className="input" name="department" onChange={handleChange} type="text" placeholder="departmentment" required />
              <input className="input" name="semester" onChange={handleChange} type="number" placeholder="Semester" required />

              <div onClick={() => setMobSignUp(!MobSignUp)}><h1>Already have an account</h1></div>
              <div className="primary-btn cursor-pointer" onClick={handleSubmit}>SIGN UP</div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Log_in
