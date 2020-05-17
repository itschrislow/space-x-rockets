import Layout from "../components/layout"

export default function Rockets() {
    return(
        <Layout>
            <div className="has-text-white is-size-6">
                <div className="columns">
                    <div className="column">
                        <p className="rocket-name has-text-weight-bold">Falcon 1</p>
                        <p>Republic of the Marshall Islands</p>
                        
                        <br />
                
                        <p className="has-text-weight-bold">Description</p>
                        <p>The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.</p>
                    </div>
                    <div className="column is-one-quarter">
                        <img src="images/example_card_img.jpg" />
                    </div>
                </div>

                <p className="has-text-weight-bold">Size</p>
                <div className="columns">
                    <div className="column is-2">
                        <p>Height</p>
                        <p>Mass</p>
                        <p>Diameter</p>
                    </div>
                    <div className="column">
                        <p>70 m</p>
                        <p>1823814 kg</p>
                        <p>12.2 m</p>
                    </div>
                </div>

                
            </div>
        </Layout>
    )
}