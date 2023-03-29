import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import PropTypes from 'prop-types'

export const Graphic = ({ data }) => {

    const dataGraphic = [
        {
            name: data[1]?.number1,
            value: data[0]?.number1,
        },
        {
            name: data[1]?.numberTwo,
            value: data[0]?.numberTwo,
        },
        {
            name: data[1]?.numberThree,
            value: data[0]?.numberThree,
        },
        {
            name: data[1]?.numberFour,
            value: data[0]?.numberFour,
        },
        {
            name: data[1]?.numberFive,
            value: data[0]?.numberFive,
        },
        {
            name: data[1]?.numberSix,
            value: data[0]?.numberSix,
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
    )
}

Graphic.propTypes = {
    data: PropTypes.object.isRequired
}