import React from 'react';
import ReactDOM from 'react-dom';
import RelatedItemList from './components/RelatedItemList.jsx';
import axios from 'axios';

class YouMayAlsoLike extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      relateditems: [],
      productId: 60
    };
  }

  componentDidMount () {
    axios.get(`/youMayAlsoLike/${this.state.productId}`)
      .then((response) => {
        this.setState({
          relateditems: response.data
        });
      })
      .catch((error) => {
        console.log('your get has an error', error);
      });
  }

  render () {
    return (
      <div>
        <div>
          <h1>You may also like</h1>
        </div>
        <RelatedItemList items={this.state.relateditems} />
      </div>
    );
  }
}

ReactDOM.render(<YouMayAlsoLike />, document.getElementById('you-may-also-like'));
