import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/Map-marker.svg';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Marcador Happy" />

                    <h2>Escolha um orfanato no mapa.</h2>
                    <p>Muitas crianças estão esperando sua visita :)</p>
                </header>

                <footer>
                    <strong>Rio de Janeiro</strong>
                    <span>Rio de Janeiro</span>
                </footer>
            </aside>
            <Map
                center={[-22.9376882, -43.339121]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            > 
                {/* leaflet - <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ2FicmllbHJpbyIsImEiOiJja2dlamEyODUwYzNqMnNycjN5OWprdGp1In0.xxny2UAM7p7w-nW98UJ4SA`}/>
                {/* <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ2FicmllbHJpbyIsImEiOiJja2dlamEyODUwYzNqMnNycjN5OWprdGp1In0.xxny2UAM7p7w-nW98UJ4SA`}/> */}
                {/* ${process.env.REACT_APP_MAPBOX_TOKEN} - não ta funcionando */}
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>

        </div>
    );
}

export default OrphanagesMap;