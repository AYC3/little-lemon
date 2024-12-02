import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Main from "./components/Main";
import BookingForm from "./components/BookingForm";

function App() {
  return (
    <>
      <Nav />
      {/* <Header /> */}
      {/* <BookingForm /> */}
      <Main />
      <Menu />
      <Footer />
    </>
  );
}

export default App;
