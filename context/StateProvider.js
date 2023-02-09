import React, { createContext, useContext, useEffect, useState } from "react";
import * as Contacts from "expo-contacts";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [contactsError, setContactsError] = useState("");
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [
            Contacts.Fields.FirstName,
            Contacts.Fields.LastName,
            Contacts.Fields.PhoneNumbers,
            Contacts.Fields.Name,
          ],
        });
        if (data.length > 0) {
          setContacts(data);
          // console.log(data);
          // console.log(data[0].phoneNumbers);
        } else {
          setContactsError("No contacts found");
        }
      } else {
        setContactsError("Permission ti access contacts denied");
      }
    })();
  }, []);

  return (
    <StateContext.Provider
      value={{
        contacts,
        contactsError,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
