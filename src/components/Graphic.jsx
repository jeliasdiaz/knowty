import { CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, XAxis, YAxis } from "recharts";
import PropTypes from 'prop-types'

import * as math from 'mathjs';
import { useState } from "react";


const GraphicInput = ({ equation, numPoints }) => {
    const data = [];
    const parser = math.parser();
  
    const variables = ['x', 'y', 'z']; // Agrega todas las variables que necesites
  
    for (let i = -numPoints; i <= numPoints; i++) {
      const values = {}; // Objeto para almacenar los valores de las variables
  
      for (const variable of variables) {
        values[variable] = i; // Asigna el valor correspondiente a cada variable
        parser.set(variable, values[variable]); // Asigna los valores en el analizador matemático
      }
  
      parser.evaluate(`f(${variables.join(', ')}) = ${equation}`); // Utiliza todas las variables en la ecuación
  
      const y = parser.evaluate(`f(${variables.join(', ')})`);
      data.push({ [variables[0]]: values[variables[0]], y: y }); // Utiliza la primera variable en el eje x
  
      // Si deseas incluir más variables en el resultado, puedes agregar más propiedades al objeto dentro de data.push()
    }

    return data;
  };



export const Graphic = ({ data }) => {

    // const dataGraphic = [
    //     {
    //         x: data[1]?.x1,
    //         y: data[0]?.y1,
    //     },
    //     {
    //         x: data[1]?.x2,
    //         y: data[0]?.y2,
    //     },
    //     {
    //         x: data[1]?.x3,
    //         y: data[0]?.y3,
    //     },
    //     {
    //         x: data[1]?.x4,
    //         y: data[0]?.y4,
    //     },
    //     {
    //         x: data[1]?.x5,
    //         y: data[0]?.y5,
    //     },
    //     {
    //         x: data[1]?.x6,
    //         y: data[0]?.y6,
    //     },
    // ]
    const [equationInput, setEquationInput] = useState('')
    const [equationInputResult, setEquationInputResult] = useState('x^2')
    const onSubmitForm = (e) => {
        e.preventDefault()
        setEquationInputResult(equationInput)
    }
    const dataGraphic = GraphicInput({ equation: equationInputResult, numPoints: 5 });


    const minX = Math.min(...data.map((d) => d.x));
    const minY = Math.min(...data.map((d) => d.y))
    return (
        <>

            <ResponsiveContainer width={900} height={900}>
                <LineChart
                    width={500}
                    height={300}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    data={dataGraphic }
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
                        stroke="black"
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
            <form action="" onSubmit={onSubmitForm}>
            <input type="text" onChange={(e) => setEquationInput(e.target.value)} />

            </form>
        </>
    );
}

Graphic.propTypes = {
    data: PropTypes.array.isRequired
};
