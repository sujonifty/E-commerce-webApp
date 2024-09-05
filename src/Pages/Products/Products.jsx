import { Button, Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";
import ProductCards from "./ProductCards";

const Products = () => {
    const [count, setCount] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(0);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/productsCount')
            .then(res => res.json())
            .then(data => setCount(data.count))
    }, [])
    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${currentPage}&&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [currentPage, itemsPerPage]);
    // console.log(count)
    const numberOfPage = Math.ceil(count / itemsPerPage);
    // count the page 
    const pages = [...Array(numberOfPage).keys()];
    const handleItemPerPage = (e) => {
        const val = parseInt(e.target.value);
        // console.log(val)
        setItemsPerPage(val);
        setCurrentPage(0);
    }
    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }
    return (
        <div className="h-full bg-fuchsia-400">
            <Sidebar className="h-full" aria-label="Sidebar with multi-level dropdown example">
                <Sidebar.Items className="h-fullbg-red-600">
                    <Sidebar.ItemGroup>

                        <Sidebar.Item href="#">
                            Rocking chair
                        </Sidebar.Item>
                        <Sidebar.Item href="#">
                            Side chair
                        </Sidebar.Item>
                        <Sidebar.Item href="#">
                            Lounge chair
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>

            <div className="flex flex-wrap justify-start items-end gap-4 md:gap-10 my-10">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-col-5  gap-10">
                {
                    products.map(item => <ProductCards key={item._id} item={item}></ProductCards>)
                }
            </div>

                <Button onClick={handlePrevPage}>Prev</Button>
                {
                    pages.map(page => <Button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={currentPage === page ? 'selected' : undefined}>{page}</Button>)
                }
                <Button onClick={handleNextPage}>Next</Button>
                <select onChange={handleItemPerPage} name="" id="" value={itemsPerPage}>
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="12">12</option>
                    <option value="16">16</option>
                </select>
            </div>
        </div>
    );
};

export default Products;