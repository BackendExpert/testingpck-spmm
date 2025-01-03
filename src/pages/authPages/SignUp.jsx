import axios from 'axios';
import React, { useState } from 'react'
import InputDefault from '../../components/Forms/InputDefault';
import DefualtBtn from '../../components/Button/DefualtBtn';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const navigate = useNavigate()
    const [SignUpData, SetSignUpData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        SetSignUpData((prevData) => ({
          ...prevData,
          [name]: value
        }));
    };

    const headlLogin = async (e) => {
        e.preventDefault();

        try{
            const res = await  axios.post(import.meta.env.VITE_APP_API + '/auth/signup', SignUpData)
            .then(res => {
                if(res.data.Status === "Success"){
                    alert("Registaion Success")
                    navigate('/SignUp')
                }
                else{
                    alert(res.data.Error)
                }
            })
        }
        catch(err){
            console.log(err)
        }
    }

  return (
    <div className='bg-gray-200 min-h-screen'>
        <div className="md:grid grid-cols-3 gap-3 py-[10%]">
            <div className="w-full"></div>
            <div className="w-full">
                <div className="bg-white p-4 rounded shadow-md">
                    <h1 className="uppercase text-gray-500 text-center font-semibold">Login</h1>

                    <div className="my-4">
                        <div className="">
                            <form onSubmit={headlLogin} method="post">
                                <div className="my-2">
                                    <p className="py-2">Username</p>
                                    <InputDefault 
                                        type={'text'}
                                        name={'username'}
                                        value={SignUpData.username}
                                        required={true}
                                        placeholder={'Enter Username'}
                                        onchange={handleInputChange}
                                    />
                                </div>
                                <div className="my-2">
                                    <p className="py-2">Email</p>
                                    <InputDefault 
                                        type={'email'}
                                        name={'email'}
                                        value={SignUpData.email}
                                        required={true}
                                        placeholder={'Enter Email Address'}
                                        onchange={handleInputChange}
                                    />
                                </div>
                                <div className="my-2">
                                    <p className="py-2">Password</p>
                                    <InputDefault 
                                        type={'password'}
                                        name={'password'}
                                        value={SignUpData.password}
                                        required={true}
                                        placeholder={'Enter Password'}
                                        onchange={handleInputChange}
                                    />
                                </div>

                                <div className="my-4">
                                    <DefualtBtn btntype={'submit'} btnvalue={'Create Account'}/>
                                </div>
                            </form>
                        </div>
                        <div className="">
                            <p className="my-4">Already have an Account ? <a href="/SignUp" className='text-blue-500 font-semibold'>Create One</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full"></div>
        </div>
    </div>
  )
}

export default SignUp