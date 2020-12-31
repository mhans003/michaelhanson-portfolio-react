function Container({ main, children }) {
    return <div className="container" id={`${main ? 'main' : ''}`}>{children}</div>
}

export default Container;