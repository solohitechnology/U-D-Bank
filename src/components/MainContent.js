import { Account } from "./Account";
import React, { useEffect, useState } from "react";
// import axios from axios;

// const API = " http://localhost:5000/api"

export const MainContent = (props) => {
  const users = props.users;
  const { editingUser, setEditingUser, setEditModal, setDeleteUser } = props;
  const [isCurrentUserAdmin, setIsCurrentUserAdmin] = useState(false);
  const [accNumb, SetAccNumb] = useState('')
  const [userExit, SetUserExit] = useState('')

  const SingleUser =  (e) => {
    const solo = e.target.value;
    SetAccNumb(solo)

  }

  const FindUser = async () => {
    alert('solohitech keep trying')

    // const result = await axios.post(` ${API}/findaccount`, accNumb )
    // .then((res) => {
    //   console.log(res.data)
    //   SetUserExit(res.data)
    // })
  }


  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('currentUser'));
    setIsCurrentUserAdmin(localUser.isAdmin);
  }, [isCurrentUserAdmin]);

  const bankAccounts = users.map((user, index) => {
    return <Account key={index} index={index} fullname={user.fullname}
      type={user.type}
      isAdmin={isCurrentUserAdmin}
      accountNumber={user.number}
      balance={user.balance}
      editingUser={editingUser}
      setEditingUser={setEditingUser} setEditModal={setEditModal}
      setDeleteUser={setDeleteUser} />
  });

  const onsUser =  <Account key={ userExit.id} fullname={userExit.fullname}
  type={userExit.type}
  isAdmin={userExit.isAdmin}
  accountNumber={userExit.number}
  balance={userExit.balance}
  editingUser={editingUser}
  setEditingUser={setEditingUser}
  setEditModal={setEditModal}
  setDeleteUser={setDeleteUser}
  />

  return (
    <section id="main-content">
      <code style={{ display: "flex", justifyContent: "space-around" }}>
        <input type="text" onChange={SingleUser} style={{ marginBottom: "20px", color: 'lightgreen', borderRadius: "5px 9px", border: 'none' }} placeholder="Search..." />
        <button onClick={FindUser}
          style={{ color: "whitesmoke", background: "darkgreen", width: "100px", height: "50px", borderRadius: "5px 20px", cursor: "pointer", marginBottom: "20px", border: "none" }}>
          Find User
        </button>
      </code>
      {bankAccounts}
    </section>
  )

}

