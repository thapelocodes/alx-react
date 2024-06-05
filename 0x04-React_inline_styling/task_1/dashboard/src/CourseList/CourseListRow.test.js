import React from "react";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";

describe("Course List Row component test", () => {
  it("should render without crashing", () => {
    const CLR = shallow(<CourseListRow textFirstCell="test" />);

    expect(CLR.exists()).toBe(true);
  });

  it("should render one cell with colspan = 2 when textSecondCell null", () => {
    const CLR = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="test"
        textSecondCell={null}
      />
    );

    expect(CLR.find("tr").children()).toHaveLength(1);
    expect(CLR.find("tr").childAt(0).html()).toEqual(
      '<th style="background-color:#deb5b545" colSpan="2">test</th>'
    );
  });

  it("should render two cells when textSecondCell not null", () => {
    const CLR = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell="test"
        textSecondCell="test"
      />
    );

    expect(CLR.find("tr").children()).toHaveLength(2);
    expect(CLR.find("tr").childAt(0).html()).toEqual("<td>test</td>");
    expect(CLR.find("tr").childAt(1).html()).toEqual("<td>test</td>");
  });
});
