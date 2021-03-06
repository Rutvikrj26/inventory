import React from 'react'

import { Spirit } from '../styles/spirit-styles'
import { Layout } from '../components/common/layout'
import { Icon } from '../components/common'

const NotFoundPage = () => (
    <Layout headerDividerStyle="shadow">
        <div className={`${Spirit.page.m} pt-vw5 pb-vw5 flex flex-column items-center`}>
            <Icon name="four-o-four-icon" className="w15 h-auto stroke-lightgrey" />
            <h1 className={Spirit.h1}>404</h1>
            <p className={`${Spirit.p} midgrey`}>You just hit a route that doesn&#39;t exist... the sadness.</p>
            <div className="flex mt5">
                <a href="https://themechcafe.ml/inventory/" className="pa2 dib blue hover-darkgrey link br b--whitegrey">Inventory Home</a>
                <a href="https://themechcafe.ml/" className="pa2 dib blue hover-darkgrey link">TheMechCafe</a>
            </div>
        </div>
    </Layout>
)

export default NotFoundPage
