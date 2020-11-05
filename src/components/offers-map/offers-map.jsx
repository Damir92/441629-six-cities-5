import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

import {getActiveCard} from '../../store/reducers/site-data/selectors';

import {offerPropTypes} from '../../prop-types';

const OffersMap = ({cityOffers = [], activeCard}) => {
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
    return () => {
      if (mapRef.current) {
        mapRef.current.off();
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!cityOffers.length) {
      return;
    }

    const cityLocation = cityOffers[0].city.location || null;

    if (!cityLocation) {
      return;
    }

    const cityCoordinates = [cityLocation.latitude, cityLocation.longitude];

    if (!mapRef.current) {
      mapRef.current = leaflet.map(`map`, {
        center: cityCoordinates,
        zoom: cityCoordinates.zoom,
        zoomControl: false,
        marker: true,
      });

      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(mapRef.current);
    }

    mapRef.current.setView(cityCoordinates, cityLocation.zoom);

    removePins();

    cityOffers.forEach((offer) => {
      if (offer && offer.location && offer.location.latitude && offer.location.longitude) {
        mapPinsRef.current.push(
            leaflet
            .marker([offer.location.latitude, offer.location.longitude], {icon: regularIcon})
            .addTo(mapRef.current)
        );
      }
    });
  }, [cityOffers]);

  useEffect(() => {
    removePins();

    cityOffers.forEach((offer) => {
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
  cityOffers: PropTypes.arrayOf(
      PropTypes.shape(offerPropTypes).isRequired
  ).isRequired,
};

const mapStateToProps = (state) => ({
  activeCard: getActiveCard(state),
});

export {OffersMap};
export default connect(mapStateToProps)(OffersMap);
