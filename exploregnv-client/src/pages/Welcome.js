import { useNavigate } from 'react-router-dom'; 
import '../App.css';
import Header from '../components/Header';

function Welcome() {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup'); 
  };

  const handleLoginClick = () => {
    navigate('/login'); 
  };

  return (
    <div className="blank-page">
      <Header />
      <div className="landing-container">
        <img
        src="/landingphoto.jpg"
        alt="Downtown Gainesville"
        className="landing-image"
      />
      <h1 className="landing-heading">Say Yes to Gainesville's Best</h1>

      <p className="landing-description">
        Gainesville, Florida, is a lively college town with tons of food, fun, and culture. 
        Not only is it home to the top-ranked University of Florida, but it also offers outstanding cultural scenes, outdoor recreation opportunities, and a vibrant downtown atmosphere.
        Whether you're a local, student at the University of Florida, or just visiting, there's always something new to discover in Gainesville.
      </p>

      <p className="landing-subheading">Already have an account?</p>
      <button className="landing-button" onClick={handleLoginClick}>
        Login Here
      </button>

      <p className="landing-subheading">Don't have an account?</p>
      <button className="landing-button" onClick={handleSignUpClick}>
        Sign Up Here
      </button>

    </div>
    </div>
  );
}

export default Welcome;
