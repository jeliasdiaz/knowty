import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export const Graphic = ({ data }) => {

    const dataGraphic = data[0]?.map((value) => (
        {
            name: data[1].map(x => x),
            value,
        }
    ));

    return (
        <ResponsiveContainer width={"88%"} height={300}>
            <LineChart width={500} height={300} data={dataGraphic}>
                <Line type="monotone" dataKey="value" stroke="#2b7ea1" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </ResponsiveContainer>
    )
}