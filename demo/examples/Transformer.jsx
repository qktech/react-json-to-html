import React from 'react';
import { Link } from 'react-router';
import JsonTable from '../../src/JsonTable';
import { dateFormat, formatShortDate } from './dateUtil';

var transformer = function(key, val) {

  // convert string dates to real dates.
  if (typeof val === 'string' && dateFormat.test(val)) {
    val = new Date(val);
  }
  
  if (val instanceof Date) {
    return formatShortDate(val);
  }
  if (!isNaN(val)) return 'is a numberX ' + val;
  else {
    return val;
  }
};

class Transformer extends React.Component {
  render() {
    const json = {
      'Server Name': 'foo',
      Description: 'bar',
      Date: '2018-04-03T18:25:43.511Z',
      Number: 25
    };
    return (
      <div>
        <blockquote>
          <h3>Using a transformer</h3>
          <p>
            Html Table that passes in a transformer to transform the render
            output &nbsp;<Link to="/">Back</Link>
          </p>
          <br />
          <JsonTable json={json} transformer={transformer} />
          <br />
          <pre>
            <code>
              import React from &#39;react&#39;;<br />
              import JsonTable from &#39;react-json-to-html&#39;;<br />
              <br />
              class Simple extends React.Component &#123;<br />
              &nbsp;&nbsp;const json = &#123;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&quot;Server Name&quot;: &quot;foo&quot;,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&quot;Description&quot;: &quot;bar&quot;,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&quot;Date&quot;: &quot;Jan 1, 2018&quot;<br />
              &nbsp;&nbsp;&#125;<br />
              &nbsp;&nbsp;render() &#123;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;JsonTable
              json=&#123;json&#125; /&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;)<br />
              &nbsp;&nbsp;&#125;<br />
              &#125;<br />
            </code>
          </pre>

          <Link to="/">Back</Link>
        </blockquote>
      </div>
    );
  }
}

export default Transformer;
