export default function FilterBySelect ({ filteredElement, handleChange }) {
    return (
        <div className="card shadow p-3 my-3">
            <div className="row">
                <div className="col-12">
                    <h5 className="mb-3">
                        Filtra per titolo
                    </h5>
                    <input className="form-control"
                        value={filteredElement}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    );
};