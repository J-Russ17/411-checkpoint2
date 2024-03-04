import { connect } from "react-redux";
import AddListing from "../components/AddListing";
import { addListing } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addListing: (newListing) => dispatch(addListing(newListing)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddListing);
