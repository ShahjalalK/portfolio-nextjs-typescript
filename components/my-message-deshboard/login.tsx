import { auth } from '@/firebase.config';
import React, {useState} from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { ThreeDots } from 'react-loader-spinner';
import { toast } from 'react-toastify';

type Props = {}

const Login = (props: Props) => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [showPassword, setShowPassword] = useState(false)


    const submitHandler = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!email || !password){
            return
        }
        signInWithEmailAndPassword(email, password).then((res) => (
            toast("Login was successful!")
        ))
    }
  return (
    <form onSubmit={submitHandler} className="max-w-md mx-auto flex flex-col space-y-3 mb-10">
        <input value={email} onChange={(e) => setEmail(e.target.value) } type="email" className="flex-grow p-1 rounded focus:outline-none border border-primary/20 w-full" placeholder='Email' />
        <div className="relative">
        <input value={password} onChange={(e) => setPassword(e.target.value) } type={showPassword ? "text" : "password"} className="flex-grow p-1 rounded focus:outline-none border w-full border-primary/20" placeholder="Password" />
           <span className="absolute cursor-pointer top-[50%] -translate-y-[50%] text-xl right-3" > {showPassword ? <BsFillEyeSlashFill onClick={() => setShowPassword(false)} /> : <BsFillEyeFill  onClick={() => setShowPassword(true)} />}  </span>
        </div>
        <div>
        <button type='submit' className="px-7 py-1 rounded bg-primary text-white">
            {loading ? <ThreeDots 
height="28" 
width="40" 
radius="9"
color="#4fa94d" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}

visible={true}
 /> : "Submit"} </button>
        </div>
        
    </form>
  )
}

export default Login