import { RestorePassword } from "../../organisms/LoginForms"
import { useState } from "react"
import { useForm } from "react-hook-form"
function RestorePasswordPage() {
  const { register, handleSubmit: handleValidateSubmit, formState: { errors } } = useForm()
  const [user, setUser] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    console.log('user')
  }
  return (
    <div className="flex w-full h-screen ">
      <div className="w-full flex items-center justify-center lg:w-1/2">
      <RestorePassword user={user} onChange={handleChange} validate={register} errors={errors} onSubmit={handleValidateSubmit(handleSubmit)} />
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-red-900 to-red-600 rounded-full animate-bounce"/>
        <div className="w-full h-1/2 absolute bottom-0 bg-white/5 backdrop-blur-lg flex justify-center"></div>
      </div>
    </div>
  )
}

export default RestorePasswordPage