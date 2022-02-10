import React from "react";
import LogoButton from "./LogoButton";
import CategoryButton from "./CategoryButton";
import ManageInventoryButton from "./ManageInventoryButton";
import {v4} from "uuid";
import PropTypes from "prop-types";

const categories = [
  "Food", 
  "Accessories",
  "Clothing"
];

function NavBar(props) {
  return (
    <React.Fragment>
        <LogoButton updateCategory={props.updateCategory} 
          updatePage={props.updatePage} />
        {categories.map(category => 
          <CategoryButton category={category}
            updateCategory={props.updateCategory} 
            updatePage={props.updatePage}
            key={v4()} />
        )}
        <ManageInventoryButton updatePage={props.updatePage} />
    </React.Fragment>
  );
}

NavBar.propTypes = {
  updateCategory: PropTypes.func
};

export default NavBar;