import React, {PropTypes} from 'react'
import {PopupMarker} from './PopupMarker'

export const MarkersList = ({map, markers}) => (
  <div style={{display: 'none'}}>
    {
      markers.map(({key, ...props}) => (
        <PopupMarker
          key={key}
          map={map}
          {...props}
        />
      ))
    }
  </div>
)

MarkersList.propTypes = {
  map: PropTypes.object,
  markers: PropTypes.array.isRequired
}