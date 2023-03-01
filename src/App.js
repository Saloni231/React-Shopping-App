import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { Fragment, useEffect } from "react";
import Notification from "./components/UI/Notification";
import {
  FetchDataFromDatabase,
  SendDataToDatabase,
} from "./store/Cart-Actions";

let isInitial = true;
function App() {
  const isCartVisible = useSelector((state) => state.UI.isVisible);
  const notification = useSelector((state) => state.UI.notification);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.Cart);

  useEffect(() => {
    dispatch(FetchDataFromDatabase());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(SendDataToDatabase(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isCartVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
