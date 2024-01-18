import Image from "next/image";
import BackButtonIllustration from '../../../public/assets/svg/illustrations/backButton.svg';
import { useRouter } from "next/navigation";
const BackButton = () => {
    const router = useRouter();
    function goHome(){
        router.push('/');
    }
    return(
        <div><Image src={BackButtonIllustration} alt="go Home" onClick={goHome}/></div>
    )
}
export default BackButton;