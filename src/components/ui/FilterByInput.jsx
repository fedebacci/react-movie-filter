export default function FilterBySelect ({ filteredElement, handleChange }) {
    return (
        <div className="card shadow p-3 my-5">
            <div className="row">
                <div className="col-12">
                    <h2>Filtra per titolo</h2>
                    <input className="form-control"
                        value={filteredElement}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    );
};