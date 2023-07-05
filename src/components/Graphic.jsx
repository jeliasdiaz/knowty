import { CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { useState } from "react";
import * as math from 'mathjs';
import { RiSendPlane2Fill } from "react-icons/ri";


const GraphicInput = ({ equation, numPoints }) => {
  const data = [];
  const parser = math.parser();

  const variables = ['x', 'y', 'z'];

  // Compila la ecuación una vez
  parser.evaluate(`f(${variables.join(', ')}) = ${equation.toLowerCase()}`);

  for (let i = -numPoints; i <= numPoints; i++) {
    const values = {};

    // Asigna el valor correspondiente a cada variable
    for (let j = 0; j < variables.length; j++) {
      values[variables[j]] = i;
      parser.set(variables[j], values[variables[j]]);
    }

    const y = parser.evaluate(`f(${variables.join(', ')})`);
    data.push({ [variables[0]]: values[variables[0]], y });
  }

  return data;
};



export const Graphic = () => {
    const [equationInput, setEquationInput] = useState('')
    const [equationInputResult, setEquationInputResult] = useState('x')
    const onSubmitForm = (e) => {
        e.preventDefault()
        if (equationInput.length > 0) {
            setEquationInputResult(equationInput)
        }
    }

    const dataGraphic = GraphicInput({ equation: equationInputResult, numPoints: 10 });

    const minX = Math.min(...dataGraphic.map((d) => d.x));
    const minY = Math.min(...dataGraphic.map((d) => d.y))
    return (
        <>

            <ResponsiveContainer width="100%" height={500}>
                <LineChart
                    width={500}
                    height={300}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    data={dataGraphic}

                >
                    <CartesianGrid strokeDasharray="3 3" />

                    <YAxis
                        dataKey="y"
                        domain={['auto', 'auto']}
                        type="number"
                        interval={0}
                        label={{
                            value: `y`,
                            style: { textAnchor: 'middle' },
                            angle: -90,
                            position: 'left',
                            offset: 0,
                        }}
                        allowDataOverflow={true}
                        strokeWidth={minX < 0 ? 0 : 1}
                    />

                    <XAxis
                        dataKey="x"
                        domain={['auto', 'auto']}
                        interval={0}
                        type="number"
                        label={{
                            key: 'xAxisLabel',
                            value: 'x',
                            position: 'bottom',
                        }}
                        allowDataOverflow={true}
                        strokeWidth={minY < 0 ? 0 : 1}
                    />

                    {minY < 0 && (
                        <ReferenceLine
                            y={0}
                            stroke="darkgray"
                            strokeWidth={1.5}
                            strokeOpacity={0.65}
                        />
                    )}
                    {minX < 0 && (
                        <ReferenceLine
                            x={0}
                            stroke="darkgray"
                            strokeWidth={1.5}
                            strokeOpacity={0.65}
                        />
                    )}

                    <Line
                        strokeWidth={2}
                        data={dataGraphic}
                        dot={false}
                        type="monotone"
                        dataKey="y"
                        stroke="#2b7ea1"
                        tooltipType="none"
                    />
                    <ReferenceLine
                        x={0}
                        stroke="gray"
                        strokeWidth={1.5}
                        strokeOpacity={0.65}
                    />

                    <ReferenceLine
                        y={0}
                        stroke="gray"
                        strokeWidth={1.5}
                        strokeOpacity={0.65}
                    />
                </LineChart>
            </ResponsiveContainer>
            <form action="" onSubmit={onSubmitForm} className="d-flex justify-content-center mt-3">
                <input type="text" className="numberInput w-50" onChange={(e) => setEquationInput(e.target.value)} />
                <button type="submit" className="ms-2" style={{border: "none", backgroundColor: "#bfdfed", borderRadius: "10px", transition: "ransform 0.2s, background-color 0.2s"}} >
                <RiSendPlane2Fill size={30} color="#2b7ea1" style={{ cursor: 'pointer' }}/>
                </button>

            </form>
        </>
    );
}