import React from 'react';
import PropTypes from 'prop-types';
import MarkerInfoBox from './MarkerInfoBox';

const { Marker, InfoWindow } = require('react-google-maps');

const MarkerUI = ({ isOpen, position, item, onToggleOpen, onToggleClose, markerIcons }) => {
  const icon = item.emergencyType
    ? {
        url: `data:image/svg+xml;utf-8,\
        <svg width="50px" height="50px" viewBox="0 0 911 855" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g transform="translate(150 0)" id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="map-marker">
                <path d="M486.508375,83.4945706 C430.848593,27.8256745 363.673935,0 285.001948,0 C206.326063,0 139.159204,27.8315235 83.4955222,83.4945706 C27.8337904,139.155668 0,206.323711 0,284.9987 C0,325.45238 6.12203011,358.661091 18.3641407,384.638479 L221.541452,815.48801 C227.10977,827.724132 235.741053,837.373043 247.429451,844.417197 C259.119799,851.46915 271.642665,855 285.005848,855 C298.365131,855 310.893846,851.46915 322.582245,844.417197 C334.272593,837.373043 343.079347,827.724132 349.018107,815.48801 L551.626108,384.638479 C563.874068,358.661091 569.999997,325.450431 569.999997,284.9987 C570.009746,206.323711 542.181805,139.163467 486.508375,83.4945706 Z" id="Path" fill="${
                  item.emergencyType.iconBackgroundColor
                }"></path>
                <path transform="translate(120 100) scale(0.6 0.6)" d="${
                  markerIcons[item.emergencyType.iconName]
                }" id="Shape" fill="#FFFFFF" fill-rule="nonzero"></path>
            </g>
        </g>
    </svg>`,
      }
    : {};

  return (
    <Marker options={{ icon }} position={position} onClick={onToggleOpen}>
      {isOpen && (
        <InfoWindow onCloseClick={onToggleClose}>
          <div>
            <MarkerInfoBox item={item} />
          </div>
        </InfoWindow>
      )}
    </Marker>
  );
};
MarkerUI.propTypes = {
  isOpen: PropTypes.bool,
  position: PropTypes.object,
  item: PropTypes.object,
  onToggleOpen: PropTypes.func,
  onToggleClose: PropTypes.func,
  markerIcons: PropTypes.object,
};

export default MarkerUI;
