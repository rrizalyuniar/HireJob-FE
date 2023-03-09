import axios from "axios";
import Swal from "sweetalert2";

// get All Recipe
export const getPortfolioByUser = (setPortfolio, id) => async (dispatch) => {
  try {
    axios
      .get(`http://localhost:4000/portfolio/worker/${id}`)
      .then((response) => {
        setPortfolio(response.data.data);
      });
    dispatch({ type: "GET_PORTFOLIO_BY_USER", payload: "success" });
  } catch (error) {
    Swal.fire({
    //   text: `${error.response.data.message}`,
      icon: "warning",
    });
  }
};