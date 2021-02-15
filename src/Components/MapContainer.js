import React, { useState } from 'react'
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react'

const apiKey = process.env.REACT_APP_GOOGLE_KEY

export const MapContainer = (props) => {
	const google = window.google

	const [state, setState] = useState({
		showingInfoWindow: false,
		activeMarker: {},
		selectedItem: {},
	})

	const onMarkerClick = (props, marker, e) => {
		setState({
			selectedItem: props,
			activeMarker: marker,
			showingInfoWindow: true,
		})
	}

	if (props.data === 0) {
		return <></>
	} else {
		return (
			<Map
				google={google}
				className={'map'}
				zoom={props.zoom}
				initialCenter={props.center}
			>
				{props.data.map((item) => (
					<Marker
						onClick={onMarkerClick.bind(this)}
						key={item.AnnonsId}
						title={item.Gatuadress}
						name={item.Stadsdel}
						room={item.AntalRum}
						position={{
							lat: item.KoordinatLatitud,
							lng: item.KoordinatLongitud,
						}}
						props={item}
					/>
				))}

				<InfoWindow
					visible={state.showingInfoWindow}
					position={state.selectedItem.position}
				>
					<div>
						<h3>{state.selectedItem.title}</h3>
						<h4>{state.selectedItem.name}</h4>
						<h4>{state.selectedItem.room} Rum</h4>
					</div>
				</InfoWindow>
			</Map>
		)
	}
}

const LoadingContainer = (props) => <h3>Laddar Karta...</h3>

export default GoogleApiWrapper({
	apiKey,
	LoadingContainer: LoadingContainer,
})(MapContainer)
