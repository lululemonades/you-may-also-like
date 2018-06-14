import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import RelatedItemList from './components/RelatedItemList';

/* ~~~~~~ Styles ~~~~~~~ */

const RelatedWrapper = styled.div`
  padding: 2%;
  font-family: 'Josefin Sans', sans-serif;
  background-color: #fafafa;
  position: sticky;
  position: -webkit-sticky;
`;

const YouMayHeader = styled.h1`
  text-align: center;
  font-size: 3em;
  font-weight: lighter;
`;

/* ~~~~~~ Components ~~~~~~~ */

class YouMayAlsoLike extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      relateditems: [],
      productId: 51
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
        <RelatedWrapper>
          <div>
            <YouMayHeader>You may also like</YouMayHeader>
          </div>
          <RelatedItemList items={this.state.relateditems} />
        </RelatedWrapper>
      </div>
    );
  }
}

ReactDOM.render(<YouMayAlsoLike />, document.getElementById('you-may-also-like'));
