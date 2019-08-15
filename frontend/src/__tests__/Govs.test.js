import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import { act } from "react-dom/test-utils";
import Govs from "../components/Govs";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Govs page tests", () => {
  test("shows a list of govs", () => {
    act(() => {
      ReactDOM.render(<Govs />, container);
    });
  });
});
