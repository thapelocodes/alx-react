import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader = false, textFirstCell, textSecondCell = null }) => {
  return (
    <tr>
      {isHeader ? (
        textSecondCell === null ? (
          <th className='thOne' colSpan="2">{textFirstCell}</th>
        ) : (
          <>
            <th className='thTwo'>{textFirstCell}</th>
            <th className='thThree'>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className='tdOne'>{textFirstCell}</td>
          <td className='tdTwo'>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

export default CourseListRow;
