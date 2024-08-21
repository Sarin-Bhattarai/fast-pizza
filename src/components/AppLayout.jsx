import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loading from "./Loading";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      {isLoading && <Loading />}
      {/* components */}
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
      {/* components */}
    </div>
  );
}

export default AppLayout;
