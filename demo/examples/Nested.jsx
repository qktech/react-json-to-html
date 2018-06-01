import React from 'react';
import { Link } from 'react-router';
import JsonTable from '../../src/JsonTable';

class Nested extends React.Component {
  render() {
    const json = {
      'Server Name': 'foo',
      'Description': 'bar',
      'Specs': {
        'IP': '10.100.99.101',
        'MAC': '00:0a:XX:9F:XX:16'
      },
      'Date': 'Jan 1, 2018'
    };

    return (
      <div>
        <blockquote>
          <h3>HTML table with nested JSON attributes</h3>
        
          <p>An HTML table with nested JSON attributes. &nbsp;<Link to="/">Back</Link></p><br />

          <JsonTable json={json}/>
          <br />
          <pre><code>
          import React from &#39;react&#39;;<br />
          import JsonTable from &#39;react-json-to-html&#39;;<br />
            <br />
          class Nested extends React.Component &#123;<br />
            &nbsp;&nbsp;const json = &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&quot;Server Name&quot;: &quot;foo&quot;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&quot;Description&quot;: &quot;bar&quot;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&quot;Specs&quot;: &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;IP&quot;: &quot;10.100.99.101&quot;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;MAC&quot;: &quot;00:0a:XX:9F:XX:16&quot;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;,<br />
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

export default Nested;
