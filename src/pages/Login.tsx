import { useCallback } from "react";
import { useAppDispatch } from "../store/hooks";
import { updateUser, updateCalls, updateTeams } from "../store/store";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const fetchData = useCallback(
      async () => {
        await fetch("http://localhost:3000/data").then((res)=>{
          res.json().then((res)=>{
            dispatch(updateUser(res.username));
            dispatch(updateCalls(res.calls));
            dispatch(updateTeams(res.teams));
            navigate("/");
            console.log(res);
          }).catch((err)=>{
            console.log(err)
          });
        }).catch((err)=>{
          console.log(err);
        })
    },
    [],
  )
  return (
    <main className="h-screen w-screen bg-white flex items-center justify-center">
      <button onClick={fetchData} className="bg-[#52DBB2] rounded-[10px] h-[80px] text-[#FFFCFC] font-[400] text-[30px]">Login</button>
    </main>
  )
}

export default Login;