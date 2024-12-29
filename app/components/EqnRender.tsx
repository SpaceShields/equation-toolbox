'use client';
import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const EqnRender = (props) => {
    const tex = props.eqn;

  return (
        <BlockMath math={tex} />  
    )
}

export default EqnRender