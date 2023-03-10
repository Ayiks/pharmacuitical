import React, { useState, useRef, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { dataTableData } from "../data/staff";
import { TabView, TabPanel } from "primereact/tabview";
import { Checkbox } from "primereact/checkbox";
import "../css/staffView.css";
import "primereact/resources/themes/md-light-deeppurple/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const StaffView = () => {
  const [selectedData, setSelectedData] = useState(null);
  const [displayDialog, setDisplayDialog] = useState(false);
  const [displayAddDialog, setDisplayAddDialog] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);
  const [newStaffMember, setNewStaffMember] = useState({
    name: "",
    email: "",
    password: "",
    telephone: "",
    permissions: {
      admin: false,
      sales: false,
      staff: false,
      customer:false,
      supplier:false,
      report:false,
      medicine:false,
    },
  });

  const editAction = (rowData) => {
    setSelectedData(rowData);
    setDisplayDialog(true);
  };

  const deleteAction = (rowData) => {
    // write delete logic here
  };


  const renderActions = (rowData) => {
    return (
      <div>
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success p-mr-2"
          onClick={() => editAction(rowData)}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-danger"
          onClick={() => deleteAction(rowData)}
        />
      </div>
    );
  };

  const actionHeader = (
    <Button
      label="Add New Staff"
      icon="pi pi-plus"
      className="p-button-primary"
      onClick={() => setDisplayAddDialog(true)}
    />
  );

  const dt = useRef(null);

  useEffect(() => {
    // initialize datatable
    if (dt.current) {
      dt.current.filter("", "name", "contains");
    }
  }, []);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setNewStaffMember((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onCalendarChange = (e) => {
    const { name, value } = e.target;
    setNewStaffMember((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setNewStaffMember((prevState) => ({
      ...prevState,
      permissions: {
        ...prevState.permissions,
        [name]: checked,
      },
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // perform form validation here
    setIsFormValid(true);
  };

  const saveNewStaffMember = () => {
    console.log("New staff member added: ", newStaffMember);
    setDisplayAddDialog(false);
    setNewStaffMember({
      name: "",
      email: "",
      password: "",
      telephone: "",
      permissions: {
        admin: false,
        sales: false,
        staff: false,
        customer:false,
        supplier:false,
        report:false,
        medicine:false,
      },
    });
  };

  return (
    <div className="data-table-wrapper">
      <DataTable
        value={dataTableData}
        className="p-datatable-sm"
        ref={dt}
        paginator
        rows={10}
        rowsPerPageOptions={[5, 10, 20]}
      >
        <Column field="name" header="Name" sortable />
        <Column field="position" header="Position" />
        <Column field="office" header="Office" />
        <Column field="age" header="Age" />
        <Column field="start_date" header="Start Date" />
        <Column field="salary" header="Salary" />
        <Column body={renderActions} header={actionHeader} />
      </DataTable>
      <Dialog
        visible={displayDialog}
        onHide={() => setDisplayDialog(false)}
        header={`Edit ${selectedData?.name}`}
      >
        {/* Add form content here */}
      </Dialog>


      <Dialog
        visible={displayAddDialog}
        onHide={() => setDisplayAddDialog(false)}
        header="Add New Staff Member"
        style={{ width: "50vw" }}
      >
        <TabView
          activeIndex={activeIndex}
          onTabChange={(e) => setActiveIndex(e.index)}
        >
          <TabPanel header="Bio Data">
            <div className="p-grid p-fluid">
              <div className="p-field p-col-12 p-md-6">
                <label htmlFor="name">Name</label>
                <InputText
                  id="name"
                  value={newStaffMember.name}
                  onChange={(e) =>
                    setNewStaffMember({
                      ...newStaffMember,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label htmlFor="email">E-mail</label>
                <InputText
                  id="email"
                  type="email"
                  value={newStaffMember.email}
                  onChange={(e) =>
                    setNewStaffMember({
                      ...newStaffMember,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="p-field p-col-12">
                <label htmlFor="password">Password</label>
                <InputText
                  id="password"
                  type="password"
                  value={newStaffMember.password}
                  onChange={(e) =>
                    setNewStaffMember({
                      ...newStaffMember,
                      password: e.target.value,
                    })
                  }
                />
              </div>
               <div className="p-field p-col-12">
                <label htmlFor="phone">Phone</label>
                <InputText
                  id="phone"
                  type="tel"
                  value={newStaffMember.phone}
                  onChange={(e) =>
                    setNewStaffMember({
                      ...newStaffMember,
                      phone: e.target.value,
                    })
                  }
                />
              </div>
              
            </div>
          </TabPanel>
          <TabPanel header="Permissions">
            <div className="p-grid p-fluid">
              <div className="p-field-checkbox p-col-12">
                <Checkbox
                  inputId="admin"
                  value="admin"
                  checked={newStaffMember.permissions.admin}
                  onChange={(e) =>
                    setNewStaffMember({
                      ...newStaffMember,
                      permissions: {
                        ...newStaffMember.permissions,
                        admin: e.checked,
                      },
                    })
                  }
                />
                <label htmlFor="admin">Admin</label>
              </div>
              <div className="p-field-checkbox p-col-12">
                <Checkbox
                  inputId="sales"
                  value="sales"
                  checked={newStaffMember.permissions.sales}
                  onChange={(e) =>
                    setNewStaffMember({
                      ...newStaffMember,
                      permissions: {
                        ...newStaffMember.permissions,
                        sales: e.checked,
                      },
                    })
                  }
                />
                <label htmlFor="sales">Sales</label>
              </div>
              <div className="p-field-checkbox p-col-12">
                <Checkbox
                  inputId="medicine"
                  value="medicine"
                  checked={newStaffMember.permissions.medicine}
                  onChange={(e) =>
                    setNewStaffMember({
                      ...newStaffMember,
                      permissions: {
                        ...newStaffMember.permissions,
                        medicine: e.checked,
                      },
                    })
                  }
                />
                <label htmlFor="medicine">Medicine</label>
              </div>
              <div className="p-field-checkbox p-col-12">
                <Checkbox
                  inputId="staff"
                  value="staff"
                  checked={newStaffMember.permissions.staff}
                  onChange={(e) =>
                    setNewStaffMember({
                      ...newStaffMember,
                      permissions: {
                        ...newStaffMember.permissions,
                        staff: e.checked,
                      },
                    })
                  }
                />
                <label htmlFor="staff">Staff</label>
              </div>
              <div className="p-field-checkbox p-col-12">
                <Checkbox
                  inputId="customer"
                  value="customer"
                  checked={newStaffMember.permissions.customer}
                  onChange={(e) =>
                    setNewStaffMember({
                      ...newStaffMember,
                      permissions: {
                        ...newStaffMember.permissions,
                        customer: e.checked,
                      },
                    })
                  }
                />
                <label htmlFor="customer">Customer</label>
              </div>
              <div className="p-field-checkbox p-col-12">
                <Checkbox
                  inputId="supplier"
                  value="supplier"
                  checked={newStaffMember.permissions.supplier}
                  onChange={(e) =>
                    setNewStaffMember({
                      ...newStaffMember,
                      permissions: {
                        ...newStaffMember.permissions,
                        supplier: e.checked,
                      },
                    })
                  }
                />
                <label htmlFor="supplier">Supplier</label>
              </div>
              <div className="p-field-checkbox p-col-12">
                <Checkbox
                  inputId="report"
                  value="report"
                  checked={newStaffMember.permissions.report}
                  onChange={(e) =>
                    setNewStaffMember({
                      ...newStaffMember,
                      permissions: {
                        ...newStaffMember.permissions,
                        report: e.checked,
                      },
                    })
                  }
                />
                <label htmlFor="report">report</label>
              </div>
            </div>
          </TabPanel>
        </TabView>
        <div className="p-dialog-footer">
          <Button label="Cancel" onClick={() => setDisplayAddDialog(false)} />
          <Button
            label="Save"
            onClick={() => {
              saveNewStaffMember();
              setDisplayAddDialog(false);
            }}
            // disabled={!isFormValid()}
          />
        </div>
      </Dialog>
    </div>
  );
};

export default StaffView;
