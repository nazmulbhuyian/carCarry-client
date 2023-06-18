

const Pagination = ({nPages, currentPage, setCurrentPage}) => {
// const Pagination = (nPages, currentPage, setCurrentPage) => {
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
    return (
        <div>
            <div className="flex justify-center mt-12">
                <nav aria-label="Page navigation example">
                    <ul className="flex list-style-none mb-12 bg-white">
                        {
                            pageNumbers?.map(pgNumber =>
                                // <li key={pgNumber}
                                //     className={`page-item ${currentPage === pgNumber ? 'active' : ''}`}>
                                <li key={pgNumber} className={`page-item ${currentPage === pgNumber ? 'active' : ''}`}>
                                    <button
                                        className="page-link relative block py-1.5 px-3 border-2 ml-1 bg-transparent outline-none transition-all durati text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:bg-red-500 focus:text-white rounded-lg"
                                    onClick={() => setCurrentPage(pgNumber)}
                                    >{pgNumber}</button>
                                </li>
                            )
                        }
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Pagination;