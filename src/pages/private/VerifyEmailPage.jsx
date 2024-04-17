import { VerifyEmail } from "../../organisms/LoginForms";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { VerifyEmail as verifyEmail } from "../../api";
import Swal from "sweetalert2";
import Cookies from "universal-cookie";

function VerifyEmailPage() {
  const { email, isMessage, message  } = useUserContext();

  const redirectPage = useNavigate();

  const cookies = new Cookies();

  const [token, setToken] = useState({
    option:'login',
    secretCode: "",
    email: email,
  });


  const { register, handleSubmit: handleValidateSubmit, formState: { errors } } = useForm();
  const handleSubmit = async (e) => {
    console.log('token', token)
    try {
      
      const res = await verifyEmail(token);

      if(res.message === 'ok'){
        cookies.set('x-access-user', res.token, { path: '/', expires: new Date(Date.now() + 86400000) });
        redirectPage('/app');
      }
      else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Respuesta Incorrecta",
        });
      }
    } catch (error) {

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error interno del servidor",
      })
    }
  };


  const handleChange = (e) => {
    setToken({
      ...token,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div>
      <div className="flex w-full h-screen ">
        <div className="hidden relative lg:flex h-full lg:w-5/12 items-center justify-center bg-blue-200/20">
          <div className="w-60 h-60 bg-gradient-to-tr from-green-900 to-green-600 rounded-full animate-bounce" />
          <div className="w-full h-1/2 absolute bottom-0 bg-white/5 backdrop-blur-lg flex justify-center"></div>
        </div>
        <div className="w-full flex items-center justify-center lg:w-7/12 py-4">
          <VerifyEmail user={email} isMessage={isMessage} message={message} onChange={handleChange} validate={register} errors={errors} onSubmit={handleValidateSubmit(handleSubmit)} />
        </div>
      </div>
    </div>
  );
}

export default VerifyEmailPage;
