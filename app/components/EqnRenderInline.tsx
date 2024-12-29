'use client';
import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

const EqnRender = (props) => {
    const tex = props.eqn;

  return (
        <InlineMath math={tex} />  
    )
}

export default EqnRender