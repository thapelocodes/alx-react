import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css'

const CourseList = () => {
  return (
    <div className="table-padding">
      <table className='table-body'>
        <thead>
          <CourseListRow isHeader={true} textFirstCell="Available courses" />
          <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
        </thead>
        <tbody>
          <CourseListRow textFirstCell="ES6" textSecondCell="60" isHeader={false} />
          <CourseListRow textFirstCell="Webpack" textSecondCell="20" isHeader={false} />
          <CourseListRow textFirstCell="React" textSecondCell="40" isHeader={false} />
        </tbody>
      </table>
    </div>
  );
};

export default CourseList;
