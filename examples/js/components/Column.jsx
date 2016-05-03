import React, {Component} from 'react'
import {Card, CardTitle, Paper} from 'material-ui'
import {DefaultColumnChart} from 'safe-framework'
import {columnDrilldown, columnSeries, tableColumns, tableData} from '../fixtures'

const chartConfig = {
  legend: {
    display: false
  },
  scales: {
    xAxes: [{}],
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Total percent market share'
      }
    }]
  }
}

class Column extends Component {
  render () {
    return (
      <Paper zDepth={1}>
        <Card>
          <CardTitle
            subtitle='Tab Layout'
            title='Column + Table'
          />
          <DefaultColumnChart
            chartData={columnSeries}
            chartOptions={chartConfig}
            columns={tableColumns}
            drilldown={columnDrilldown}
            size={'col-xs-12 col-sm-12'}
            tableData={tableData}
            title={'Browser market shares. January, 2015 to May, 2015'}
          />
        </Card>
      </Paper>
    )
  }
}

export default Column