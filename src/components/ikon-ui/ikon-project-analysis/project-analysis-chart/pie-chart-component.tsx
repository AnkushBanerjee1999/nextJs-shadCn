'use client';
import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import { data } from './pie-chart-data';

type PieChartComponentProps = {
    height: number;
    width: number;
};

const PieChartComponent: React.FC<PieChartComponentProps> = ({ height, width }) => {
    // Calculate the total value of the data
    const total = data.reduce((acc, datum) => acc + datum.value, 0);

    return (
        <div style={{ height, width }}>
            <ResponsivePie 
                data={data}
                margin={{ top: 10, right: 0, bottom: 90, left: 0 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{
                    from: 'color',
                    modifiers: [['darker', 0.2]],
                }}
                enableArcLinkLabels={false}
                tooltip={({ datum: { id, value, color } }) => (
                    <div
                        style={{
                            padding: 12,
                            color,
                            background: '#fff',
                        }}
                    >
                        <strong>
                            {id}: {((value / total) * 100).toFixed(2)}%
                        </strong>
                    </div>
                )}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true,
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10,
                    },
                ]}
                fill={[
                    { match: { id: 'ruby' }, id: 'dots' },
                    { match: { id: 'c' }, id: 'dots' },
                    { match: { id: 'go' }, id: 'dots' },
                    { match: { id: 'python' }, id: 'dots' },
                    { match: { id: 'scala' }, id: 'lines' },
                    { match: { id: 'lisp' }, id: 'lines' },
                    { match: { id: 'elixir' }, id: 'lines' },
                    { match: { id: 'javascript' }, id: 'lines' },
                ]}
                colors={{ datum: 'data.color' }}
            />
        </div>
    );
};

export default PieChartComponent;
