function Section({ id, title, children }) {
    return (
        <section id={id} className="section container">
        <h2>{title}</h2>
        {children}
        </section>
    );
}

export default Section;
