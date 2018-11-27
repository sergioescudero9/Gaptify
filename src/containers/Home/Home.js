import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getArtists as loadArtists } from '../../state/Home/action';
import Card from '../../components/Card';

const TitleStyle = styled.h4`
  padding: 8px 0;
`;
const ParagraphStyle = styled.p`
  color: #666;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  display: inline-block;
  width: 80%;
`;

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


class Home extends Component {
  componentDidMount() {
    const { getArtists } = this.props;
    getArtists();
  }

  render() {
    const { artists, loading } = this.props;
    return (
      <ContainerStyle>
        {
          artists.map(({
            id, name, img, listeners,
          }) => (
            <LinkStyle to={`/artist/${id}`} key={id}>
              <Card img={img} name={name}>
                <TitleStyle>{ name }</TitleStyle>
                <ParagraphStyle>
                  Listeners:
                  <span>
                    { listeners }
                  </span>
                </ParagraphStyle>
              </Card>
            </LinkStyle>
          ))
        }
      </ContainerStyle>
    );
  }
}

const mapStateToProps = state => (
  {
    loading: state.homeReducer.loading,
    artists: state.homeReducer.artists,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getArtists: () => dispatch(loadArtists(dispatch)),
  }
);

Home.propTypes = {
  getArtists: PropTypes.func.isRequired,
  artists: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    listeners: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    songs: PropTypes.arrayOf(PropTypes.exact({
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }))
  }).isRequired),
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
