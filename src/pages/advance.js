import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Spirit } from '../styles/spirit-styles'
import { Layout } from '../components/common/layout'
import { APICard } from '../components/api'
import { MetaData, getMetaImageUrls } from '../components/common/meta'

const APIPage = ({ data, location }) => {
    // Add meta title and description or this page here to overwrite the site meta data as set in the config
    const title = `Advanced Engineering Guides`
    const description = `Comprehensive Explanation on Working of Advanced and Complex Engineering Marvels.`
    const imageUrl = getMetaImageUrls()

    const sectionStyles = {
        headingContainer: `col-12 col-4-ns mr10-ns`,
        cardContainer: `col-12 col-8-ns mt-vw4 mt0-ns grid-icon-boxes`,
    }

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
            <Layout mainClass="bg-whitegrey-l2" bodyClass="bg-white">
                <section className="bg-api-reference">
                    <div className={`${Spirit.page.xl} tc-ns pt-vw6 pt-vw5-ns pb-vw5 white`}>
                        <h1 className={`${Spirit.sectionHeading} gh-integration-header-shadow`}>Advanced Engineering Guides</h1>
                        <p className={Spirit.sectionSubHeading}>Comprehensive Explanation on Working of Advanced and Complex Engineering Marvels</p>
                    </div>
                </section>

                <div className={`${Spirit.page.l} pb-vw4 pb-vw3-ns pt-vw4 pt-vw3-ns`}>
                    <div className="grid-12">
                        <div className={sectionStyles.headingContainer}>
                            <h2 id="frontend-sdk" className={`${Spirit.h3} pt20 nt20`}>Automobile</h2>
                            <p className={`${Spirit.small} midgrey-l2 mt2`}>Understand the working of Automobiles and their core components.</p>
                        </div>
                        <div className={sectionStyles.cardContainer}>
                            <APICard to="/advance/automobile-introduction/" icon="blocks">Introduction</APICard>
                            <APICard to="/advance/automobile-engine/" icon="blocks">Internal Combustion Engine</APICard>
                            <APICard to="/advance/automobile-transmission/" icon="blocks">Transmission</APICard>
                            <APICard to="/advance/automobile-braking/" icon="blocks">Braking</APICard>
                        </div>
                    </div>

                    <div className="grid-12 mt-vw4 mt20-ns">
                        <div className={sectionStyles.headingContainer}>
                            <h2 id="rest-api" className={`${Spirit.h3} pt20 nt20`}>Aeroplane</h2>
                            <p className={`${Spirit.small} midgrey-l2 mt2`}>Understand the working of different components of Jets</p>
                        </div>
                        <div className={sectionStyles.cardContainer}>
                            <APICard to="/advance/jet-introduction/" icon="blocks">Introduction</APICard>
                            <APICard to="/advance/jet-engine/" icon="blocks">Jet Engine</APICard>
                            <APICard to="/advance/jet-design/" icon="blocks">Aerodynamic Design</APICard>
                            <APICard to="/advance/jet-navigation/" icon="blocks">Navigation Syatem</APICard>
                        </div>
                    </div>

                    <div className="grid-12 mt-vw4 mt20-ns">
                        <div className={sectionStyles.headingContainer}>
                            <h2 id="tools" className={`${Spirit.h3} pt20 nt20`}>Poweplants</h2>
                            <p className={`${Spirit.small} midgrey-l2 mt2`}>Understand the Working of Powerplants that electrify your house</p>
                        </div>
                        <div className={sectionStyles.cardContainer}>
                            <APICard to="/advance/powerplant-introduction/" icon="blocks">Introduction</APICard>
                            <APICard to="/advance/poweplant-turbine/" icon="blocks">Turbine</APICard>
                            <APICard href="advance/powerplant-boiler/" icon="blocks">Boiler</APICard>
                            <APICard to="/advance/poerplant-compressor/" icon="blocks">Compressor</APICard>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

APIPage.propTypes = {
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

export default APIPage

export const pageQuery = graphql`
    query {
        site {
            ...SiteMetaFields
        }
    }
`
