import React from "react";
import "./P63Footer.css";
const P63Footer = ({ altText }) => {
    console.log("Footer rendered with text:", altText);
    return (
        <table className="daily-table">
            <tbody>
                <tr>
                    <td>오전<br />5시~8시</td>
                    <td colSpan="5" className="input-cell">
                        <input type="text" />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default P63Footer;
