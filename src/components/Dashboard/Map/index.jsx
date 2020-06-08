import React, { memo } from 'react';
import { Card } from '@material-ui/core';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { useSelector } from 'react-redux';
import _ from 'lodash';

const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const rounded = (num) => {
 if (num > 1000000000) {
  return Math.round(num / 100000000) / 10 + 'Bn';
 } else if (num > 1000000) {
  return Math.round(num / 100000) / 10 + 'M';
 } else {
  return Math.round(num / 100) / 10 + 'K';
 }
};
const handleMarker = (geo) => {
 let abc = _.map(geo, (item) => item.properties.NAME_LONG);
 console.log('handleMarker -> abc', abc);
};

const MapChart = ({ setTooltipContent, dataMap }) => {
 //  const markers = handleMarker(dataMap);
 //  console.log('MapChart -> markers', markers);
 return (
  <Card>
   <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
    <Geographies geography={geoUrl}>
     {({ geographies }) =>
      geographies.map((geo) => {
       //  handleMarker(geographies);
       return (
        <Geography
         key={geo.rsmKey}
         geography={geo}
         fill="#EAEAEC"
         stroke="#D6D6DA"
         onMouseEnter={() => {
          const { NAME, POP_EST } = geo.properties;
          setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
         }}
         onMouseLeave={() => {
          setTooltipContent('');
         }}
         style={{
          default: {
           fill: '#D6D6DA',
           outline: 'none',
          },
          hover: {
           fill: '#F53',
           outline: 'none',
          },
          pressed: {
           fill: '#E42',
           outline: 'none',
          },
         }}
        />
       );
      })
     }
    </Geographies>
   </ComposableMap>
  </Card>
 );
};

export default MapChart;
