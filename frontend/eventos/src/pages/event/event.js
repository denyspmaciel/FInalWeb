import React, { Component } from 'react';

import api from '../../services/api';

import './styles.css';

export default class Event extends Component {

    state = {
        event: {},
    };

    async componentDidMount() {

        const { id } = this.props.match.params;

        const response = await api.get(`/events/${id}`);

        this.setState({ event: response.data });

    };

    render() {

        const { event } = this.state;

        return (
            <div className="product-info">
                <h1>{event.nome}</h1>
                <p>Local: {event.local}</p>
                <p>Data: {event.data}</p>
                <p>Horário: {event.horario}</p>
                <p>
                    Quantidade de ingressos disponíveis: {event.ingressos}
                </p>
            </div>
        )
    };
}