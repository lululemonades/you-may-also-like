import React from 'react';
import RelatedItemDetails from './RelatedItemDetails.jsx';

const RelatedItem

class RelatedItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div>
        <img
          alt=""
          src="http://www.reptilegardens.com/assets/images/gallery/images/rainbowlizard-a644bb7f9ee8.jpg"
          onMouseOver={e => (e.currentTarget.src = 'http://www.reptilegardens.com/assets/images/gallery/images/agama_copy.jpg')}
          onFocus={e => (e.currentTarget.src = 'http://www.reptilegardens.com/assets/images/gallery/images/agama_copy.jpg')}
          onMouseOut={e => (e.currentTarget.src = 'http://www.reptilegardens.com/assets/images/gallery/images/rainbowlizard-a644bb7f9ee8.jpg')}
          onBlur={e => (e.currentTarget.src = 'http://www.reptilegardens.com/assets/images/gallery/images/rainbowlizard-a644bb7f9ee8.jpg')}
        />
        <RelatedItemDetails />
      </div>
    );
  }
}

export default RelatedItem;
