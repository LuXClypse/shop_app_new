import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import AddProducts from "./components/addproducts/AddProducts";
import CardBody from "./components/cards/CardBody";
import Button from "./components/button/Button";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import "./App.css";

const Home = ({ items, searchValue, setSearchValue, addItem, removeItem, addedItems, setShowAddProducts }) => {
    const itemsFilter = items.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    function changingSearchData(e) {
        setSearchValue(e.target.value);
    }

    return (
        <div className="body__container">
            <div className="nav">
                <Header />
                <div className="nav-right">
                    <Search
                        products={items}
                        value={searchValue}
                        onChangeData={changingSearchData}
                    />
                    <Button num={addedItems.length} click={() => setShowAddProducts(true)} />
                </div>
            </div>
            <CardBody
                products={itemsFilter}
                addItem={addItem}
                removeItem={removeItem}
                addedItems={addedItems}
            />
        </div>
    );
};

const App = () => {
    const [items, setItem] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [addedItems, setAddedItem] = useState([]);
    const [showAddProducts, setShowAddProducts] = useState(false);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/")
            .then((response) => setItem(response.data))
            .catch((error) => console.error(error));
    }, []);

    function addItem(item) {
        item.addNumber = 1;
        const itemArr = addedItems;
        setAddedItem([...itemArr, item]);
    }

    function removeItem(item) {
        const newItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
        setAddedItem(newItems);
    }

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            items={items}
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            addItem={addItem}
                            removeItem={removeItem}
                            addedItems={addedItems}
                            setShowAddProducts={setShowAddProducts}
                        />
                    }
                />
                <Route
                    path="/add-products"
                    element={
                        <AddProducts
                            click={setShowAddProducts}
                            items={addedItems}
                            removeItem={removeItem}
                            setAddedItem={setAddedItem}
                        />
                    }
                />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default App;
