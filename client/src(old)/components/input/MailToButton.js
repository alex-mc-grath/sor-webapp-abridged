import React from "react";
import { Link } from "react-router-dom";

export const MailToButton = ({ mailto, label, ...props }) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
            {...props}
        >
            {label}
        </Link>
    );
};