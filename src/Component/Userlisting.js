import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FetchUserList, Removeuser } from "../Redux/Action";
import React, { useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { Button, Grid } from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Userlisting = (props) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [selectedId, setSelectedId] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenDailog = (id) => {
    setSelectedId(id);
    setOpen(true);
  };
  const handleDelete = (code) => {
    props.removeuser(selectedId);
    window.location.reload();
    props.loaduser();
    setOpen(false);
  };

  const handleEdit = (rowData) => {
    navigate("/user/edit", { state: { rowData } });
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "client_id",
        header: "client_id ",
        size: 100,
      },
      {
        accessorKey: "name",
        header: " Name",
        size: 100,
      },
      {
        accessorKey: "email",
        header: "email",
        size: 100,
      },
      {
        accessorKey: "phone_number",
        header: "phone number",
        size: 100,
      },
      {
        accessorKey: "comment",
        header: "comment",
        size: 300,
      },
      {
        accessorKey: "id",
        header: "Actions",
        size: 10,
        Cell: ({ row }) => {
          return (
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <p
                onClick={() => {
                  handleOpenDailog(row.original.id);
                }}
              >
                <DeleteIcon style={{ color: "red" }} />
              </p>
              <p onClick={() => handleEdit(row.original)}>
                <EditIcon style={{ color: "green" }} />
              </p>
            </div>
          );
        },
      },
    ],
    []
  );

  useEffect(() => {
    props.loaduser();
  }, []);

  return (
    <>
      <Grid>
        <div className="header"></div>
      </Grid>

      <Grid className="table">
        <Link className="buttonlink" to={"/user/add"}>
          <Button variant="contained">Add User</Button>
        </Link>

        <MaterialReactTable
          columns={columns}
          data={props?.user?.userlist?.data || []}
          enablePagination={false}
        />
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {"Confirm"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {"Are you want to sure delete this entity"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="error">
            No
          </Button>
          <Button variant="contained" onClick={handleDelete} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loaduser: () => dispatch(FetchUserList()),
    removeuser: (code) => dispatch(Removeuser(code)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Userlisting);
