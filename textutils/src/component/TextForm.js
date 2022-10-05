import React,{useState} from "react";
import PropTypes from 'prop-types'

export default function TextForm(props) {

    const handleUPClick = () =>{
        let utext = text.toUpperCase();
        setText(utext);
    }

    const handleonChange = (event)=> {
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter Your Text Here");
  return (
    <div>
        <h1>{props.heading}</h1>
      <form>
        <div className="form-group">
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleonChange}></textarea>
        </div>
        <button className="btn btn-primary my-3" onClick={handleUPClick} type="button">Change To UpperCase</button>
      </form>
    </div>
  );
}

TextForm.propTypes = {
    heading: PropTypes.string, 
}
