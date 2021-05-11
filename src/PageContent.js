import React, { useContext } from 'react'
import {ThemeContext} from './contexts/ThemeContext'

export const PageContent = (props) => {
//destructure passed in as a value prop from the themecontext
const {isDarkMode} = useContext(ThemeContext)

        const styles = {
            // objects can have ternaries
            backgroundColor: isDarkMode?'black':'white',
            height: '100vh',
            width: '100vw'
        }
        return (
            <div style={styles}>
            {/* allows you to style page content while having the child components residing inside it such as below */}
                {props.children}
            </div>
        )
}
export default PageContent

{/* <PageContent>
<Navbar/>
</PageContent> */}