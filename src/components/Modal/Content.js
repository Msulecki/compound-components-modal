import React from 'react';

function Content(props) {
    const { children } = props;
    return (
        <section>{children}</section>
    );
}
export default Content;