import React, { useEffect, useState } from 'react';
import { DataTable } from '../components/DataTable';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

const MedicineView = () => {
  const [medicines, setMedicines] = useState([]);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [displayDialog, setDisplayDialog] = useState(false);
  const [newMedicine, setNewMedicine] = useState({ name: '', price: '', quantity: '' });

  useEffect(() => {
    // fetch medicines from server or local storage
    setMedicines([
      { id: 1, name: 'Medicine 1', price: 10, quantity: 20 },
      { id: 2, name: 'Medicine 2', price: 20, quantity: 15 },
      { id: 3, name: 'Medicine 3', price: 30, quantity: 25 },
      { id: 4, name: 'Medicine 4', price: 40, quantity: 30 },
      { id: 5, name: 'Medicine 5', price: 50, quantity: 10 },
    ]);
  }, []);

  const handleRowSelect = (event) => {
    setSelectedMedicine(event.data);
    setDisplayDialog(true);
  };

  const handleDialogHide = () => {
    setSelectedMedicine(null);
    setDisplayDialog(false);
  };

  const handleAddNewMedicine = () => {
    // add new medicine to the list
    setMedicines([...medicines, { ...newMedicine, id: medicines.length + 1 }]);
    setNewMedicine({ name: '', price: '', quantity: '' });
    setDisplayDialog(false);
  };

  const handleUpdateMedicine = () => {
    // update selected medicine in the list
    const updatedMedicines = medicines.map((medicine) =>
      medicine.id === selectedMedicine.id ? selectedMedicine : medicine
    );
    setMedicines(updatedMedicines);
    setSelectedMedicine(null);
    setDisplayDialog(false);
  };

  const handleDeleteMedicine = () => {
    // delete selected medicine from the list
    const updatedMedicines = medicines.filter((medicine) => medicine.id !== selectedMedicine.id);
    setMedicines(updatedMedicines);
    setSelectedMedicine(null);
    setDisplayDialog(false);
  };

  const header = (
    <div className="p-d-flex p-jc-between">
      <h2>Medicines</h2>
      <Button label="Add" icon="pi pi-plus" onClick={() => setDisplayDialog(true)} />
    </div>
  );

  const medicineFields = [
    { field: 'name', header: 'Name' },
    { field: 'price', header: 'Price' },
    { field: 'quantity', header: 'Quantity' },
  ];

  return (
    <div className="medicine-view">
      <DataTable
        value={medicines}
        header={header}
        fields={medicineFields}
        onRowSelect={handleRowSelect}
        rowHover
        className="p-datatable-sm"
      />
      <Dialog
        visible={displayDialog}
        onHide={handleDialogHide}
        header={selectedMedicine ? 'Edit Medicine' : 'Add New Medicine'}
        modal
        className="medicine-dialog"
        >
        <div className="medicine-dialog-content">
        {displayErrorMessage && (
        <div className="p-text-danger">{displayErrorMessage}</div>
        )}
        <div className="p-fluid">
        <div className="p-field">
        <label htmlFor="name">Name</label>
        <InputText
        id="name"
        value={medicine.name}
        onChange={(e) => handleInputChange(e, 'name')}
        />
        </div>
        <div className="p-field">
        <label htmlFor="description">Description</label>
        <InputTextarea
        id="description"
        value={medicine.description}
        onChange={(e) => handleInputChange(e, 'description')}
        rows={3}
        />
        </div>
        <div className="p-field">
        <label htmlFor="price">Price</label>
        <InputNumber
        id="price"
        value={medicine.price}
        onValueChange={(e) => handleInputChange(e, 'price')}
        mode="currency"
        currency="NGN"
        locale="en-NG"
        />
        </div>
        <div className="p-field">
        <label htmlFor="category">Category</label>
        <Dropdown
        id="category"
        value={medicine.category}
        options={medicineCategories}
        onChange={(e) => handleInputChange(e, 'category')}
        optionLabel="name"
        placeholder="Select a category"
        />
        </div>
        </div>
        </div>
        <div className="medicine-dialog-footer">
        <Button
                 label="Cancel"
                 icon="pi pi-times"
                 onClick={handleDialogHide}
                 className="p-button-text"
               />
        <Button
        label={selectedMedicine ? 'Update' : 'Save'}
        icon="pi pi-check"
        onClick={handleSave}
        className="p-button-success"
        disabled={!isFormValid()}
        />
        </div>
        </Dialog>
        </div>
        );
        
        
        
        
        }
        
        export default MedicineView;
