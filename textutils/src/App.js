import Navbar from "./component/Navbar.js";
import TextForm from "./component/TextForm.js";

function App() {
  return (
    <div>
      <Navbar title="TextUtils" home="Home" about="About us" />
      <div className="container">
        <TextForm heading="Enter the Text to Analyze Below" />
      </div>
    </div>
  );
}

export default App;
