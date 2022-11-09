import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const QualyChart = ({qualyResults}) => {

const qualyData = qualyResults.map()

const data = qualyResults.


export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <PieSeries
            valueField="area"
            argumentField="country"
          />
          <Title
            text="Area of Countries"
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
}

export default QualyChart;
