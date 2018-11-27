import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getArtist as loadArtist } from '../../state/Artist/action';
import Card from '../../components/Card';

const ConatinerStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const LinkStyle = styled.a`
  width: 33%;
  margin: 30px;
`;

class Artist extends Component {
  componentDidMount() {
    const { getArtist, match: { params: { id } } } = this.props;
    getArtist(id);
  }

  render() {
    const {
      selectedArtist: {
        songs, name, listeners, img,
      },
      loading
    } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <ConatinerStyle>
          {
            songs && songs.map(({ name: cardName, img: imgName, url }) => (
              <LinkStyle href={url} target="_blank">
                <Card img={imgName} name={cardName}>
                  <h3>{ cardName }</h3>
                </Card>
              </LinkStyle>
            ))
          }
        </ConatinerStyle>
      </div>
    );
  }
}

Artist.propTypes = {
  getArtist: PropTypes.func.isRequired,
  selectedArtist: PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string,
    listeners: PropTypes.string,
    img: PropTypes.string,
    songs: PropTypes.arrayOf(PropTypes.exact({
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }))
  }),
  loading: PropTypes.bool.isRequired,
  match: PropTypes.exact({
    params: PropTypes.exact({
      id: PropTypes.string.isRequired,
    }),
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isExact: PropTypes.bool.isRequired,
  })
};

const mapStateToProps = state => (
  {
    loading: state.artistReducer.loading,
    selectedArtist: state.artistReducer.selectedArtist,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getArtist: id => dispatch(loadArtist(dispatch, id)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Artist);
