import React, {Component} from 'react'
import {Card, CardTitle, Paper} from 'material-ui'
import {DefaultMap} from 'safe-framework'
import {
  mapCenter,
  mapData,
  mapTitle,
  tableColumns,
  tableData
} from '../fixtures'

const mapDataOptions = {
  latField: 'latitude',
  longField: 'longitude',
  label: 'label',
  sourcePrefix: 'from',
  destinationPrefix: 'to'
}

const mapOptions = {
  baseLayer: mapData.baseLayer,
  layers: mapData.layers
}

class Map extends Component {
  render () {
    return (
      <Paper zDepth={1}>
        <Card>
          <CardTitle
            subtitle='Tab Layout'
            title='Map + Table'
          />
          <DefaultMap
            center={mapCenter}
            columns={tableColumns}
            data={tableData}
            mapDataOptions={mapDataOptions}
            mapOptions={mapOptions}
            size={'col-xs-12 col-sm-12'}
            tileLayerOptions={{
              attribution: '<a href="http://www.esri.com/">Esri</a>',
              transparent: true,
              url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            }}
            title={mapTitle}
            wms={false}
            zoomControlPosition={'topright'}
          />
        </Card>
      </Paper>
    )
  }
}

export default Map
