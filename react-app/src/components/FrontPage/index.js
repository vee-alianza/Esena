import { useSelector } from "react-redux";
// import Footer from "../Footer";
import SplashPage from "../SplashPage";
import HomePage from "../HomePage";
const FrontPage = () => {
  const session = useSelector((state) => state.session.user);

  console.log(session)

  if (!session) {
    return (
      <>
        <SplashPage />
        {/* <Footer /> */}
      </>
    );
  } else {
    return (
      <>
        <HomePage />
      </>
    );
  }
};

export default FrontPage;
