import React, { Component } from 'react';

import MovieList from './MovieList';

class Movie extends Component {

    constructor() {
        super()
        this.state = {
            moviesList: []
        }
    }

    componentDidMount() {
        fetch("/api/products")
            .then(res => res.json())
            .then(movies => {
                this.setState({ moviesList: movies.data })
            })
    }

    render() {

        return (
            <React.Fragment>
                {/*<!-- PRODUCTS LIST -->*/}
                <h1 className="h3 mb-2 text-gray-800">Todos los productos en la base de datos.</h1>

                {/*<!-- DataTales Example -->*/}
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Producto</th>
                                        <th>Categoría</th>
                                        <th>Descripción</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>Id</th>
                                        <th>Producto</th>
                                        <th>Categoría</th>
                                        <th>Descripción</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {
                                        this.state.moviesList.map((movie, i) => {
                                            return <MovieList {...movie} key={i} />
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Movie;
