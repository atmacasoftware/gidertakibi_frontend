import { FaRegCircleUser } from "react-icons/fa6";

export default function ProfileImage({width, heigth, image, tempImage, firstname, lastname}){

    const userImage = `http://localhost:8050/assets/profile/${image}`;

    return(
        <>
            {image ? <img src={tempImage || userImage} alt="Profile Image" className="rounded-circle" width={width} height={heigth} /> : <FaRegCircleUser /> }
        </>
    )
}