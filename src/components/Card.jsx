function Card({ image, title, description, badge, children }) {
    return (
        <article className="card">
        {image && <img src={image} className="card__image" alt={title} />}

        <div className="card__body">
            {title && <h3 className="card__title">{title}</h3>}
            {description && <p className="card__desc">{description}</p>}
            {children}
            {badge && <span className="badge">{badge}</span>}
        </div>
        </article>
    );
}

export default Card;
