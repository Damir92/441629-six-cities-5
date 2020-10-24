import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

import {offerPropTypes} from '../../prop-types';
import 'leaflet/dist/leaflet.css';

const OffersMap = ({offers = [], activeCard}) => {
  const LeafletIcon = leaflet.Icon.extend({
    options: {
      iconSize: [27, 39],
    }
  });

  const regularIcon = new LeafletIcon({
    iconUrl: `img/pin.svg`,
  });

  const activeIcon = new LeafletIcon({
    iconUrl: `img/pin-active.svg`,
  });

  const mapElementRef = useRef(null);
  const mapRef = useRef(null);
  const mapPinsRef = useRef([]);

  const removePins = () => {
    if (mapPinsRef.current.length) {
      mapPinsRef.current.forEach((marker) => {
        mapRef.current.removeLayer(marker);
      });
      mapPinsRef.current = [];
    }
  };

  React.useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: [0, 0],
      zoom: 0,
      zoomControl: false,
      marker: true,
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    return () => {
      mapRef.current.off();
      mapRef.current.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!offers.length) {
      return;
    }

    const cityLocation = offers[0].city.location || null;

    if (!cityLocation) {
      return;
    }

    const cityCoordinates = [cityLocation.latitude, cityLocation.longitude];

    mapRef.current.setView(cityCoordinates, cityLocation.zoom);

    removePins();

    offers.forEach((offer) => {
      if (offer && offer.location && offer.location.latitude && offer.location.longitude) {
        mapPinsRef.current.push(
            leaflet
            .marker([offer.location.latitude, offer.location.longitude], {icon: regularIcon})
            .addTo(mapRef.current)
        );
      }
    });
  }, [offers]);

  useEffect(() => {
    removePins();

    offers.forEach((offer) => {
      if (offer && offer.location && offer.location.latitude && offer.location.longitude) {
        mapPinsRef.current.push(
            leaflet
            .marker([offer.location.latitude, offer.location.longitude], {icon: offer.id === activeCard ? activeIcon : regularIcon})
            .addTo(mapRef.current)
        );
      }
    });
  }, [activeCard]);

  return (
    <div
      id="map"
      ref={mapElementRef}
      style={{height: `100%`}}
    ></div>
  );
};

OffersMap.propTypes = {
  activeCard: PropTypes.number,
  offers: PropTypes.arrayOf(
      PropTypes.shape(offerPropTypes).isRequired
  ).isRequired,
};

const mapStateToProps = ({activeCard}) => ({activeCard});

export {OffersMap};
export default connect(mapStateToProps)(OffersMap);
