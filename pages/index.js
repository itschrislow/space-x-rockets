import Head from 'next/head'
import Link from 'next/link'
import { gql } from 'apollo-boost'
import ApolloClient from 'apollo-boost'
import { ApolloProvider, useQuery } from '@apollo/react-hooks'

import Layout from '../components/layout'

const client = new ApolloClient({
    uri: 'https://api.spacexdata.com/v3/rockets'
})

const ROCKETS = gql`
    {
        rockets {
            id
        }
    }
`

function Rockets() {
    const { loading, error, data } = useQuery(ROCKETS)

    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        console.log(error)
        return <p>Error</p>
    }

    console.log(data)

    return <h1>Got Rockets</h1>
}

export default function Home() {
    return (
        <Layout>
            <div>
                <header className="level logo">
                    <img src="images/logo.png" />
                </header>

                {/* Rocket Cards */}
                <div className="columns is-multiline">
                    <div className="column is-one-quarter">
                        <Link href="/rockets">
                            <div class="card">
                            <div class="card-image">
                                {/* <figure class="image is-4by3"> */}
                                <img src="images/example_card_img.jpg" />
                                {/* </figure> */}
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <p class="title is-4">Falcon 1</p>
                                        <p class="subtitle is-6">Republic of Marshall Islands</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Link>                            
                    </div>
                </div>           
            </div>
        </Layout>
    )
}
