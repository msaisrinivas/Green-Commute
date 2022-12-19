import React from 'react'

export interface IconsProps {
    source?: string,
    className?: string,
    onClick?: () => void;
    style?: React.CSSProperties;
    height?: string;
    width?: string;
}

export const Icons = (props: IconsProps) => {
    let { source, onClick, style, className, height, width } = props
    return (
        <img src={source} height={height} width={width} alt="Logo" className={className} onClick={onClick} style={style} />
    )
}
