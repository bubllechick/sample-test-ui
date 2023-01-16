import React, { useState, useEffect } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { CDBContainer } from 'cdbreact';
import { Col, Container, Row } from 'react-bootstrap';

const AdminContent = () => {

    const [data] = useState({
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(194, 116, 161, 0.5)',
                borderColor: 'rgb(194, 116, 161)',
                data: [65, 59, 90, 81, 56, 55, 40],
            },
            {
                label: 'My Second dataset',
                backgroundColor: 'rgba(71, 225, 167, 0.5)',
                borderColor: 'rgb(71, 225, 167)',
                data: [28, 48, 40, 19, 96, 27, 100],
            },
        ],
    });

    const [data1] = useState({
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(194, 116, 161, 0.5)',
                borderColor: 'rgb(194, 116, 161)',
                data: [65, 59, 90, 81, 56, 55, 40],
            },
            {
                label: 'My Second dataset',
                backgroundColor: 'rgba(71, 225, 167, 0.5)',
                borderColor: 'rgb(71, 225, 167)',
                data: [28, 48, 40, 19, 96, 27, 100],
            },
        ],
    });

    const [data3, setData3] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(194, 116, 161, 0.5)',
                borderColor: 'rgb(194, 116, 161)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(71, 225, 167, 0.5)',
                pointHoverBorderColor: 'rgb(71, 225, 167)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40],
            },
        ],
    });

    useEffect(() => {
        setInterval(function () {
            var oldDataSet = data3.datasets[0];
            var newData = [];

            for (var x = 0; x < data.labels.length; x++) {
                newData.push(Math.floor(Math.random() * 100));
            }

            var newDataSet = {
                ...oldDataSet,
            };

            newDataSet.data = newData;

            var newState = {
                ...data,
                datasets: [newDataSet],
            };

            setData3(newState);
        }, 5000);
    }, []);


    return (
        <Container>
            <Row>
                <Col>
                    <CDBContainer>
                        <h3 className="mt-5">Line chart</h3>
                        <Line data={data} options={{ responsive: true }} />
                    </CDBContainer>
                </Col>
                <Col>
                    <CDBContainer>
                        <h3 className="mt-5">Pie chart</h3>
                        <Pie data={data1} options={{ responsive: true }} />
                    </CDBContainer>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CDBContainer>
                        <h3 className="mt-5">Dynamicly Refreshed Line chart</h3>
                        <Line data={data3} options={{ responsive: true }} />
                    </CDBContainer>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminContent
