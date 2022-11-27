import GlobalStyles from '../src/styles/global'
import React from 'react'

const withGlobalStyles = (storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
)

export default withGlobalStyles
