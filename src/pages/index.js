import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { Icon, Box } from '../components/common'
import { Layout } from '../components/common/layout'
import { HomeHeader, HomeAPIBox, HomeFAQLink } from '../components/home'
import { Spirit } from '../styles/spirit-styles'
import { MetaData, getMetaImageUrls } from '../components/common/meta'

const HomePage = ({ data, location }) => {
    // Add meta title and description for this page here to overwrite the site meta data as set in the config
    const title = `TheMechCafe | Knowledge Inventory`
    const description = `Mechanical Engineering Made Easy and Accesible - Learn all things Mechanical, from basic concepts to Engineering Guides and Software reviews`
    const imageUrl = getMetaImageUrls()

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="website"
                title={title}
                description={description}
                image={imageUrl}
            />
            <Layout
                headerDividerStyle="shadow"
                bodyClass="bg-white"
                mainClass="bg-whitegrey-l2 pb-vw6 pb-vw3-ns"
                header={<HomeHeader />}
            >
                <div className="pt-vw3 home-main-box-padding-ns">
                    <div className={`${Spirit.page.xl} grid-12 gutter-row-20 gutter-40-ns`}>

                    <section className="col-12 col-6-ns flex flex-column justify-between mt4 mt0-ns">
                            <Link to="/concepts/introduction" className={`${Spirit.h3} link darkgrey hover-midgrey flex-grow-0`}>Basic Concepts</Link>

                            <Box className="mt5 tdn flex-auto flex flex-column items-stretch" elevation="1">
                                <HomeAPIBox
                                    to="/concepts/fluid"
                                    title="Fluid Mechanics"
                                    icon="check-circle"
                                >
                                    Learn/Revise the Basic Concepts governing Fluid Flow and the related Forces
                                </HomeAPIBox>
                                <HomeAPIBox
                                    to="/concept/solid"
                                    title="Solid Mechanics"
                                    icon="check-circle"
                                >
                                    Learn/Revise the Basic Concepts governing solid deformation and the related stress/strain relations 
                                </HomeAPIBox>
                                <HomeAPIBox
                                    to="/concept/gear"
                                    title="Gear Design"
                                    icon="check-circle"
                                >
                                    Learn/Revise the important points and calculations to kept in mind while designing gears 
                                </HomeAPIBox>
                            </Box>
                        </section>

                        <section className="col-12 col-6-ns flex flex-column justify-between mt4 mt0-ns">
                            <Link to="/advance/" className={`${Spirit.h3} link darkgrey hover-midgrey flex-grow-0`}>Advanced Guides</Link>

                            <Box className="mt5 tdn flex-auto flex flex-column items-stretch" elevation="1">
                                <HomeAPIBox
                                    to="/advance/#automobile"
                                    title="Automobiles"
                                    icon="tools"
                                >
                                    Understand the Working of all Automobile Parts and of Automobile as a whole
                                </HomeAPIBox>
                                <HomeAPIBox
                                    to="/advance/#turbine"
                                    title="Aeroplanes"
                                    icon="cycle"
                                >
                                    Understand the working of Different Types of Aeroplanes/Jets and their associated engines 
                                </HomeAPIBox>
                                <HomeAPIBox
                                    to="/advance/#powerplants"
                                    title="Powerplants"
                                    icon="eco-lightbulb"
                                >
                                    Understand the working of the Powerplants that keep your houses electrified 
                                </HomeAPIBox>
                            </Box>
                        </section>
                    </div>
                </div>
            </Layout>
        </>
    )
}

HomePage.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                siteUrl: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
}

export default HomePage

export const pageQuery = graphql`
    query {
        site {
            ...SiteMetaFields
        }
    }
`
