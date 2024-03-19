import HeaderApp from "./HeaderApp";
import FooterApp from "./FooterApp";

function Layout({ children }) {
  return (
    <>
      <HeaderApp />
      {children}
      <FooterApp />
    </>
  );
}
export default Layout;
