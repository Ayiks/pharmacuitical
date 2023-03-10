import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { Checkbox } from 'primereact/checkbox';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import { AutoComplete } from 'primereact/autocomplete';


const POS = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showReceipt, setShowReceipt] = useState(false);
  const [customerDialog, setCustomerDialog] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [productSuggestions, setProductSuggestions] = useState([]);
const searchProducts = (event) => {
  // your search function code here
}
const [quantity, setQuantity] = useState(1);
const [price, setPrice] = useState(0);
const [cartItems, setCartItems] = useState([]);
const deleteButtonTemplate = (rowData) => {
  // your delete button template code here
};
const [total, setTotal] = useState(0);

const addToCart = () => {
  // your add to cart function code here
};

const cancelOrder = () => {
  // your cancel order function code here
};

const checkout = () => {
  // your checkout function code here
};



  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 10.0,
      description: 'This is the first product',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 20.0,
      description: 'This is the second product',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 30.0,
      description: 'This is the third product',
    },
  ];

  const customers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '555-1234',
      address: '123 Main St, Anytown USA',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      phone: '555-5678',
      address: '456 Oak St, Anytown USA',
    },
  ];

  const onProductSelect = (e) => {
    setSelectedProducts([...selectedProducts, e.data]);
  };

  const removeSelectedProduct = (index) => {
    setSelectedProducts(selectedProducts.filter((p, i) => i !== index));
  };

  const onCustomerSave = () => {
    // save customer to database or API
    setNewCustomer({
      name: '',
      email: '',
      phone: '',
      address: '',
    });
    setCustomerDialog(false);
  };

  const receiptFooter = () => {
    const total = selectedProducts.reduce((acc, cur) => acc + cur.price, 0);
    return (
      <>
        <div className="p-grid p-justify-between">
          <div className="p-col-4 p-text-left">
            <Button
              label="Add Customer"
              icon="pi pi-user-plus"
              className="p-button-outlined"
              onClick={() => setCustomerDialog(true)}
            />
          </div>
          <div className="p-col-4 p-text-center">
            <h5>Total: ${total.toFixed(2)}</h5>
          </div>
          <div className="p-col-4 p-text-right">
            <Button
              label="Print Receipt"
              icon="pi pi-print"
              className="p-button-outlined"
              onClick={() => window.print()}
            />
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="p-grid p-fluid">
      <div className="p-col-12 p-md-6">
        <div className="card">
          <h1>Point of Sale</h1>
          <div className="p-field p-grid">
            <label htmlFor="product" className="p-col-12 p-md-2">Product:</label>
            <div className="p-col-12 p-md-10">
              <AutoComplete id="product" placeholder="Search for a product" suggestions={productSuggestions} field="name" completeMethod={searchProducts} />
            </div>
          </div>
          <div className="p-field p-grid">
            <label htmlFor="quantity" className="p-col-12 p-md-2">Quantity:</label>
            <div className="p-col-12 p-md-10">
              <InputText id="quantity" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            </div>
          </div>
          <div className="p-field p-grid">
            <label htmlFor="price" className="p-col-12 p-md-2">Price:</label>
            <div className="p-col-12 p-md-10">
              <InputText id="price" value={price} disabled />
            </div>
          </div>
          <div className="p-field p-grid">
            <div className="p-col-12 p-md-2"></div>
            <div className="p-col-12 p-md-10">
              <Button label="Add to Cart" onClick={addToCart} />
            </div>
          </div>
        </div>
      </div>
      <div className="p-col-12 p-md-6">
        <div className="card">
          <h1>Shopping Cart</h1>
          <DataTable value={cartItems} emptyMessage="No items in cart">
            <Column field="name" header="Name"></Column>
            <Column field="quantity" header="Quantity"></Column>
            <Column field="price" header="Price"></Column>
            <Column body={deleteButtonTemplate}></Column>
          </DataTable>
          <h3>Total: {total.toFixed(2)}</h3>
          <div className="p-grid">
            <div className="p-col-12 p-md-6">
              <Button label="Cancel" onClick={cancelOrder} className="p-button-danger p-button-lg" />
            </div>
            <div className="p-col-12 p-md-6">
              <Button label="Checkout" onClick={checkout} className="p-button-success p-button-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }
  
  export default POS;