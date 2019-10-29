import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Main extends Component {

    state = {
        events: [],
        eventInfo: {},
        page: 1,
    }

    componentDidMount() {
        this.loadProducts();
    };

    loadProducts = async (page = 1) => {
        const response = await api.get(`/events?page=${page}`);
        //console.log(response.data.docs);
        const { docs, ...eventInfo } = response.data;
        this.setState({ events: docs, eventInfo: eventInfo, page: page });
    };

    prevPage = () => {
        const { page, eventInfo } = this.state;

        //Verifica se já está na primeira página
        if (page === 1 ) {
            //Se sim, não faz nada
            return ;
        }

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    };

    nextPage = () => {
        const { page, eventInfo} = this.state;

        //Saber se já está na última página
        if (page === eventInfo.pages) {
            //Se sim, não faz nada
            return ;
        }

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    };

    render() {

        const { events, page, eventInfo } = this.state;

        //return <h1>Contagem de produtos: {this.state.products.length}</h1>
        return (
            <div className="event-list">
                {events.map(event => (
                    <article key={event._id}>
                        <strong>{event.nome}</strong>
                        <p>{event.data}</p>
                        <Link to={`/events/${event._id}`}> Acessar </Link>
                    </article>
                ))}

                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === eventInfo.pages} onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        )
    };
};