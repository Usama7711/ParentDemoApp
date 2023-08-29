import React from "react";
import GoogleMapReact from "google-map-react";

const MapComponent = () => {

  const defaultProps = {
    center: {
      lat: 19.143683,

      lng: 77.314136,
    },

    zoom: 11,
  };
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  
  return (
    <div>
      <div className="google-map">
        <div className="map-main" >
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "",
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={19.887288}
              lng={75.368412}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
