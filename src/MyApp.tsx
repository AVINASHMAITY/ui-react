import { Card, CardHeader, Text } from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";



export function MyApp() {
     const handleHeaderClick = () => {
        alert("Header clicked");
       };
      const dataset = [
        {
          month: "January",
          data: 65
        },
        {
          month: "February",
          data: 59
        },
        {
          month: "March",
          data: 80
        },
        {
          month: "April",
          data: 81
        },
        {
          month: "May",
          data: 56
        },
        {
          month: "June",
          data: 55
        },
        {
          month: "July",
          data: 40
        }
      ];
      
    return <div>
        My root component
        <Card header={<CardHeader titleText="Card" interactive
        onClick={handleHeaderClick} />} style={{ width: "300px" }} ><Text style={spacing.sapUiContentPadding}>This is the content area of the Card</Text>
        <LineChart measures={[{ accessor: "data", label: "Stock Price" }]} dimensions={[{ accessor: "month" }]} dataset={dataset} />
        <BarChart
         dimensions={[{ accessor: "month" }]}
         measures={[{ accessor: "data", label: "Stock Price" }]} 
           dataset={dataset}
/>

        </Card>
        
    </div>;
  }
  