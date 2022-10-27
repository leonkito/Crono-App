import React from "react";

export default function Divider({ children }) {
        const mystyle = {
        display:"flex",
        width:"100%",
        alignItems: 'center',
      };
    return (
        <div style={mystyle}>
            <div style={{marginRight:'10px', background:"black",height:'3px',width:"100%"}}></div>
                <h2 style={{whiteSpace: 'nowrap'}}>{children}</h2>
            <div style={{marginLeft:'10px',background:"black",height:'3px',width:"100%"}}></div>
        </div>
    );
  }