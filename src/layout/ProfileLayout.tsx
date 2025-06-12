import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Sider, Content } = Layout;

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  height: "100%",
  width:"100%",
  lineHeight: "100%",
  color: "#fff",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
};

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  height:"100vh"

};

const ProfileLayout = () => {
  return (
    <>
      <Layout style={layoutStyle}>
        <Sider width="469px" style={siderStyle}>
          Sider
        </Sider>
        <Layout>
          <Content style={contentStyle}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default ProfileLayout;
