import { Button, Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";
import ProductCards from "./ProductCards";

const Products = () => {
    const [count, setCount] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(0);
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);

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
    // filter section 
    useEffect(() => {
        fetch(`http://localhost:5000/allProducts`)
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])
    console.log('all data', allProducts)
    const handleRockingChair=()=>{
        
            const filterBrands = allProducts.filter((item) => item.category === 'Rocking chair');
            setProducts(filterBrands);
            console.log('Rocking chair', filterBrands)
        
    }
    const handleSideChair=()=>{
        
            const filterBrands = allProducts.filter((item) => item.category === 'Side chair');
            setProducts(filterBrands);
            console.log('Rocking chair', filterBrands)
        
    }
    const handleLoungeChair=()=>{
        
            const filterBrands = allProducts.filter((item) => item.category === 'Lounge chair');
            setProducts(filterBrands);
            console.log('Rocking chair', filterBrands)
        
    }
    
    return (
        <div className="flex">
    {/* Sidebar */}
    <div className="w-1/4">
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
            <Sidebar.Items >
                <Sidebar.ItemGroup>
                    <Sidebar.Item onClick={handleRockingChair} href="#">
                        Rocking chair
                    </Sidebar.Item>
                    <Sidebar.Item onClick={handleSideChair} href="#">
                        Side chair
                    </Sidebar.Item>
                    <Sidebar.Item onClick={handleLoungeChair}href="#">
                        Lounge chair
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    </div>

    {/* Product Cards */}
    <div className="w-3/4">
        <div className="flex flex-wrap justify-start items-end gap-4 md:gap-10 my-10">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
                {products.map(item => (
                    <ProductCards key={item._id} item={item} />
                ))}
            </div>

            {/* Pagination and Items per Page */}
            <div className="flex items-center justify-center space-x-2 mt-4">
                <Button onClick={handlePrevPage}>Prev</Button>
                {pages.map(page => (
                    <Button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={currentPage === page ? 'selected' : undefined}
                    >
                        {page}
                    </Button>
                ))}
                <Button onClick={handleNextPage}>Next</Button>
                <select onChange={handleItemPerPage} value={itemsPerPage}>
                    <option value="6">6</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                </select>
            </div>
        </div>
    </div>
</div>

    );
};

export default Products;