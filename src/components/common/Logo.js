import React from 'react'
import PropTypes from 'prop-types'

const Logo = ({ height, theme }) => {
    const fillColor = theme === `light` ? `#FFFFFF` : `#2D3134`

    return <svg style={{ height: `${height}px`, width: `auto` }} viewBox="0 0 493 161" xmlns="http://www.w3.org/2000/svg"><title>TheMechCafe</title><g fill="none" fillRule="evenodd"><path d="M328.52 37.36c-27.017 0-40.97 19.323-40.97 43.16 0 23.837 13.61 43.162 40.97 43.162s40.968-19.325 40.968-43.163c0-23.84-13.954-43.16-40.97-43.16zm20.438 43.237c-.02 15.328-5.126 27.743-20.44 27.743-15.312 0-20.42-12.414-20.435-27.743v-.078c.016-15.33 5.124-27.74 20.437-27.74 15.312 0 20.42 12.41 20.438 27.74v.07zM207.553 5.19c0-1.103.885-2.124 1.984-2.282 0 0 13.577-1.95 14.784-2.115 1.37-.187 3.19.798 3.19 2.744v44.236c3.23-3.105 6.79-5.608 10.66-7.515 3.88-1.906 8.43-2.86 13.66-2.86 4.53 0 8.53.776 12.03 2.33 3.5 1.55 6.43 3.73 8.77 6.533 2.34 2.81 4.12 6.16 5.33 10.05 1.21 3.9 1.82 8.19 1.82 12.87v51.35c0 1.1-.89 2-2 2h-15.95c-1.1 0-2-.9-2-1.99V69.18c0-5.118-1.17-9.08-3.51-11.888-2.35-2.804-5.86-4.207-10.544-4.207-3.45 0-6.677.79-9.69 2.37-3.02 1.58-5.87 3.73-8.564 6.46v58.617c0 1.102-.894 2-2.002 2h-15.94c-1.11 0-2.005-.895-2.005-2V5.188zm244.007 95.327v-43.68h-13.482c-1.1 0-1.742-.87-1.443-1.916l3-10.49c.262-.9.942-1.87 2.308-2.07l9.597-1.35 3.508-23.49c.163-1.09 1.18-2.1 2.274-2.26 0 0 9.192-1.31 10.963-1.58 1.673-.25 3.19.97 3.19 2.81v24.52h17.565c1.106 0 2.002.9 2.002 2.01v11.82c0 1.11-.89 2.01-2.002 2.01h-17.566v43.08c0 6.02 3.623 8.32 7.095 8.32 2.12 0 5.02-1.14 7.19-2.16 1.34-.62 3.41-.16 3.95 1.73l2.45 8.65c.3 1.07-.25 2.37-1.23 2.86 0 0-7.29 4.37-17.06 4.37-13.73 0-22.33-8.08-22.33-23.16zm-44.584-47.74c-7.084 0-12.657 2.476-12.657 8.433 0 7.44 12.01 9.606 20.23 12.64 5.49 2.027 20.24 5.98 20.24 22.016 0 19.48-16 27.807-33.06 27.807-17.06 0-25.4-5.465-25.4-5.465-.96-.527-1.5-1.822-1.2-2.89 0 0 2.1-7.52 2.64-9.386.48-1.68 2.41-2.27 3.64-1.792 4.39 1.712 12.32 4.092 21.28 4.092 9.07 0 13.46-2.803 13.46-8.777 0-7.95-12.26-10.38-20.36-12.967-5.59-1.78-20.36-5.93-20.36-23.566 0-17.373 15.08-25.524 31.2-25.524 13.64 0 23.5 4.69 23.5 4.69 1.01.427 1.58 1.635 1.28 2.698l-2.658 9.357c-.488 1.74-1.898 2.537-3.666 1.957-3.89-1.277-11.2-3.322-18.15-3.322zm-210.313-15.28c-6.695.775-11.472 3.962-14.562 6.93-6.06-4.81-14.49-7.106-23.94-7.106-18.95 0-33.76 9.26-33.76 29.43 0 11.58 4.88 19.56 12.62 24.26-5.75 2.75-9.57 8.59-9.57 14.34 0 9.61 7.5 12.61 7.5 12.61s-13.11 6.44-13.11 19.32c0 16.49 15.01 23.16 33.34 23.16 26.43 0 44.61-11.04 44.61-31.31 0-12.47-9.44-19.36-30.01-20.18-12.2-.48-20.11-.93-22.07-1.58-2.59-.87-3.86-2.96-3.86-5.28 0-2.55 2.08-4.98 5.35-6.65 2.86.516 5.87.768 8.99.768 18.97 0 33.76-9.223 33.76-29.425 0-4.897-.87-9.15-2.46-12.78 2.79-1.506 8.34-2.25 8.34-2.25 1.09-.17 1.975-1.21 1.974-2.31V40.3c0-1.88-1.59-2.955-3.1-2.78zm-49.13 85.132s9.954.38 19.9.84c11.172.52 14.654 2.96 14.654 8.81 0 7.15-9.71 14.1-23.28 14.1-12.88 0-19.314-4.54-19.314-12.08 0-4.33 2.26-9.18 8.04-11.69zm10.66-40.54c-8.978 0-15.983-4.83-15.983-15.35 0-10.53 7.01-15.35 15.983-15.35 8.974 0 15.984 4.81 15.984 15.34 0 10.53-7.002 15.34-15.984 15.34z" fill={fillColor}></path><g opacity=".6" transform="translate(0 36)" fill={fillColor}><rect x=".209" y="69.017" width="33.643" height="17.014" rx="4"></rect><rect x="50.672" y="69.017" width="33.622" height="17.014" rx="4"></rect><rect x=".184" y="34.99" width="84.121" height="17.014" rx="4"></rect><rect x=".209" y=".964" width="50.469" height="17.013" rx="4"></rect><rect x="67.494" y=".964" width="16.821" height="17.013" rx="4"></rect></g></g></svg>
}

Logo.defaultProps = {
    height: 25,
    theme: `dark`,
}

Logo.propTypes = {
    height: PropTypes.number,
    theme: PropTypes.string,
}

export default Logo
