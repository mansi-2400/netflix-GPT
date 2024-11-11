import GptSearchBar from "./GptSearchBar";
import { LOGIN_BG_IMG } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearchView = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          src={LOGIN_BG_IMG}
          alt="login-bg-color"
          className="bg-gradient-to-b from-black h-screen object-cover md:w-screen"
        />
      </div>

        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchView;
