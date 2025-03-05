'use client';
import React from 'react';
import { GlobalStyles } from './GlobalStyleProvider.style';


interface Props {
    children: React.ReactNode;
}

function GlobalStyleProvider({ children }: Props) {
    return (
        <GlobalStyles>{children}</GlobalStyles>
    )
}


export default GlobalStyleProvider;