export default function FilterBySelect ({ filteredElement, possibleValues , handleChange }) {
    return (
        <div className="card shadow p-3 my-3">
            <div className="row">
                <div className="col-12">
                    <h5 className="mb-3">
                        Filtra per genere
                    </h5>
                    <select 
                        value={filteredElement}
                        onChange={handleChange}

                        className="form-select" 
                        aria-label="Select for genre filter"
                    >
                        <option defaultValue value="all">Tutti</option>

                        {
                            possibleValues.map((genre, index) => {
                                return (
                                    <option key={index} value={genre}>{genre}</option>
                                );
                            })
                        }
                    </select>
                </div>
            </div>
        </div>
    );
};