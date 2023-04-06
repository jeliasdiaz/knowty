import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import PropTypes from 'prop-types'

export const Graphic = ({ data }) => {

    const dataGraphic = [
        {
            name: data[1]?.x1,
            value: data[0]?.y1,
        },
        {
            name: data[1]?.x2,
            value: data[0]?.y2,
        },
        {
            name: data[1]?.x3,
            value: data[0]?.y3,
        },
        {
            name: data[1]?.x4,
            value: data[0]?.y4,
        },
        {
            name: data[1]?.x5,
            value: data[0]?.y5,
        },
        {
            name: data[1]?.x6,
            value: data[0]?.y6,
        },
    ]

    return (
        <ResponsiveContainer width={"88%"} height={300}>
            <LineChart width={500} height={300} data={dataGraphic}>
                <Line type="monotone" dataKey="value" stroke="#2b7ea1" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </ResponsiveContainer>
    );
}

Graphic.propTypes = {
    data: PropTypes.array.isRequired
};
