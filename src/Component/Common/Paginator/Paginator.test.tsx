/* eslint-disable testing-library/await-async-query */
import React from "react";
import { create } from "react-test-renderer";
import Paginator from './Paginator';



describe("Poginator components tests", () => {
  test("Pages count is 11 but should be showed only 10", () => {
    const component = create(<Paginator totalItemCount={11} pageSize = {1}  portionSize = {10} />);
    const root = component.root;
    let spans  = root.findAllByType("span");

    expect(spans.length).toBe(10);
  });

  test("Pages count is more then  10 button Next should be present", () => {
    const component = create(<Paginator totalItemCount={1} pageSize = {1}  portionSize = {10} />);
    const root = component.root;
    let button  = root.findAllByType("span");

    expect(button.length).toBe(1);
  });
});