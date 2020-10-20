import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

import {offerPropTypes} from '../../prop-types';
import 'leaflet/dist/leaflet.css';

const OffersMap = ({offers = []}) => {
  let map = null;

  const LeafletIcon = leaflet.Icon.extend({
    options: {
      iconSize: [27, 39],
    }
  });

  const regularIcon = new LeafletIcon({
    iconUrl: `img/pin.svg`,
  });

  // const activeIcon = new LeafletIcon({
  //   iconUrl: `img/pin-active.svg`,
  // });

  const mapRef = useRef(null);

  useEffect(() => {
    if (!offers.length) {
      return;
    }

    const cityLocation = offers[0].city.location || null;

    if (!cityLocation) {
      return;
    }

    const cityCoordinates = [cityLocation.latitude, cityLocation.longitude];

    map = leaflet.map(`map`, {
      center: cityCoordinates,
      zoom: cityLocation.zoom,
      zoomControl: false,
      marker: true,
    });

    map.setView(cityCoordinates, cityLocation.zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    offers.forEach((offer) => {
      if (offer && offer.location && offer.location.latitude && offer.location.longitude) {
        leaflet
          .marker([offer.location.latitude, offer.location.longitude], {icon: regularIcon})
          .addTo(map);
      }
    });

    return () => {
      map.off();
      map.remove();
      map = null;
    };
  }, [offers]);

  return (
    <div
      id="map"
      ref={mapRef}
      style={{height: `100%`}}
    ></div>
  );
};

OffersMap.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(offerPropTypes).isRequired
  ).isRequired,
};

export default OffersMap;
