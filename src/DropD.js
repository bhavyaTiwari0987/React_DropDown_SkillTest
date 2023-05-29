import './Dropdown.css';
import { useEffect , useState } from 'react';

const Dropdown = (props)=> {
  const [isActive , setActive] = useState(false);
  const {options} = props;
  const [value , setValue] = useState("");

  const onClickListItem = (e) => {
    setValue(e.target.textContent);
    setActive(false);
  }
  const onMouseHover= () => {
    setActive(true);
  }
    return (
      <div className="DropD">
        <header className="Dropdown-header">
          <h2>Should you use a dropdown?</h2>
          <h3>{value}</h3>
            <button onMouseEnter={onMouseHover} className='dropbtn'>Select</button>              
              {options.map((option , index) => {
                return (
                    <a href="#" onClick={onClickListItem} class="droplist" key={index} style={{display: `${isActive? "block" : "none"}`}}>{option}</a>
                )
              })}

        </header>
      </div>
    );
}

export default Dropdown;