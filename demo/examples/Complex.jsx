import React from 'react';
import { Link } from 'react-router';
import JsonTable from '../../src/JsonTable';

class Complex extends React.Component {
  render() {
    const json = {
      'Server Name': 'foo',
      'Description': 'bar',
      'Date': 'Jan 1, 2018',
      'Specs': {
        'Network': {
          'IP': '10.100.99.101',
          'MAC': '00:0a:XX:9F:XX:16',
          'Interfaces': [
            'nic-1', 'nic-2', 'nic-3'
          ]
        },
        'Hardware': {
          'Drive Bays': [
            'bay-1', 'bay-2', 'bay-3', 'bay-4'
          ],
          'Cores': '24',
          'Memory': '256 GB'
        },
        'Storage': {
          'Type': 'Object',
          'Vendor': 'Some Vendor',
          'IOPS': '1000',
          'Size': '26 TB'
        }
      }
    };

    return (
      <div>
        <blockquote>
          <h3>Complex HTML table with multiple nested JSON attributes</h3>
        
          <p>An HTML table with multiple nested JSON attributes. &nbsp;<Link to="/">Back</Link></p><br />

          <JsonTable json={json}/>
          <br />

          <pre><code>
          import React from &#39;react&#39;;<br />
          import JsonTable from &#39;react-json-to-html&#39;;<br />
            <br />
          class Complex extends React.Component &#123;<br />
            &nbsp;&nbsp;const json = &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&quot;Server Name&quot;: &quot;foo&quot;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&quot;Description&quot;: &quot;bar&quot;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&quot;Date&quot;: &quot;Jan 1, 2018&quot;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&quot;Specs&quot;: &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Network&quot;: &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;IP&quot;: &quot;10.100.99.101&quot;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;MAC&quot;: &quot;00:0a:XX:9F:XX:16&quot;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Interfaces&quot;: [<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;nic-1&quot;, &quot;nic-2&quot;, &quot;nic-3&quot;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Hardware&quot;: &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Drive Bays&quot;: [<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;bay-1&quot;, &quot;bay-2&quot;, &quot;bay-3&quot;, &quot;bay-4&quot;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Cores&quot;: &quot;24&quot;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Memory&quot;: &quot;256 GB&quot;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Storage&quot;: &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Type&quot;: &quot;Object&quot;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Vendor&quot;: &quot;Some Vendor&quot;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;IOPS&quot;: &quot;1000&quot;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Size&quot;:&quot;26 TB&quot;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;,<br />
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

export default Complex;
