import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const navigate = useNavigate();
    const { googleLogin, githubLogin } = useContext(AuthContext);

    const handleSocialLogin = (media) => {
        media()
            .then(() => {
                toast.success("user sign in successful");
                navigate("/")
            })
            .catch(err => toast.error(err.message))
    }

    return (
        <>
            <div className="divider">continue with</div>
            <div className="flex justify-around">
                <button
                    onClick={() => handleSocialLogin(googleLogin)}
                    className="btn btn-neutral">Google </button>
                <button
                    onClick={() => handleSocialLogin(githubLogin)}
                    className="btn btn-neutral">Github </button>
            </div>
        </>
    );
};

export default SocialLogin;