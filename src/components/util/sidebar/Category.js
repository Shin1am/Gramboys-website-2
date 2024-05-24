import "../sidebar/Category.css";
import Input from "./Input.js";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">วิชา</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="math"
          title="Math"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value='eng'
          title="English"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sci"
          title="Science"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="code"
          title="Coding"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;