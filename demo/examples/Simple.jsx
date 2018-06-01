import React from 'react';
import { Link } from 'react-router';
import JsonTable from '../../src/JsonTable';

class Simple extends React.Component {
  render() {
    const json = {
      'Server Name': 'foo',
      'Description': 'bar',
      'Date': '2018-04-03T18:25:43.511Z',
      'Number': 25
    };
    return (
      <div>
        <blockquote>
          <h3>Simple HTML table</h3>
        
          <p>A simple HTML table with 3 key value pairs. &nbsp;<Link to="/">Back</Link></p><br />

          <JsonTable json={json}/>
          <br />
          <pre><code>
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
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;JsonTable json=&#123;json&#125; /&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;)<br />
            &nbsp;&nbsp;&#125;<br />
          &#125;<br />
          </code></pre>
          <Link to="/">Back</Link>
        </blockquote>
      </div>
    );
  }
}

export default Simple;
