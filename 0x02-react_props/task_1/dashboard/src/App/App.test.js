import React from "react";
import App from "./App";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import { shallow } from "enzyme";

describe("App Component Tests", () => {
  it("Renders without crashing", () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });

  it("<Notifications/>", () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find(".App-header")).toBeDefined();
  });

  it("<Header/>", () => {
    const header = shallow(<Header />);
    expect(header.find(""));
  });

  it("<Login/>", () => {
    const login = shallow(<Login />);
    expect(login.find(".App-body")).toBeDefined();
  });

  it("<Footer/>", () => {
    const footer = shallow(<Footer />);
    expect(footer.find("App-footer")).toBeDefined();
  });
});
