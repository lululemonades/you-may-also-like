import React from 'react';
import ReactDOM from 'react-dom';
import RelatedItemList from './components/RelatedItemList.jsx';

class YouMayAlsoLike extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <div>
        <div>
          <h1>You May Also Like</h1>
        </div>
        <RelatedItemList />
      </div>
    );
  }
}

ReactDOM.render(<YouMayAlsoLike />, document.getElementById('you-may-also-like'));
