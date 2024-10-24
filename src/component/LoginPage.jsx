import React, { useEffect, useState } from 'react'
import { Covers } from './Covers'

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(()=>{
    const interval =setInterval(()=>{
      setCurrentImageIndex((prevIndex)=>
        prevIndex === Covers.length - 1 ? 0 : prevIndex + 1
      );
    },3000);
    return ()=>
      clearInterval(interval);
  },[Covers.length])

  const hideShow = () => {
    setShowPassword(!showPassword);
  };

  
  return (
    <div className='flex flex-1'>
        <div className=' w-6/12 h-screen flex relative'>
          <img src={Covers[currentImageIndex]} alt="cover2" className='ml-[369px] mt-[3rem]  h-[35rem]' />
          <img src="iphonecoveroriginal.png" alt="cover1" className='mt-[1rem] ml-[19rem] h-[105%] absolute top-0 left-0  '/>
        </div>
        <div className='  w-6/12 h-screen'>
            <div className='flex flex-1 flex-col border   p-10 mt-8    ml-7 w-[53vh]'>
                <img src="logo.png" alt="logo" className='h-[15vh] w-[28vh] ml-9' />
                <input type="text" placeholder='Phone number, username, or email' className='rounded-sm text-xs p-2 box-border mt-4 bg-gray-100 outline-none' />
                <input hideShow={hideShow}  type={showPassword ? 'text' : 'password'}  placeholder='Password' className='rounded-sm text-xs p-2 border mt-2 bg-gray-100 outline-none' />
                <button className='flex px-[40%] mt-3 font-semibold text-white py-1 rounded-lg bg-sky-400'>Log in</button>
                <span className='mt-4'>----------------  OR  --------------------</span>
                <div className='flex gap-2 flex-1 ml-10 mt-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='h-5' viewBox="0 0 448 512"><path fill="#09398b" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>                  
                  <a href='https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Den_US%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%2522qgws6wqeayh1aleap31ckehnc13ldo0iv2hx9dlzhixhjn14r8%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3De9a32fd7-e9ee-4be7-b92a-d5c4357f7c3a%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%2522qgws6wqeayh1aleap31ckehnc13ldo0iv2hx9dlzhixhjn14r8%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=en_GB&pl_dbl=0' className='font-semibold text-sm text-blue-950'>Log in with Facebook</a>
                </div>
                <a href='https://www.instagram.com/accounts/password/reset/' className='text-sm ml-20 mt-5 text-blue-950'>Forgot password</a>
            </div>
            <div className='flex flex-1 border p-4 ml-7 w-[53vh] mt-3'>
            <p className='text-sm ml-10 mt-2 '>Don't have an account?    <a href='https://www.instagram.com/accounts/emailsignup/' className='text-sky-600 font-semibold cursor-pointer'>Sign up</a></p>
            </div>
        </div>
    </div>
  )
}

export default LoginPage


// photo adjusting
// placeholder moves upper
// input border don't work
