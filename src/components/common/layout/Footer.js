import React from 'react'
import { Spirit } from '../../../styles/spirit-styles'
import { Link } from 'gatsby'
import { Icon, Logo } from '../.'

const listItemClass = `mb2 lh-1-65` // TODO: Probably should go to spirit-styles.js
const linkClass = `link pa2 midgrey hover-blue dib mr5 f8`

const Footer = () => (
    <footer className="pt10 pt-vw3-ns pb-vw3 bt b--whitegrey">

        <section className={`${Spirit.page.xl} grid-12`}>

            <a href="https://themechcafe.ml/inventory" className="db col-12 col-6-ns pr2 pr20-ns pt12 pt7-ns pb7 pl2 pl30-ns relative tdn bn br-ns b--whitegrey dark-h4-hover">
                <Icon name="computer" className="absolute top-0 top-10-ns left-2 left-10-ns w10 w13-ns h-auto fill-green" />
                <h4 className={`${Spirit.h4} darkgrey`}>Ready to learn?</h4>
                <p className={`${Spirit.small} midgrey mt1`}>
                    Spend less time searching for crisp information and more time learning the concepts.
                </p>
            </a>

            <a href="https://rutvik-solanki.ml/contact" className="db col-12 col-6-ns pr2 pr20-ns pt18 pt7-ns pb7 pl2 pl30-ns bt b--whitegrey bn-ns relative tdn dark-h4-hover">
                <Icon name="chat-double-bubble" className="absolute top-6 top-10-ns left-2 left-10-ns w10 w13-ns h-auto fill-purple" />
                <h4 className={`${Spirit.h4} darkgrey`}>Looking for help or advice?</h4>
                <p className={`${Spirit.small} midgrey mt1`}>Contact me via the contact section in developer page</p>
            </a>

        </section>

        <section className={`${Spirit.page.xl} m1 mt-vw3-ns`}>

            <div className="bt b--whitegrey flex justify-between items-center pt4">
                <ul className="flex list pa0 ma0 items-center">
                    <li className={listItemClass}><a href="https://themechcafe.ml" className="dib pt2 mr6"><Logo /></a></li>
                    <li className={`${listItemClass} dn db-l`}><a href="https://mechcafe.ml/inventory/" className={linkClass}>Knowledge Inventory</a></li>
                    <li className={`${listItemClass} dn db-l`}><a href="https://mechcafe.ml/mechshots" className={linkClass}>MechShots</a></li>
                    <li className={`${listItemClass} dn db-l`}><a href="https://mechcafe.ml/research" className={linkClass}>Research</a></li>
                    <li className={`${listItemClass} dn db-l`}><a href="https://rutvik-solanki.ml/contact" className={linkClass}>Contact</a></li>
                </ul>

                <ul className="flex list pa0 ma0 items-center">
                    <li className={listItemClass}><a href="https://mechcafe.ml" className="link pa2 midgrey hover-blue dib mr0">TheMechCafe</a></li>
                </ul>
            </div>

        </section>
    </footer>
)

export default Footer
