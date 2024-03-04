import { connect } from "react-redux";
import Listings from "../components/Listings";
import { deleteListing } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteListing: (index) => dispatch(deleteListing(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listings);
