import { CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";
import * as math from 'mathjs';
import { RiSendPlane2Fill } from "react-icons/ri";

const GraphicInput = ({ equation, numPoints }) => {
    const data = [];
    const parser = math.parser();
  
    const variable = 'x';
  
    for (let i = -numPoints; i <= numPoints; i++) {
      const value = i;
      parser.set(variable, value);
      const y = parser.evaluate(equation.toLowerCase());
      data.push({ [variable]: value, y });
    }
  
    return data;
  };

export const Graphic = () => {
    const [equationInput, setEquationInput] = useState('');
    const [equationInputResult, setEquationInputResult] = useState('x');
    const [dataGraphic, setDataGraphic] = useState([]);
    const [error, setError] = useState('');

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (equationInput.length > 0) {
            setEquationInputResult(equationInput);
        }
    };

    useEffect(() => {
        try {
            const newData = GraphicInput({ equation: equationInputResult, numPoints: 10 });
            setDataGraphic(newData);
            setError(null);
        } catch (err) {
            setError(err);
        }
    }, [equationInputResult]);

    const minX = Math.min(...dataGraphic.map((d) => d.x));
    const minY = Math.min(...dataGraphic.map((d) => d.y));

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
            <form action="" onSubmit={onSubmitForm} >
                <div className="d-flex justify-content-center mt-3">
                    <input
                        type="text"
                        className="numberInput w-50"
                        onChange={function (e) { setEquationInput(e.target.value); setError('') }}
                        style={error ? { outline: "1px solid #f56565" } : {}}
                        placeholder="Escribe tu ecuación"
                    />
                    <button type="submit" className="ms-2" style={{ border: "none", backgroundColor: "#bfdfed", borderRadius: "10px", transition: "ransform 0.2s, background-color 0.2s" }} >
                        <RiSendPlane2Fill size={30} color="#2b7ea1" style={{ cursor: 'pointer' }} />
                    </button>
                </div>
                {error &&
                    <div class="w-50 p-1 mt-1 pe-5 mx-auto">
                        <span style={{ color: "#f56565", fontSize: "13px" }}>{error.message}</span>
                    </div>
                }
            </form>


        </>
    );
};
