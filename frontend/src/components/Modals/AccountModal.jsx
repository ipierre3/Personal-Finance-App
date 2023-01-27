import React, { useState, useEffect } from "react";
import AccountFormModal from "./AccountFormModal";
import axios from "axios";

const AccountModal = (props) => {
  const [institutions, setInstitutions] = useState([]);
  const [institution, setInstitution] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/institution/").then((res) => {
      setInstitutions(res.data);
    });

    return () => {};
  }, []);

  const selectInstitution = (inst) => {
    setInstitution(inst);
  };

  const unselectInstitution = () => {
    setInstitution(null);
  };

  const goBack = () => {
    props.goBack();
  };

  if (!institutions) {
    return <div></div>;
  }

  const institutionsList = institutions.map((inst, index) => (
    <li
      className='group'
      onClick={() => selectInstitution(inst)}
      key={index}
      >
      {/* <img className='inst-logo' src={inst.logo_url} /> */}
      <p>{inst.name}</p>
    </li>
  ));

  if (institution) {
    return (
      <AccountFormModal
          toggleModal={props.toggleModal}
          goBack={unselectInstitution}
          inst={institution.name}
          logo={institution.logo_url}
          id={institution.id}
        />
    );
  } else {

    return (
      <div className='modal-edit-form'>
        <h1 className='main-header-account'>
          Choose from these popular Banking accounts
        </h1>
        <p>
          Note: Provide account data.
        </p>
        <ul className='modal-edit-institutions'>{institutionsList}</ul>
        <p id='add-account-back' onClick={goBack} className='go-back' to={"/"}>
          Go back
        </p>
      </div>
    );
  }
};

export default AccountModal;
