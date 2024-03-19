import HeaderApp from "./HeaderApp";
import FooterApp from "./FooterApp";

function Layout({ children }) {
  return (
    <div className="layout">
      <HeaderApp />
      <div className="container">{children}</div>
      <FooterApp />
    </div>
  );
}
export default Layout;
