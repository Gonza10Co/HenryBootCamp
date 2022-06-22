import { Layout } from "antd";
import { useState } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";

function App() {

  return (
    <Layout>
      <Layout.Header style={{background: '#fff'}}><Header/></Layout.Header>
      <Layout.Content style={{ height: "100%", minHeight: "100vh" }}>
        <Counter/>
      </Layout.Content>
    </Layout>
  );
}

export default App;
