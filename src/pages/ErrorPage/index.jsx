import Error from "../../components/Error";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function ErrorPage() {
  return (
    <div className="error">
      <Header />
      <Error />
      <Footer />
    </div>
  );
}

export default ErrorPage;
