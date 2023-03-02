import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export const Graphic = ({ data }) => {

    const graphic = [

        ...data.map((value) => ({
            value,
        })),
    ];

    return (
        <ResponsiveContainer width={"88%"} height={300}>
            <LineChart width={500} height={300} data={graphic}>
                <Line type="monotone" dataKey="value" stroke="#2b7ea1" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </ResponsiveContainer>
    )
}