import React, { useState } from "react";
import "./index.scss";
import { Images } from "../../../assets/index";
import { useHistory } from "react-router-dom";

function HomePageSelector(props) {
  const history = useHistory();
  const [handleAddItem, setHandleAddItem] = useState(false);

  const handleRentals = () => {
    history.push("/");
    setHandleAddItem(handleAddItem);
  };

  const handleServices = (props) => {
    history.push("/home/services");
    setHandleAddItem(!handleAddItem);
  };

  const handleAddRentalItems = (props) => {
    history.push("/add-rental-items");
  };

  return (
    <>
      <div className="select_popup_page">
        <div className="select_popup_container">
          <h3>Select type</h3>

          <div className="rentals_container">
            <div
              onClick={(e)=>handleRentals}
              handleRentals={handleRentals}
              className="rentals_div"
            >
              <h4 className="rentals">Rentals</h4>
              <div className="selected_div">
                <h4>Selected</h4>
                <img src={Images.SelectIcon} alt="" />
              </div>
            </div>
            <div
              onClick={(e)=>handleServices}
              handleServices={handleServices}
              className="services_div"
            >
              <h4 className="rentals">Services</h4>
              <div className="selected_div">
                {/* <h4>Selected</h4> */}
                <img src={Images.SelectIcon} alt="" />
              </div>
            </div>

            <div className="add_item_container">
              <div className="add_item_div">
                <img src={Images.AddcircleIcon} alt="" />
                 {/* {(handleAddItem && (  */}
                  <h4
                    onClick={handleAddRentalItems}
                    className="add_rental_item"
                  >
                    Add Rental Item
                  </h4>
                {/* //  )) ||
                  // (!handleAddItem && (
                  //   <h4 className="add_rental_item">Add Service Item</h4>
                  // ))}  */}
              </div>
              {props.closeTab ? <h4 className="close">Close</h4> : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePageSelector;
