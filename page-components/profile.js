import { Avatar, Typography } from "@mui/material";
import { useSession } from "next-auth/react"


const ProfilePage = () => {
    const { data: session } = useSession();
    return (
    <>
    <h1>user</h1>
    <Typography>
        {session.user.name}
      </Typography>
      <Typography>
        <Avatar src={session.user.image} alt="" />
      </Typography>
    </>
  )
}

export default ProfilePage