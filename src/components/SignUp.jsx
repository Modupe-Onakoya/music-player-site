import { useNavigate } from "react-router-dom"
import asset from "../assets/asset"
import { useForm } from "react-hook-form"


function SignUp() {

    const { register, handleSubmit, reset } = useForm()
    const navigate = useNavigate()

    const onsubmit = (data) => {
        localStorage.setItem("user", JSON.stringify(data))
        alert("saevd")
        navigate("/ ")

        reset()
        console.log(data)
    }

    return (
        <div className="px-4 max-sm:pt-10 sm:px-12 lg:px-24 xl:px-40  dark:text-white dark:bg-gradient-to-b from-black via-purple-900 to-black h-[100vh] lg:flex lg:justify-center lg:items-center ">

            <form className="flex flex-col  items-center  gap-5 py-4 text-sm lg:shadow-xl lg:w-[30%] " onSubmit={handleSubmit(onsubmit)}>
                <div className="flex max-lg:flex-col max-lg:w-[80%] max-lg:space-y-1 lg:w-[80%] ">
                    <label htmlFor="email" className="lg:hidden">email</label>
                    <input {...register("email", { required: true })} type="email" name="email" id="email" className="bg-gray-300 w-[100%] rounded-lg px-2 py-1.5 dark:bg-white dark:text-black lg:border lg:bg-white lg:rounded-sm" placeholder="email" />

                </div>
                <div className="flex flex-col w-[80%] space-y-1">
                    <label htmlFor="password" className="lg:hidden">password</label>
                    <input {...register("password", { required: true })} type="password" name="password" id="password" className="bg-gray-300 w-[100%] rounded-lg px-2 py-1.5 text-sm dark:bg-white dark:text-black lg:bg-white lg:border lg:rounded-sm " placeholder="password" />

                </div>
                {/* <Link to="/login" className="text-center bg-gray-300 w-[80%] rounded-lg py-1.5 px-10 dark:bg-white dark:text-black" >Sign in</Link> */}
                <button className="bg-gray-300 py-1 px-4 dark:bg-purple-900 rounded-sm">signup</button>


            </form>
        </div>
    )

}

export default SignUp
