import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'

const Chart = ({x, y}) => {

    const [chartData, setChartData] = useState({})

    const chartOptions = {
        legend: {
            display: false
        },
        responsive: true,
        scales: {
            xAxes: [
                {
                    gridLines: {
                        display: false
                    }
                }
            ],
            yAxes: [{
                ticks: {
                    stepSize: 200
                },
                gridLines: {
                    drawBorder: false,
                    color: "#F1F1F1"
                }
            }]
        },
        elements: {
            point:{
                radius: 0
            }
        }
    }

    const chart = (x, y) => {
        setChartData({
            labels: x,
            datasets: [
                {
                    label: 'level of thiccness',
                    fill: false,
                    data: y,
                    borderColor: [
                        '#3A80BA'
                    ],
                    borderWidth: 4
                }
            ]
        })
    }

    useEffect(() => {
        chart(x, y)
    }, [x, y])

    return <div>
            <Line
                data={chartData}
                options={chartOptions}
            />
        </div>
}

export default Chart