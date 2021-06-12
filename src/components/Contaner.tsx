import React from 'react'
import { css } from '@emotion/css'

const classes = {
  root: css`
    max-width: 900px;
    margin: 0 auto;
    padding-left: 24px;
    padding-right: 24px;
  `,
}

export default function Container(props: React.ComponentPropsWithRef<'div'>) {
  return <div className={classes.root} {...props} />
}
