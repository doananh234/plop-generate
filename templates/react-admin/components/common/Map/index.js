import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withGoogleMap, withScriptjs, GoogleMap } from 'react-google-maps';
import MarkerUI from './Marker';
import { fetchSvg } from '../../../helpers/Tools';

class MapUI extends Component {
  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (!nextProps.currentItem) {
      return { zoom: 10 };
    }
    if (nextProps.currentItem && prevState.currentItem.id !== nextProps.currentItem.id) {
      return {
        currentItem: nextProps.currentItem,
        zoom: prevState.zoom > 15 ? prevState.zoom : 15,
      };
    }
    return {};
  };
  constructor(props) {
    super(props);
    this.state = {
      zoom: 10,
      currentItem: props.currentItem || {},
      markerIcons: {},
    };
    this.getMarkerIcons();
  }

  onClick = item => {
    const zoom = this.googleMap.getZoom();
    this.setState({ zoom });
    this.props.onClick(item);
  };

  async getMarkerIcons() {
    const markerIcons = await fetchSvg();
    this.setState({ markerIcons });
  }

  render() {
    return (
      <GoogleMap
        ref={ref => {
          this.googleMap = ref;
        }}
        options={{
          mapTypeControl: false,
          streetViewControl: false,
        }}
        defaultZoom={8}
        zoom={this.state.zoom}
        center={{
          lat: this.props.currentItem ? this.props.currentItem.location.latitude : 16.0687766,
          lng: this.props.currentItem ? this.props.currentItem.location.longitude : 108.2230776,
        }}
        defaultCenter={{
          lat: this.props.currentItem ? this.props.currentItem.location.latitude : 16.0687766,
          lng: this.props.currentItem ? this.props.currentItem.location.longitude : 108.2230776,
        }}
      >
        {this.props.markers.map(data => {
          return (
            <MarkerUI
              key={data.id}
              position={{
                lat: data.location.latitude,
                lng: data.location.longitude,
              }}
              onToggleOpen={() => this.onClick(data)}
              onToggleClose={() => this.onClick()}
              item={data}
              isOpen={this.props.currentItem ? data.id === this.props.currentItem.id : false}
              markerIcons={this.state.markerIcons}
            />
          );
        })}
      </GoogleMap>
    );
  }
}
MapUI.propTypes = {
  currentItem: PropTypes.object,
  markers: PropTypes.array,
  onClick: PropTypes.func,
};

export default withScriptjs(withGoogleMap(MapUI));
