import { connect } from "react-redux";
import Listings from "../components/Listings";

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
  };
};

export default connect(mapStateToProps)(Listings);
