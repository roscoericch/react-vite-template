import { useAppSelector } from "../store/hooks"

const HomePage = () => {
  const {user} = useAppSelector((store)=>store.user)
  return (
    <div className="p-[5%] text-[#000000] bg-[#FBFEFD]">
      <h1 className="text-[20px]">Hi {user},</h1>
      <p>you can manage your whole team from here.</p>
    </div>
  )
}

export default HomePage