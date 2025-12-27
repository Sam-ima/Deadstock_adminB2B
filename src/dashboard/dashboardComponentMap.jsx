import DashboardContent from "./dashboardContent";
import SellersPage from "../pages/sellers/sellerPage";
import CustomersPage from "../pages/customers/customerPage";
import ProductsPage from "../pages/products/productPage";
import LowStockPage from "../pages/lowStockPage";
import HiddenProductsPage from "../pages/hiddenProductPage";
import ReviewPage from "../pages/reviews/reviewPage";

export const componentMap = {
  "/dashboard": <DashboardContent />,
  "/sellers": <SellersPage />,
  "/customers": <CustomersPage />,
  "/products": <ProductsPage />,
  "/low-stock": <LowStockPage />,
  "/hidden-products": <HiddenProductsPage />,
  "/review": <ReviewPage />,
};

export const getDashboardComponent = (path) =>
  componentMap[path] || <DashboardContent />;
