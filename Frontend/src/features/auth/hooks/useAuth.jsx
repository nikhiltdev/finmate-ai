import { useForm } from "react-hook-form"
import { loginUser, registerUser } from "../states/authAction";
import { useDispatch } from "react-redux";

function useAuth() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({});

  const onLoginSubmit = (data) => {
    dispatch(loginUser(data))
  };

  const onRegisterSubmit = (data) => {
    dispatch(registerUser(data))
  };

  return {
    register,
    handleSubmit,
    onLoginSubmit,
    onRegisterSubmit,
    setError,
    clearErrors,
    watch,
    setValue,
    reset,
    errors,
    isSubmitting,
  };
}
export default useAuth;
