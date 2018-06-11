import React from 'react';
import ReactDOM from 'react-dom';
import RelatedItemList from './components/RelatedItemList.jsx';

class YouMayAlsoLike extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      relateditems: [{
        id: 1,
        title: 'Women Tops Shirts',
        main: 'http://lululemonades-related.s3.amazonaws.com/image00001.jpg',
        hover: 'http://lululemonades-related.s3.amazonaws.com/image00005.jpg'
      },
      {
        id: 2,
        title: 'Women Tops Shirts',
        main: 'http://lululemonades-related.s3.amazonaws.com/image00002.jpg',
        hover: 'http://lululemonades-related.s3.amazonaws.com/image00006.jpg'
      },
      {
        id: 3,
        title: 'Women Tops Shirts',
        main: 'http://lululemonades-related.s3.amazonaws.com/image00003.jpg',
        hover: 'http://lululemonades-related.s3.amazonaws.com/image00007.jpg'
      },
      {
        id: 4,
        title: 'Women Tops Shirts',
        main: 'http://lululemonades-related.s3.amazonaws.com/image00004.jpg',
        hover: 'http://lululemonades-related.s3.amazonaws.com/image00008.jpg'
      }]
    };
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
