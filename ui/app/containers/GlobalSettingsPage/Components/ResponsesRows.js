import React from 'react';
import { Icon, } from 'react-materialize';

export function ResponsesRows(props) {

  const rows = props.fallbackResponses.map((response, responseIndex) => {
    return (
      <tr style={{ width: '100%' }} key={responseIndex}>
        <td style={{ width: '100%', display: 'inline-block' }}>
          <div>
            <span id={'fallback_response_' + responseIndex}>{response}</span>
            <a onClick={props.onRemoveResponse.bind(null, responseIndex)}>
              <Icon className="table-delete-row">delete</Icon>
            </a>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <tbody>
    {rows}
    </tbody>
  );
}

ResponsesRows.propTypes = {
  fallbackResponses: React.PropTypes.array,
  onRemoveResponse: React.PropTypes.func,
};

export default ResponsesRows;
