'use client'
import React from 'react'
import {data} from './bar-chart-data'
import { ResponsiveBar } from '@nivo/bar'

const BarChartComponent = () => {
  return (
    <div style={{ height: 206, width: 300, overflow: 'visible', position: 'relative' }}>
      <ResponsiveBar
        data={data}
        keys={[
          'hot dog',
          'burger',
          'sandwich',
          'kebab',
          'fries',
          'donut'
        ]}
        indexBy="country"
        margin={{ top: 0, right: 0, bottom: 90, left: 30 }}
        padding={0.3}
        groupMode="grouped"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        fill={[
          {
            match: {
              id: 'fries'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'sandwich'
            },
            id: 'lines'
          }
        ]}
        borderColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              1.6
            ]
          ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          // legend: 'country',
          // legendPosition: 'middle',
          // legendOffset: 32,
          // truncateTickAt: 0
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          // legend: '',
          // legendPosition: 'middle',
          // legendOffset: -40,
          truncateTickAt: 0
        }}
        labelSkipWidth={12}
        // labelSkipHeight={12}
        // labelTextColor={{
        //     from: 'color',
        //     modifiers: [
        //         [
        //             'darker',
        //             1.6
        //         ]
        //     ]
        // }}
        // legends={[
        //     {
        //         dataFrom: 'keys',
        //         anchor: 'bottom-right',
        //         direction: 'column',
        //         justify: false,
        //         translateX: 120,
        //         translateY: 0,
        //         itemsSpacing: 2,
        //         itemWidth: 100,
        //         itemHeight: 20,
        //         itemDirection: 'left-to-right',
        //         itemOpacity: 0.85,
        //         symbolSize: 20,
        //         effects: [
        //             {
        //                 on: 'hover',
        //                 style: {
        //                     itemOpacity: 1
        //                 }
        //             }
        //         ]
        //     }
        // ]}
        tooltip={({ id, value, color, indexValue }) => (
          <div
            style={{
              padding: '5px 10px',
              background: 'white',
              border: '1px solid #ccc',
              color: color,
              fontSize: '16px'
            }}
          >
            <strong>{id}</strong>: {value} in {indexValue}
          </div>
        )}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
      />
    </div>
  )
}

export default BarChartComponent
