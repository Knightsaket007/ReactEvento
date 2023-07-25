import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';

const MODAL_STYLES = {
    position: 'fixed',
    transform:'translate(-50%,-50%)',
    top:'50%',
    bottom:0,
    right:0,
    left:'50%',
    zIndex: 900,
    background:'linear-gradient(to right, hsl(210, 30%, 20%), hsl(255, 30%, 25%))',
    boxShadow: 'hsla(236, 50%, 50%, .3) 10px 10px 90px 15px',
        color:'white',
    borderRadius:'10px'
}

const container_modal={
position:'fixed',
top:0,
bottom:0,
right:0,
left:0,
backgroundColor:'rgba(0,0,0,.7)',
zIndex:'900',

}
export default function Modal({ open, children, onClose }) {
    if (!open) return null
    return (
        <div style={container_modal}>
           
        <div style={MODAL_STYLES}>
            <button style={{float:'right', fontSize:'30px', color:'white', border:'none', background:'transparent',cursor:"pointer"}} onClick={onClose}><AiFillCloseCircle /></button>
            {children}
        </div>
        </div>
    )

}