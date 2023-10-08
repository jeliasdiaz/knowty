import { chemicalReactionsItems } from '.'
import { ContentsTable, SectionTitle, TopWave } from '../../../components'
import { CartesianGrid, Label, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import Latex from 'react-latex'

export const GasLaws = () => {
    const leyBoyle = `$$P_1 * V_1 = P_2 * V_2$$`
    const leyCharles = `$$\\Large \\frac{V_1}{T_1} = \\frac{V_2}{T_2}$$`
    const leyGayLusaac = `$$\\Large \\frac{P_1}{T_1} = \\frac{P_2}{T_2}$$`
    const leyBoyleGrafica = [
        {
            value: 12,
        },
        {
            value: 3,
        },
        {
            value: 1.2,
        },
        {
            value: 1,
        },
        {
            value: 1,
        },
    ];

    const leyCharlesGrafica = [
        {
            value: 0,
        },
        {
            value: 2,
        },
        {
            value: 4,
        },
        {
            value: 6,
        },
        {
            value: 8,
        },
        {
            value: 10,
        },
    ];
    return (
        <div className="homeCard">
            <TopWave />
            <SectionTitle title="Leyes de los gases" />
            <ContentsTable items={chemicalReactionsItems} />

            <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                <p>
                    El estado gaseoso se caracteriza por la poca fuerza de atracción entre las moléculas; provocando que los cuerpos de dicho estado no posean forma ni volumen definido. Por esta razón, los gases se expanden hasta ocupar el volumen del recipiente que los contiene. <br /> <br />

                    Teniendo esto claro, se deriva el concepto de gas ideal, este consiste en un gas teórico caracterizado por el movimiento aleatorio de las partículas dentro de ellos. Dicho tipo de gas, se comporta de forma ideal cuando está a temperaturas altas y bajas presiones. De esta manera, las leyes de los gases expuestas a continuación, solo aplican en este tipo de gases.</p>

                <h4 id="leyBoyle">Ley de Boyle</h4>
                <p>Postula que en un gas a mayor presión, menor es el volumen. Dicho de otro modo, la relación es inversamente proporcional a temperatura constante. Dicha ley se evidencia, por ejemplo, en una jeringa que esté sellada. A medida que presionemos el émbolo, el volumen disminuye y la presión aumenta. Su gráfica y ecuación son las siguientes:</p>

                <ResponsiveContainer width={"88%"} height={300}>
                    <LineChart width={500} height={300} data={leyBoyleGrafica} >
                        <Line type="monotone" dataKey="value" stroke="#2b7ea1" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name">
                            <Label value="Volumen" offset={-2} position="insideBottom" />
                        </XAxis>
                        <YAxis>
                            <Label value="Presión" angle={-90} position="insideLeft" />
                        </YAxis>
                    </LineChart>
                </ResponsiveContainer>

                <h5>Ecuación</h5>
                <Latex>{leyBoyle}</Latex>
                <br /><br />

                <h4 id="leyCharles">Ley de Charles</h4>
                <p>Postula que en los gases, el volumen es directamente proporcional a la temperatura a presión constante. Por ejemplo, al llenar un globo con aire caliente, su volumen se expandirá. Su gráfica y ecuación son las siguientes:</p>

                <ResponsiveContainer width={"88%"} height={300}>
                    <LineChart width={500} height={300} data={leyCharlesGrafica} >
                        <Line type="monotone" dataKey="value" stroke="#2b7ea1" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name">
                            <Label value="Temperatura" offset={-2} position="insideBottom" />
                        </XAxis>
                        <YAxis>
                            <Label value="Volumen" angle={-90} position="insideLeft" />
                        </YAxis>
                    </LineChart>
                </ResponsiveContainer>

                <h5>Ecuación</h5>
                <Latex>{leyCharles}</Latex>
                <br /><br />

                <h4 id="leyGayLussac">Ley de Gay-Lussac</h4>
                <p>Postula que en los gases, la presión es directamente proporcional a la temperatura a volumen constante. Por ejemplo, tenemos la olla a presión, al calentarla y estar sellada, provoca que la presión dentro de esta aumente. Su gráfica y ecuación son las siguientes:</p>
                <ResponsiveContainer width={"88%"} height={300}>
                    <LineChart width={500} height={300} data={leyCharlesGrafica} >
                        <Line type="monotone" dataKey="value" stroke="#2b7ea1" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name">
                            <Label value="Temperatura" offset={-2} position="insideBottom" />
                        </XAxis>
                        <YAxis>
                            <Label value="Presión" angle={-90} position="insideLeft" />
                        </YAxis>
                    </LineChart>
                </ResponsiveContainer>

                <h5>Ecuación</h5>
                <Latex>{leyGayLusaac}</Latex>
            </div>
        </div>
    )
}
