import React, { useState, useRef, useEffect } from 'react';
import L from 'leaflet'
import { MapContainer, TileLayer, FeatureGroup, Polygon, Marker, Popup, Circle, LayerGroup } from 'react-leaflet'
import osm from "../hyperlocal/components/hyperMap/osm-provider"
import ReCenter from '../hyperlocal/components/hyperMap/recenter';
import "leaflet/dist/leaflet.css"
import "leaflet-draw/dist/leaflet.draw.css"
import "leaflet-fullscreen/dist/Leaflet.fullscreen.js"
import "leaflet-fullscreen/dist/leaflet.fullscreen.css"
import InfoIcon from '@material-ui/icons/Info';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import './tradearea.css'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
    iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});


const TradeArea = ({ coord, markerArr }) => {

    const Tooltipinfo = withStyles((theme) => ({
        tooltip: {
            backgroundColor: 'white',
            color: 'rgba(0, 0, 0, 0.87)',
            maxWidth: 220,
            fontSize: theme.typography.pxToRem(12),
            border: '1px solid #dadde9',

        },
    }))(Tooltip);

    const [center, setCenter] = useState(
        {
            lat: 12.97,
            lon: 77.59497642517088
        }
    )

    const geojson = {
        "type": "Feature",
        "properties": {
            "stroke": "#555555",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "white",
            "fill-opacity": 0.1,
            "Name ": "Jayanagar"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [

            ]
        }
    }


    const ZOOM = 12
    const mapRef = useRef()

    const fillOptions = { fillColor: 'red', fillOpacity: 0.7, color: 'red' }

    return (
        <div className='trade-area'>

            <div className='trade-area-heading'>
                <div className='first-line'>
                    <div className='left'>
                        <Tooltipinfo placement="right"
                            title={
                                <React.Fragment>
                                    <Typography color="inherit">Trade Area</Typography>
                                    <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
                                    {"It's very engaging. Right?"}
                                </React.Fragment>
                            }
                        >
                            <p className='heading'>
                                <div className='heading-text'>Trade Area</div> <InfoIcon />
                            </p>
                        </Tooltipinfo>
                    </div>

                    <div className='right'>
                        <p className='date'></p><img className='icon' src="https://img.icons8.com/material/32/000000/sort-down--v1.png" />
                        <img src="https://img.icons8.com/windows/32/000000/share-2.png" className='icon' />
                        <img className='icon' src="https://img.icons8.com/windows/32/000000/download.png" />
                    </div>
                </div>
            </div>

            <div className="city-App">
                <header className="tradeArea-App-header">
                    <MapContainer
                        center={center}
                        zoom={ZOOM}
                        type='geojson'
                        ref={mapRef}
                        fullscreenControl={true}
                        style={{ height: "500px" }}
                        className="tradeAreaborder"

                    >
                        <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution} />
                        {coord ? <ReCenter center={[coord[0][1], coord[0][0]]} zoom={13} /> : null}
                        {coord ? <Marker position={[coord[0][1], coord[0][0]]}></Marker> : null}
                        {markerArr ?
                            markerArr.map(markercoord => (
                                <Circle center={markercoord} radius={20} pathOptions={fillOptions} />

                            ))

                            : null}
                    </MapContainer>
                </header>
            </div>
        </div>
    )
}

export default TradeArea
