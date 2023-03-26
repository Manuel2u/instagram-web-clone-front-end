import React from 'react'

  function InstagramSignup() {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleUsernameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Add logic to submit the form
  };
  return (
    <>
    <div className='flex justify-center '>
      <h1 className="text-5xl" >Sign Up</h1><br/>
      
    </div>
    <div className='flex justify-center grid-rows-3 pt-20 border-stone-500'>
    <form onSubmit={handleSubmit}>
      <table className='grid grid-cols-2 gap-x-0 gap-y-8 border-2 px-11'>
        <tr>
          <td>
            <table className='place-content-center' border={2}>
        <tr>
          <div className=' flex text-5xl justify-center'>
           <h1 className=' flex text-5xl justify-center pt-10'>Instagram</h1>
          </div>
          <div className=' py-4 italic'>
            <p><strong>Signup to see picture<br/>and videos from your friends</strong></p>
          </div>

      <label className='border-3 border-black'>
        Username:
        <br/><input className=' border-sky-500' placeholder='name_me' type="text" value={username} onChange={handleUsernameChange} />
      </label> 
      </tr>
      <tr>
      <label>
        Email:
        <br/><input placeholder='123@gmail.com' type="email" value={email} onChange={handleEmailChange} />
      </label>
      </tr>
      <tr>
      <label>
        Password:
        <br/> <input placeholder='*****' type="password" value={password} onChange={handlePasswordChange} /><br/>
        <br/>
      </label>
      </tr>
      <tr>
        <br/><button className=" px-14 bg-sky-500 hover:bg-sky-700 ... rounded-md text-lg ">
        Sign Up
        </button>
      </tr>
      </table>
      </td>
      </tr>
      </table>
    </form>
    </div>
    </>
  )
}

export default InstagramSignup
