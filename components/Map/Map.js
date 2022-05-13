import { Map, Marker, ZoomControl, Overlay } from "pigeon-maps";

const MyMap = () => {
  return (
    <Map
      height="100%"
      defaultCenter={[-37.817115, 144.955775]}
      defaultZoom={13}
      metaWheelZoom={true}
    >
      <Overlay>
        <div style={{ right: "0px", top: "0px" }}>
          <div
            style={{
              backgroundColor: "white",
              margin: "10px",
              padding: "1px",
              boxShadow: "rgba(0,0,0,.3)0px 1px 4px -1px",
              borderRadius: "2px",
            }}
          >
            <div className="place-card place-card-large">
              <div className="place-desc-large">
                <div className="place-name">121 King St</div>
                <div className="address">
                  121 King St, Melbourne VIC 3000, Australia
                </div>
              </div>
            </div>
          </div>
        </div>
      </Overlay>
      <Marker width={50} anchor={[-37.817115, 144.955775]} color="red" />
      <ZoomControl />
    </Map>
  );
};
export default MyMap;
