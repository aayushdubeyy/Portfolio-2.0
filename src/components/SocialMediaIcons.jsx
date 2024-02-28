import github from "../assets/github-logo.svg"
import fillcv from "../assets/read-cv-logo-fill.svg"
import dualcv from "../assets/read-cv-logo-duotone.svg"
import regularcv from "../assets/read-cv-logo.svg"
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/aayush-dubey-801302205/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/aayushd88123029"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src="../assets/twitter.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/facebook.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/theaayushdubey/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/aayushdubeyy"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src={github} className=" scale-125" />
        {/* <GithubLogo size={32} color="#ddd4d4" /> */}
      </a>
      <a href="https://drive.google.com/file/d/1p15IGhah9v9N-APdPIIYLmTri90bC7DA/view?usp=drive_link" 
      className="hover:opacity-50 transition duration-500">
        <img src={regularcv} alt="" className="scale-125"/>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
