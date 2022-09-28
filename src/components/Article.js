import React from "react";

function Article ({title, date = "September 28, 2022", preview, }) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    )
}
export default Article;