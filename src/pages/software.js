import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Spirit } from '../styles/spirit-styles'
import { Layout } from '../components/common/layout'
import { SetupBox } from '../components/setup'
import { MetaData, getMetaImageUrls } from '../components/common/meta'

const SetupPage = ({ data, location }) => {
    // Add meta title and description for this page here to overwrite the site meta data as set in the config
    const title = `Engineering Softwares`
    const description = `Analysis and Comparision of various softwares used in the Industry and Academia for Design and Research Purposes`
    const imageUrl = getMetaImageUrls()

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="website"
                title={title || data.site.siteMetadata.title}
                description={description || data.site.siteMetadata.description}
                image={imageUrl}
            />
            <Layout mainClass="bg-whitegrey-l2 pb-vw3" bodyClass="bg-white">
                <section className="bg-setup">
                    <div className={`${Spirit.page.xl} tc-ns pt-vw6 pt-vw5-ns pb-vw5 white`}>
                        <h1 className={`${Spirit.sectionHeading} gh-integration-header-shadow`}>Software Guide</h1>
                        <p className={Spirit.sectionSubHeading}>
                            Honest & Unpaid reviews of softwares used in the indusrty and Academia for Research and Design Purposes.
                        </p>
                    </div>
                </section>

                <div className={`${Spirit.page.xl} mt-vw3`}>
                    <section className="grid-12 gutter-row-20 gutter-20-ns gutter-36-l">

                        <SetupBox to="/softwares/fluid-mechanics/" title="Fluid-Mechanics" icon="tools" iconClass="w8 h8" headingClass="mt2">
                            <p className={`${Spirit.small} mw70`}>
                                Ansys/Fluent, Ansys/CFX, OpenFoam, Convergence 
                            </p>
                        </SetupBox>

                        <SetupBox to="/softwares/solid-mechanics/" title="Solid-Mechanics" icon="tools" iconClass="w8 h8" headingClass="mt2">
                            <p className={`${Spirit.small} mw70`}>
                                Ansys/Static-Structural, Ansys/Multibody 
                            </p>
                        </SetupBox>
                    </section>
                </div>
            </Layout>
        </>
    )
}

SetupPage.propTypes = {
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

export default SetupPage

export const pageQuery = graphql`
    query {
        site {
            ...SiteMetaFields
        }
    }
`
