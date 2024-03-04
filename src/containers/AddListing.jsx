import { connect } from "react-redux";
import AddListing from "../components/AddListing";
import { addListing, deleteListing } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addListing: (listing) => dispatch(addListing(listing)),
    deleteListing: (index) => dispatch(deleteListing(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddListing);
