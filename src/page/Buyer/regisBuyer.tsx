import React, { useState } from 'react';

const RegisBuyer = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const [FullName, setFullName] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      
      {/* Formulir login di sebelah kanan */}
      <div className="w-1/2 flex items-center justify-center p-10">
        <div className=" p-8 rounded  w-96">
          <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                FullName:
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={FullName}
                onChange={handleFullNameChange}
                placeholder="Enter your username"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Enter your username"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="relative w-1/2 bg-cover"
        style={{
          backgroundImage: 'url("https://media.istockphoto.com/id/1330424071/id/foto/sekelompok-besar-orang-di-sebuah-pesta-konser.jpg?s=612x612&w=0&k=20&c=Wz4Co47Nn1MB6Bm62x_8uVqofqKkxCG3lY7OiZ6FdKw=")',

        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-2 font-[titan]">Welcome!</h1>
          <h3 className="text-xl my-5 font-[titan] ">Event, Easier With EVVE</h3>
        </div>
      </div>
    </div>
  );
};

export default RegisBuyer;
