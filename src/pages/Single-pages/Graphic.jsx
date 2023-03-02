import { CartesianGrid, Label, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export const Graphic = ({ data }) => {

    const graphic = [

        ...data.map((value, index) => ({
            value,
        })),
    ];

    return (
        <ResponsiveContainer width={"88%"} height={300}>
            <LineChart width={500} height={300} data={graphic}>
                <Line type="monotone" dataKey="value" stroke="#2b7ea1" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name">
                    <Label value="Tiempo" offset={-2} position="insideBottom" />
                </XAxis>
                <YAxis>
                    <Label value="Posición" angle={-90} position="insideLeft" />
                </YAxis>
            </LineChart>
        </ResponsiveContainer>
    )
}