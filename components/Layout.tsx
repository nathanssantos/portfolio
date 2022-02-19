import LayoutStyles from "./style/LayoutStyles";

interface LayoutProps {
  children: React.ReactElement;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return <LayoutStyles className="app__layout">{children}</LayoutStyles>;
};

export default Layout;
